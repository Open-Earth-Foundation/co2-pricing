import { _fetchJson } from "./_common.js";

const validateParams = () => {
    return true
}

const getModels = async () => {
    validateParams()
    return _fetchJson('/iam/model')
}

export default {
    getModels
} as const
