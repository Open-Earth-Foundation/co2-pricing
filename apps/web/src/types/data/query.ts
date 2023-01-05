export interface QueryDataOutput<T = Record<string, unknown>> {
    records: T[]
    explain?: string
}