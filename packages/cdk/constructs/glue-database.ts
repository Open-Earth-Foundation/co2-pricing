import * as cdk from 'aws-cdk-lib';
import * as glue from '@aws-cdk/aws-glue-alpha';
import { Construct } from 'constructs';

import { DatabaseConfig } from '../utils/types';


interface GlueDatabaseStackProps {
  databases: DatabaseConfig[];
}
export class GlueCatalogConstruct extends cdk.Stack {

  constructor(scope: Construct, id: string, config: GlueDatabaseStackProps, props?: cdk.StackProps) {
    super(scope, id, props);

    for (const { databaseName, locationUri, tables } of config.databases) {
      const database = new glue.Database(this, 'GlueDatabase', { databaseName, locationUri });

      for (const { tableName, dataFormat, columns } of tables) {
        const columnsList = Object.entries(columns)
          .map(([name, type]) => ({ name, type }));

        new glue.Table(this, 'GlueTable', {
          database,
          tableName,
          dataFormat,
          columns: columnsList,
          partitionKeys: [],
        });
      }
    }
  }
}
