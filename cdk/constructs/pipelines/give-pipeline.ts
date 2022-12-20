import { readFileSync } from 'fs';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment'
import { Construct } from 'constructs';

import { SafeBucket } from '../safe-bucket';
import { ServerlessTable } from '../SlsTable';


interface Props {
    rawBucket: SafeBucket
}

const CSV_S3_PATH = 'static/MimiGIVE.csv'
const CSV_FILE_PATH = '../__FILES__/static/MimiGIVE.csv'

export class MimiGIVEPipeline extends Construct {
    public table: dynamodb.Table;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);


        this.table = new ServerlessTable(scope, id + 'Table')

        const csvData = readFileSync(CSV_FILE_PATH, { encoding: 'utf-8' })

        new s3Deploy.BucketDeployment(scope, id + 'DeployCsv', {
            destinationBucket: props.rawBucket,
            sources: [s3Deploy.Source.data(CSV_S3_PATH, csvData)],
        })

        // creates cdk lambda layer from the requirements.txt file
        const lambdaLayer = lambda.LayerVersion.fromLayerVersionArn(
            scope, id + "layer",
            'arn:aws:lambda:us-east-1:336392948345:layer:AWSSDKPandas-Python39:2'
        )

        const defaultLambdaProps = {
            code: lambda.Code.fromAsset('../apps/data'),
            runtime: lambda.Runtime.PYTHON_3_9,
        } as const
        // cdk python lambda function using all observability tools.
        const loadCsvData = new lambda.Function(scope, id + 'loadCsvData', {
            ...defaultLambdaProps,
            handler: 'load_csv/load.handler',
            layers: [lambdaLayer],
            environment: {
                RAW_BUCKET: props.rawBucket.bucketName,
                CSV_S3_PATH,
                TARGET_TABLE: this.table.tableName,
            }
        });
        this.table.grantWriteData(loadCsvData);

        const rule = new events.Rule(scope, id + 'Rule', {
            schedule: events.Schedule.expression("cron(0 1 1 * ? *)")
        });
        rule.addTarget(new targets.LambdaFunction(loadCsvData));
    }
}