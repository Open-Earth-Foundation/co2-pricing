import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'

import { Construct } from 'constructs';

import { BasePipeline, Props } from './base-pipeline';


export class MimiFUNDPipeline extends BasePipeline {
    filePath = '../__FILES__/static/MimiFUND.csv'
    csvS3Path = 'static/MimiFUND.csv'

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id, {
            ...props,
            partitionKey: { name: 'year', type: dynamodb.AttributeType.NUMBER },
            tableName: 'mimifund'
        });
        this._lambda = new lambda.Function(scope, 'Load' + id, {
            ...this.defaultLambdaProps,
            handler: 'load_csv/load.handler',
            layers: [this.layer],
            environment: {
                RAW_BUCKET: this.rawBucket.bucketName,
                CSV_S3_PATH: this.csvS3Path,
                TARGET_TABLE: this.table.tableName,
            }
        });
        this.addPermissions(this._lambda);
    }


}