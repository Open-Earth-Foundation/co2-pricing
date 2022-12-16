import * as cdk from 'aws-cdk-lib';
import * as glue from '@aws-cdk/aws-glue-alpha';
import { Construct } from 'constructs';

import { DatabaseConfig } from '../utils/types';


interface DataDatabaseStackProps {
  databases: DatabaseConfig[];
}
export class DataCatalogConstruct extends cdk.Stack {

  constructor(scope: Construct, id: string, config: DataDatabaseStackProps, props?: cdk.StackProps) {
    super(scope, id, props);

    for (const { databaseName, locationUri, tables } of config.databases) {
      const database = new glue.Database(
        this, 'GlueDatabase' + databaseName, {
        databaseName,
        locationUri
      });

      for (const { tableName, dataFormat, columns } of tables) {
        const columnsList = Object.entries(columns)
          .map(([name, type]) => ({ name, type }));

        new glue.Table(this, databaseName + tableName, {
          database,
          tableName,
          dataFormat: glue.DataFormat[dataFormat as keyof typeof glue.DataFormat],
          columns: columnsList,
          partitionKeys: [],
        });
      }
    }
  }
}
