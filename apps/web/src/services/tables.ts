import { _fetchJson } from "utils/fetch";

import type { QueryDataOutput } from "types/data/query";


const validateParams = () => {
    return true
}

export default {
    query<T = Record<string, unknown>>(table: string, params?: Record<string, string>) {
        validateParams()
        const searchParams = new URLSearchParams(params)
        const url = `${process.env.NEXT_PUBLIC_DATA_API_URL}/query?table=${table}&${searchParams.toString()}`
        return _fetchJson<QueryDataOutput<T>>(url)
    }
} as const
