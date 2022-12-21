import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

import { SafeBucket } from '../safe-bucket';
import { ServerlessTable } from '../SlsTable';


export interface Props {
    rawBucket: SafeBucket
}

export abstract class BasePipeline extends Construct {
    public table: dynamodb.Table;
    protected _lambda: lambda.Function;
    protected layer: lambda.ILayerVersion;
    protected rawBucket: SafeBucket;
    public rule: events.Rule;

    filePath = '../__FILES__/static/MimiFUND.csv'
    csvS3Path = 'static/MimiFUND.csv'

    constructor(scope: Construct, id: string, { rawBucket, ...props }: Props & dynamodb.TableProps) {
        super(scope, id);
        this.rawBucket = rawBucket;
        this.table = new ServerlessTable(scope, id + 'Table', props)

        this.layer = lambda.LayerVersion.fromLayerVersionArn(
            scope, id + "layer",
            'arn:aws:lambda:us-east-1:336392948345:layer:AWSSDKPandas-Python39:2'
        )

        this.rule = new events.Rule(scope, id + 'Rule', {
            schedule: events.Schedule.expression("cron(0 1 1 * ? *)")
        });
    }

    protected addPermissions(fn: lambda.Function) {
        this.table.grantWriteData(fn);
        this.rawBucket.grantRead(fn);
    }

    protected addTrigger(fn: lambda.Function) {
        this.rule.addTarget(new targets.LambdaFunction(fn));
    }

    protected get defaultLambdaProps() {
        return {
            code: lambda.Code.fromAsset('../apps/data'),
            runtime: lambda.Runtime.PYTHON_3_9,
            timeout: cdk.Duration.seconds(30),
        } as const
    }
}