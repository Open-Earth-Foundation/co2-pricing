import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

import { Construct } from 'constructs';


export class ServerlessTable extends dynamodb.Table {
    constructor(scope: Construct, id: string, public props: dynamodb.TableProps) {
        super(scope, id, {
            ...props,
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });
    }
}

