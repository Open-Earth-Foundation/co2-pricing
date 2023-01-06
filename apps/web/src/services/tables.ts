import { _fetchJson } from "./common";

import type { QueryDataOutput } from "../types/data/query";


const validateParams = () => {
    return true
}

export default {
    query<T = Record<string, unknown>>(table: string, explain = false) {
        validateParams()
        const url = `${process.env.NEXT_PUBLIC_DATA_API_URL}/query?table=${table}&explain=${explain}`
        return _fetchJson<QueryDataOutput<T>>(url)
    }
} as const
