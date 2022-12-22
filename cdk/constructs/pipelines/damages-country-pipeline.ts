import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

import { BasePipeline, Props } from './base-pipeline';


export class DamagesCountryPipeline extends BasePipeline {
    filePath = '../__FILES__/static/damages_country.csv'
    csvS3Path = 'static/DamagesCountry.csv'

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id, {
            ...props,
            partitionKey: { name: 'ISO3', type: dynamodb.AttributeType.STRING },
            sortKey: { name: 'prtp', type: dynamodb.AttributeType.NUMBER },
            tableName: 'damagescountry'
        });
        const loadCsvData = new lambda.Function(scope, 'Load' + id, {
            ...this.defaultLambdaProps,
            handler: 'load_csv/load.handler',
            layers: [this.layer],
            timeout: cdk.Duration.minutes(5),
            memorySize: 768,
            environment: {
                RAW_BUCKET: this.rawBucket.bucketName,
                CSV_S3_PATH: this.csvS3Path,
                TARGET_TABLE: this.table.tableName,
            }
        });
        this.addPermissions(loadCsvData);
    }
}