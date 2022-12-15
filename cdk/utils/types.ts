import * as glue from '@aws-cdk/aws-glue-alpha';


export type PipelineConfig = {
    name: string,
    sourceUrl: string,
    databases: DatabaseConfig[]
}

export interface TableConfig {
    tableName: string;
    columns: Record<string, glue.Type>
    dataFormat: glue.DataFormat;
}

export interface DatabaseConfig {
    databaseName: string;
    locationUri: string;
    tables: TableConfig[];
}