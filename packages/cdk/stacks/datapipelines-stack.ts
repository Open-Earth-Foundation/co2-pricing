import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';

import { PipelineConstruct } from '../constructs/pipeline';
import { SafeBucket } from '../constructs/safe-bucket';

import { listFiles, parseYaml } from '../utils/io';


export class DatapipelinesStack extends cdk.Stack {
  public rawBucket: SafeBucket;
  public targetBucket: SafeBucket;
  constructor(scope: Construct, id: string, configDir: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.rawBucket = new SafeBucket(this, 'raw')
    this.targetBucket = new SafeBucket(this, 'optimized')

    const errorTopic = new sns.Topic(
      this, "DataErrorTopic", {
      topicName: 'data-errors',
    })

    const commonProps = {
      rawBucket: this.rawBucket,
      targetBucket: this.targetBucket,
      errorTopic,
    }

    for (const pipePath of listFiles(configDir)) {
      const config = parseYaml(pipePath);
      new PipelineConstruct(this, `pipeline-${config.name}`, { ...commonProps, config })
    }
  }
}