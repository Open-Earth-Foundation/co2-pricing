
import { _fetchJson } from "utils/fetch";
import type { IAMModel } from "types/iam/model";

const getModels = async () => {
    return await _fetchJson<IAMModel[]>(`/api/iam/model`)
}

const getModelById = async (id: string) => {
    return await _fetchJson<IAMModel>(`/api/iam/model/${id}`)
}

export default {
    getModels,
    getModelById
} as const
