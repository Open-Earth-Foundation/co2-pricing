import { MimiGIVEPipeline } from './../constructs/pipelines/give-pipeline';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { NOAAPipeline } from '../constructs/pipelines/noaa-pipeline';
import { MimiFUNDPipeline } from '../constructs/pipelines/fund-pipeline';
import { SafeBucket } from '../constructs/safe-bucket';


export class DatapipelinesStack extends cdk.Stack {
  public rawBucket: SafeBucket
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    this.rawBucket = new SafeBucket(this, 'RawData')

    new NOAAPipeline(this, 'NOAA',)
    new MimiFUNDPipeline(this, 'MimiFUND', {
      rawBucket: this.rawBucket
    })
    new MimiGIVEPipeline(this, 'MimiGIVE', {
      rawBucket: this.rawBucket
    })
  }
}
