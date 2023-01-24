import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

import { BasePipeline, Props } from './base-pipeline';


export class NOAAPipeline extends BasePipeline {
    sourceUrl = 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_trend_gl.csv'
    table: dynamodb.Table;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id, {
            rawBucket: props.rawBucket,
            partitionKey: { name: 'full_date', type: dynamodb.AttributeType.NUMBER },
            sortKey: { name: 'snapshot_time', type: dynamodb.AttributeType.NUMBER },
            tableName: 'noaa'
        });
        const noaaFetch = new lambda.Function(
            scope, 'FetchNOAA', {
            ...this.defaultLambdaProps,
            handler: 'noaa.fetch',
            timeout: cdk.Duration.minutes(5),
            memorySize: 512,
            environment: {
                SOURCE_URL: this.sourceUrl,
                TARGET_TABLE: this.table.tableName,
            }
        });
        noaaFetch.addLayers(this.layer);
        this.addPermissions(noaaFetch);
        this.addTrigger(noaaFetch);
    }
}