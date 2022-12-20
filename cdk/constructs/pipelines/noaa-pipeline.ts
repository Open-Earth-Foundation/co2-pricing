import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

import { ServerlessTable } from '../SlsTable';


const SOURCE_URL = 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_trend_gl.csv'

export class NOAAPipeline extends Construct {
    public table: dynamodb.Table;

    constructor(scope: Construct, id: string) {
        super(scope, id);


        this.table = new ServerlessTable(scope, id + 'Table')

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
        const fetchDailyCsv = new lambda.Function(scope, id + 'FetchDailyCsv', {
            ...defaultLambdaProps,
            handler: 'noaa.fetch',
            layers: [lambdaLayer],
            environment: {
                SOURCE_URL,
                TARGET_TABLE: this.table.tableName,
            }
        });
        this.table.grantWriteData(fetchDailyCsv);

        const rule = new events.Rule(scope, id + 'Rule', {
            schedule: events.Schedule.expression("cron(0 0 1 * ? *)")
        });
        rule.addTarget(new targets.LambdaFunction(fetchDailyCsv));
    }
}