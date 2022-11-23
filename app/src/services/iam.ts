import { _fetchJson } from "./common";

import type { IAMModel } from "src/types/iam/model";
import { env } from "src/env/client.mjs";

const API_URL = env.NEXT_PUBLIC_API_URL

const validateParams = () => {
    return true
}

const getModels = async () => {
    validateParams()
    return await _fetchJson(`${API_URL}/iam/model`) as IAMModel[]
}

const getModelById = async (id: string) => {
    validateParams()
    return await _fetchJson(`${API_URL}/iam/model/${id}`) as IAMModel
}

export default {
    getModels,
    getModelById
} as const
