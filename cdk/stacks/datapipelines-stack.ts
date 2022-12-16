import { PipelineConfig, DatabaseConfig } from './../utils/types';
import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';
import { DataCatalogConstruct } from '../constructs/data-catalog';

import { PipelineConstruct } from '../constructs/pipeline';
import { SafeBucket } from '../constructs/safe-bucket';

import { listFiles, parseYaml } from '../utils/io';

interface DatapipelinesStackProps extends cdk.StackProps {
  pipelinesDir: string
  databasesDir: string
  staticDir: string
}

export class DatapipelinesStack extends cdk.Stack {
  public rawBucket: SafeBucket;
  public targetBucket: SafeBucket;
  constructor(scope: Construct, id: string, props: DatapipelinesStackProps) {
    super(scope, id, props);

    this.rawBucket = new SafeBucket(this, 'raw')
    this.targetBucket = new SafeBucket(this, 'optimised')

    const errorTopic = new sns.Topic(
      this, "DataErrorTopic", {
      topicName: 'data-errors',
    })

    const commonProps = {
      rawBucket: this.rawBucket,
      targetBucket: this.targetBucket,
      errorTopic,
    }

    for (const pipePath of listFiles(props.pipelinesDir)) {
      const config = parseYaml<PipelineConfig>(pipePath);
      new PipelineConstruct(this, `pipeline-${config.name}`, { ...commonProps, config })
    }
    const databases = listFiles(props.databasesDir).map(parseYaml<DatabaseConfig>)
    new DataCatalogConstruct(this, 'DataCatalog', { databases })
  }
}