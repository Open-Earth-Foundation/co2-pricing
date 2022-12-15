import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { QueryApiConstruct } from '../constructs/query-api';




export class DataAPIStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new QueryApiConstruct(this, 'query-api')
  }
}