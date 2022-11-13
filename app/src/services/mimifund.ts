import type { RequestInit } from "next/dist/server/web/spec-extension/request.js";
import { env } from "../env/server.mjs"

const MIMIFUND_API_URL = env.MIMIFUND_API_URL

const MIN_YEAR = 1950
const MAX_YEAR = 2300


const _fetchJson = async (path: string, options: RequestInit = {}) => {
    const baseOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const url = MIMIFUND_API_URL + path
    const response = await fetch(url, { ...baseOptions, ...options });
    if (!response.ok) {
        throw new Error(`The HTTP status of the reponse: ${response.status} (${response.statusText})`)
    }
    const data = await response.json()
    return data
}

const isValidYear = (year: number) => {
    if (isNaN(year)) throw Error(`[${year}] is not a number`)
    const noLess = MIN_YEAR <= year;
    const noMore = MAX_YEAR >= year;
    const isValid = noLess && noMore
    if (!(isValid)) throw Error(`Year has to be >= ${MIN_YEAR} and <= ${MAX_YEAR}`)
    return isValid
}

const isValidDiscount = (discount: number) => {
    if (isNaN(discount)) throw Error(`[${discount}] is not a number`)
    const noLess = 0 <= discount;
    const noMore = 100 >= discount;
    const isValid = noLess && noMore
    if (!(isValid)) throw Error(`Discount has to be >= ${MIN_YEAR} and <= ${MAX_YEAR}`)
    return isValid
}

const validateParams = (discount: number, year: number) => {
    isValidYear(year)
    isValidDiscount(discount)
}

const getSCCO2 = async (discount: number, year: number) => {
    validateParams(discount, year)
    const response = await _fetchJson('/')
    const data = await response.json()
    return data
}

export default {
    getSCCO2
} as const
