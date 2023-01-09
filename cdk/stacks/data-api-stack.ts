import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as apigtw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

import { BasePipeline } from 'constructs/pipelines/base-pipeline';
import { QueryFeature } from 'constructs/features/query';

interface DataApiProps extends cdk.StackProps {
  pipelineMap: Record<string, BasePipeline>
}

export class DataApiStack extends cdk.Stack {
  public api: apigtw.RestApi
  constructor(scope: Construct, id: string, { pipelineMap, ...props }: DataApiProps) {
    super(scope, id, props);
    this.api = new apigtw.RestApi(this, "Co2DataAPI", {
      defaultCorsPreflightOptions: {
        allowOrigins: apigtw.Cors.ALL_ORIGINS,
      }
    })

    const v1 = this.api.root.addResource("v1")

    const query = new QueryFeature(this, "query", v1)
    for (const [name, pipe] of Object.entries(pipelineMap)) {
      const table = dynamodb.Table.fromTableName(this, `${name}-table`, pipe.table.tableName)
      query.addQueryPermissions(table)
    }

    new cdk.CfnOutput(this, 'DataQueryApiUrl', {
      value: this.api.url,
    })
  }

}