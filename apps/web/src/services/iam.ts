import { _fetchJson } from "./common";

import type { IAMModel } from "../types/iam/model";


const validateParams = () => {
    return true
}

const getModels = async () => {
    validateParams()
    return await _fetchJson<IAMModel[]>(`/api/iam/model`)
}

const getModelById = async (id: string) => {
    validateParams()
    return await _fetchJson<IAMModel>(`/api/iam/model/${id}`)
}

export default {
    getModels,
    getModelById
} as const
