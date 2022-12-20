import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

import { Construct } from 'constructs';


export class ServerlessTable extends dynamodb.Table {
    constructor(scope: Construct, id: string, public props?: dynamodb.TableProps) {
        super(scope, id, {
            ...(props || {}),
            partitionKey: {
                name: 'snapshot_time',
                type: dynamodb.AttributeType.STRING,
            },
            sortKey: {
                name: 'full_date',
                type: dynamodb.AttributeType.STRING,
            },
            tableName: id.toLowerCase().replace(/table$/, ''),
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        });
    }
}

