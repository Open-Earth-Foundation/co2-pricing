import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sns from 'aws-cdk-lib/aws-sns'
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks'
import { Construct } from 'constructs';

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

        const pythonCode = lambda.Code.fromAsset('../apps/data')

        const defaultLambdaProps = {
            code: pythonCode,
            runtime: defaultRuntime,
        } as const

        // creates cdk lambda layer from the requirements.txt file
        const lambdaLayer = lambda.LayerVersion.fromLayerVersionArn(
            scope, id + "layer",
            'arn:aws:lambda:us-east-1:336392948345:layer:AWSSDKPandas-Python39:2'
        )

        // cdk python lambda function using all observability tools.
        const fetchRawCsv = new lambda.Function(scope, id + 'FetchRawCsv', {
            ...defaultLambdaProps,
            handler: 'fetch_csv/handle.handler',
            layers: [lambdaLayer],
            environment: {
                BUCKET_NAME: props.rawBucket.bucketName,
                SOURCE_URL: props.config.source,
            }
        });
        props.rawBucket.grantWrite(fetchRawCsv, 'download/*');


        const optimiseCsvData = new lambda.Function(scope, id + 'OptimiseCsvData', {
            ...defaultLambdaProps,
            handler: 'optimise_csv/handle.handler',
            layers: [lambdaLayer],
            memorySize: 1024,
            timeout: cdk.Duration.seconds(30),
            environment: {
                BUCKET_NAME: props.targetBucket.bucketName,
            }
        });
        props.rawBucket.grantRead(optimiseCsvData, 'download/*');
        props.targetBucket.grantWrite(optimiseCsvData, 'data/*');

        const stateMachine = this.createStateMachine(fetchRawCsv, optimiseCsvData, props.errorTopic);

        const rule = new events.Rule(scope, id + 'Rule', {
            schedule: events.Schedule.expression("cron(0 0 1 * ? *)")
        });
        rule.addTarget(new targets.SfnStateMachine(stateMachine));
    }

    createStateMachine(fetchRawCsv: lambda.Function, optimiseCsvData: lambda.Function, error_topic: sns.Topic) {
        const fetchTask = new tasks.LambdaInvoke(
            this, this.node.id + 'Fetch Blob', {
            payload: stepfunctions.TaskInput.fromObject({
                preffix: `download/${this.props.config.name}/`
            }),
            lambdaFunction: fetchRawCsv,
            outputPath: '$.Payload',
        });

        const optimiseTask = new tasks.LambdaInvoke(
            this, 'Optimise CSV', {
            payload: stepfunctions.TaskInput.fromObject({
                Bucket: stepfunctions.JsonPath.stringAt('$.Bucket'),
                Key: stepfunctions.JsonPath.stringAt('$.Key'),
                database: 'optimised',
                table: 'noaa_co2',
            }),
            lambdaFunction: optimiseCsvData,
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
            .next(optimiseTask)
            .next(chekSuccess);

        const stateMachine = new stepfunctions.StateMachine(
            this, 'StateMachine', {
            definition,
            timeout: cdk.Duration.minutes(5),
        });

        fetchRawCsv.grantInvoke(stateMachine.role)
        optimiseCsvData.grantInvoke(stateMachine.role)

        return stateMachine;
    }
}

