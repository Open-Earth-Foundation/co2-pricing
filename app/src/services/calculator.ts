import { _fetchJson } from "./common";

const validateParams = () => {
    return true
}

const getStages = async () => {
    validateParams()
    return _fetchJson('/calculator/stages')
}

const getStageById = async (id: string) => {
    validateParams()
    return _fetchJson(`/calculator/stage/${id}`)
}


export default {
    getStages,
    getStageById
} as const
