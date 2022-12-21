import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

import { BasePipeline, Props } from './base-pipeline';


const SOURCE_URL = 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_trend_gl.csv'

export class NOAAPipeline extends BasePipeline {
    public table: dynamodb.Table;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id, {
            rawBucket: props.rawBucket,
            partitionKey: { name: 'snapshot_time', type: dynamodb.AttributeType.NUMBER },
            sortKey: { name: 'full_date', type: dynamodb.AttributeType.NUMBER },
            tableName: 'noaa'
        });
        const noaaFetch = new lambda.Function(
            scope, 'FetchNOAA', {
            handler: 'noaa.fetch',
            layers: [this.layer],
            ...this.defaultLambdaProps,
            environment: {
                SOURCE_URL,
                TARGET_TABLE: this.table.tableName,
            }
        });
        this.addPermissions(noaaFetch);
        this.addTrigger(noaaFetch);
    }
}