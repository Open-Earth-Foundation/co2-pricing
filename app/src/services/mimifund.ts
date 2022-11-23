import { env } from "../env/server.mjs"
import { _fetchJson } from "./common";


const MIN_YEAR = 1950
const MAX_YEAR = 2300

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
    const url = `${env.MIMIFUND_API_URL}/co2`
    console.log({ url })
    return _fetchJson(url)
}

export default {
    getSCCO2
} as const
