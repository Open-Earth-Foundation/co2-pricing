import { _fetchJson } from "utils/fetch";

import type { QueryDataOutput } from "types/data/query";


export default {
    query<T = Record<string, unknown>>(_filters?: string[]) {
        const filters = _filters || []
        const whereParams = filters.join(",")
        const url = `${process.env.NEXT_PUBLIC_DATA_API_URL}/query/csv?where=${whereParams}`
        console.log({ url })
        return _fetchJson<QueryDataOutput<T>>(url)
    }
} as const
