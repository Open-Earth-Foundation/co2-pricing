export type PipelineConfig = {
    name: string,
    feature: 'fetch_csv' | 'local_file'
    source: string,
}