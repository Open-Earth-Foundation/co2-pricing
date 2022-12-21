import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

import { BasePipeline } from '../constructs/pipelines/base-pipeline';
import * as api from 'aws-cdk-lib/aws-apigateway';
import { QueryFeature } from '../constructs/features/query';


export class DataAPIStack extends cdk.Stack {
  public api: api.RestApi;

  constructor(scope: Construct, id: string, props: cdk.StackProps & { pipelineMap: Record<string, BasePipeline> }) {
    super(scope, id);
    this.api = new api.RestApi(this, "Co2DataAPI")
    const v1 = this.api.root.addResource("v1")

    const query = new QueryFeature(this, "query", v1)
    for (const [name, pipe] of Object.entries(props.pipelineMap)) {
      const table = dynamodb.Table.fromTableName(this, `${name}-table`, pipe.table.tableName)
      query.addQueryPermissions(table)
    }
  }
}