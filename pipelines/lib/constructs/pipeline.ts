import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks'
import * as sns from 'aws-cdk-lib/aws-sns'
import * as targets from 'aws-cdk-lib/aws-events-targets';
import { Construct } from 'constructs';

import * as events from 'aws-cdk-lib/aws-events';

import { PipelineConfig } from '../utils/types';


export interface PipelineProps {
    config: PipelineConfig;
    rawBucket: s3.Bucket;
    targetBucket: s3.Bucket;
    errorTopic: sns.Topic
}
export class PipelineConstruct extends Construct {
    constructor(scope: Construct, id: string, public props: PipelineProps) {
        super(scope, id);
        const defaultRuntime = lambda.Runtime.PYTHON_3_9;

        const defaultLambdaProps = {
            code: lambda.Code.fromAsset('lib/lambda/functions'),
            runtime: defaultRuntime,
        } as const

        // creates cdk lambda layer from the requirements.txt file
        const lambdaLayer = new lambda.LayerVersion(scope, 'lambdaLayer', {
            code: lambda.Code.fromAsset('lib/lambda/layer'),
            compatibleRuntimes: [defaultRuntime],
            license: 'Apache-2.0',
            description: 'Lambda layer for co2pricing-datapipelines',
        });


        // cdk python lambda function using all observability tools.
        const fetchRawCsv = new lambda.Function(scope, 'FetchRawCsv', {
            ...defaultLambdaProps,
            handler: 'fetch_csv/handle.handler',
            layers: [lambdaLayer],
            environment: {
                BUCKET_NAME: props.rawBucket.bucketName,
                SOURCE_URL: props.config.sourceUrl,
            }
        });
        props.rawBucket.grantWrite(fetchRawCsv, 'download/*');


        const optimizeCsvData = new lambda.Function(scope, 'OptimizeCsvData', {
            ...defaultLambdaProps,
            handler: 'fetch_csv/handle.handler',
            layers: [lambdaLayer],
            environment: {
                BUCKET_NAME: props.targetBucket.bucketName,
            }
        });
        props.rawBucket.grantRead(optimizeCsvData, 'data/*');
        props.targetBucket.grantWrite(optimizeCsvData, 'data/*');

        const stateMachine = this.createStateMachine(fetchRawCsv, optimizeCsvData, props.errorTopic);

        const rule = new events.Rule(scope, 'Rule', {
            schedule: events.Schedule.expression("cron(0 0 1 * ? *)")
        });
        rule.addTarget(new targets.SfnStateMachine(stateMachine));
    }

    createStateMachine(fetchRawCsv: lambda.Function, optimizeCsvData: lambda.Function, error_topic: sns.Topic) {
        const fetchTask = new tasks.LambdaInvoke(
            this, 'Fetch Blob', {
            payload: stepfunctions.TaskInput.fromObject({
                preffix: `download/${this.props.config.name}/`
            }),
            lambdaFunction: fetchRawCsv,
            outputPath: '$.Payload',
        });

        const optimizeTask = new tasks.LambdaInvoke(
            this, 'Optimize CSV', {
            lambdaFunction: optimizeCsvData,
            outputPath: '$.Payload',
        });
        const waitX = new stepfunctions.Wait(
            this, 'Wait X Seconds', {
            time: stepfunctions.WaitTime.duration(cdk.Duration.seconds(30)),
        });
        const jobFailed = new tasks.SnsPublish(this, 'PublishError', {
            message: stepfunctions.TaskInput.fromJsonPathAt('$.Payload'),
            topic: error_topic,
        })
        const jobSucceded = new stepfunctions.Succeed(this, 'Job Succeded');

        const chekSuccess = new stepfunctions.Choice(this, 'Job complete?')
            .when(stepfunctions.Condition.stringEquals('$.status', 'FAILED'), jobFailed)
            .when(stepfunctions.Condition.stringEquals('$.status', 'SUCCEEDED'), jobSucceded)
            .otherwise(waitX)

        const definition = fetchTask
            .next(optimizeTask)
            .next(chekSuccess);

        const stateMachine = new stepfunctions.StateMachine(
            this, 'StateMachine', {
            definition,
            timeout: cdk.Duration.minutes(5),
        });

        fetchRawCsv.grantInvoke(stateMachine.role)
        optimizeCsvData.grantInvoke(stateMachine.role)

        return stateMachine;
    }
}

