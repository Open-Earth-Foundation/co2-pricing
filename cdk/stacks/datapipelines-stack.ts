import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { SafeBucket } from '../constructs/safe-bucket';

import { MimiGIVEPipeline } from '../constructs/pipelines/give-pipeline';
import { NOAAPipeline } from '../constructs/pipelines/noaa-pipeline';
import { MimiFUNDPipeline } from '../constructs/pipelines/fund-pipeline';
import { BasePipeline } from '../constructs/pipelines/base-pipeline';
import { DamagesCountryPipeline } from '../constructs/pipelines/damages-country-pipeline';

const STATIC = '../__FILES__/static'

export class DatapipelinesStack extends cdk.Stack {
  public rawBucket: SafeBucket
  public pipelineMap: Record<string, BasePipeline>

  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    this.rawBucket = new SafeBucket(this, 'RawData', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })
    this.rawBucket.uploadFolder(STATIC, 'static')

    const rawOptions = { rawBucket: this.rawBucket }

    this.pipelineMap = {
      'noaa': new NOAAPipeline(this, 'NOAA', rawOptions),
      'mimifund': new MimiFUNDPipeline(this, 'MimiFUND', rawOptions),
      'mimigive': new MimiGIVEPipeline(this, 'MimiGIVE', rawOptions),
      'damagescountry': new DamagesCountryPipeline(this, 'DamagesCountry', rawOptions)
    }
  }
}