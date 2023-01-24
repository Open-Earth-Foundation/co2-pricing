#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
dotenv.config();

import { DatapipelinesStack } from './stacks/datapipelines-stack';
import { DataApiStack } from './stacks/data-api-stack';
import { WebAppStack } from './stacks/web-app-stack';


const app = new cdk.App();

const defaultEnv: cdk.Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const environment = app.node.tryGetContext('environment') ?? 'dev'

const { pipelineMap } = new DatapipelinesStack(
  app, `Co2PricingDatapipelines-${environment}`, {
  env: defaultEnv
});

const apiStack = new DataApiStack(
  app, `Co2PricingDataAPI-${environment}`, {
  env: defaultEnv,
  pipelineMap,
})

new WebAppStack(
  app, `Co2PricingWebApp-${environment}`, {
  url: apiStack.api.url + 'v1',
  certificateArn: process.env.WEBAPP_CERTIFICATE_ARN,
  env: defaultEnv,
})

app.synth();