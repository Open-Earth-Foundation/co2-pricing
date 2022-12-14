import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment'
import { Construct } from 'constructs';


export class SafeBucket extends s3.Bucket {
    constructor(scope: Construct, id: string, public props?: s3.BucketProps) {
        super(scope, id, {
            ...(props || {}),
            versioned: true,
            encryption: s3.BucketEncryption.S3_MANAGED,
            autoDeleteObjects: true,
        });

        this.addToResourcePolicy(new iam.PolicyStatement({
            actions: ['s3:*'],
            effect: iam.Effect.DENY,
            principals: [new iam.AccountRootPrincipal()],
            resources: [this.bucketArn],
            conditions: {
                StringNotEquals: {
                    'aws:PrincipalId': [cdk.Aws.ACCOUNT_ID],
                },
            },
        }));
    }

    uploadFolder(folderPath: string, preffix: string) {
        new s3Deploy.BucketDeployment(this, preffix.replace(/\W/, ''), {
            destinationBucket: this,
            sources: [s3Deploy.Source.asset(folderPath)],
            destinationKeyPrefix: preffix
        })
    }
}

