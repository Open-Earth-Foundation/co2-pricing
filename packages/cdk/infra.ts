#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { DatapipelinesStack } from './stacks/datapipelines-stack';
import { DataAPIStack } from './stacks/data-api';


const app = new cdk.App();

const defaultEnv: cdk.Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const environment = app.node.tryGetContext('environment') ?? 'dev'

new DatapipelinesStack(
  app, `Co2PricingDatapipelines-${environment}`,
  '../pipelines/__PIPELINES__', { env: defaultEnv }
);

new DataAPIStack(
  app, `Co2PricingDataAPI-${environment}`,
)

app.synth();