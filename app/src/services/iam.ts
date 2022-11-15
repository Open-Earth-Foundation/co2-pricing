import { _fetchJson } from "./common";

import type { IAMModel } from "src/types/iam/model";


const validateParams = () => {
    return true
}

const getModels = async () => {
    validateParams()
    return _fetchJson<IAMModel[]>('/iam/model')
}

const getModelById = async (id: string) => {
    validateParams()
    return _fetchJson<IAMModel>(`/iam/model/${id}`)
}

export default {
    getModels,
    getModelById
} as const
