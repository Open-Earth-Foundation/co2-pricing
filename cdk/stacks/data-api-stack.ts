import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as apigtw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

import { BasePipeline } from '../constructs/pipelines/base-pipeline';
import { QueryFeature } from '../constructs/features/query';

interface DataApiProps extends cdk.StackProps {
  pipelineMap: Record<string, BasePipeline>
}

export class DataApiStack extends cdk.Stack {
  readonly pipelineMap: Record<string, BasePipeline>
  readonly api: apigtw.RestApi

  constructor(scope: Construct, id: string, { pipelineMap, ...props }: DataApiProps) {
    super(scope, id, props);
    this.pipelineMap = pipelineMap
    this.api = new apigtw.RestApi(this, "Co2DataAPI", {
      defaultCorsPreflightOptions: {
        allowOrigins: apigtw.Cors.ALL_ORIGINS,
      }
    })

    this.createV1(this.api.root)

    new cdk.CfnOutput(this, 'DataQueryApiUrl', {
      value: this.api.url,
    })
  }

  createV1(root: apigtw.IResource) {
    const v1 = root.addResource("v1")

    const query = new QueryFeature(this, "query", v1)
    for (const name of Object.keys(this.pipelineMap)) {
      const table = dynamodb.Table.fromTableName(this, `${name}-table`, name)
      query.addQueryPermissions(table)
    }

  }

}