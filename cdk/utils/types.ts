import * as glue from '@aws-cdk/aws-glue-alpha';


export type PipelineConfig = {
    name: string,
    feature: 'fetch_csv' | 'local_file'
    source: string,
}

export interface TableConfig {
    tableName: string;
    columns: Record<string, glue.Type>
    dataFormat: keyof glue.DataFormat;
}

export interface DatabaseConfig {
    databaseName: string;
    locationUri: string;
    tables: TableConfig[];
}