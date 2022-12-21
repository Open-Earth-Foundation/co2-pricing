import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

import { BasePipeline, Props } from './base-pipeline';


export class MimiGIVEPipeline extends BasePipeline {
    s3Path = 'static/MimiGIVE.csv'
    filePath = '../__FILES__/static/MimiGIVE.csv'

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id, {
            ...props,
            partitionKey: { name: 'year', type: dynamodb.AttributeType.NUMBER },
            tableName: 'mimigive'
        });
        const loadCsvData = new lambda.Function(scope, 'Load' + id, {
            ...this.defaultLambdaProps,
            handler: 'load_csv/load.handler',
            layers: [this.layer],
            environment: {
                RAW_BUCKET: props.rawBucket.bucketName,
                CSV_S3_PATH: this.s3Path,
                TARGET_TABLE: this.table.tableName,
            }
        });
        this.addPermissions(loadCsvData);
    }
}