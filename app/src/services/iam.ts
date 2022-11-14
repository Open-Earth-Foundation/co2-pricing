import { _fetchJson } from "./common";

const validateParams = () => {
    return true
}

const getModels = async () => {
    validateParams()
    return _fetchJson('/iam/model')
}

const getModelById = async (id: string) => {
    validateParams()
    return _fetchJson(`/iam/model/${id}`)
}

export default {
    getModels,
    getModelById
} as const
