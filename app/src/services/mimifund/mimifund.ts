import { env } from "../../env/server.mjs"
import { _fetchJson } from "../common";
import { calculateInflation } from "src/services/inflation";
import { MIN_YEAR, validateParams } from "./_utils";


export const getSCCO2 = async (discount: number, year: number) => {
    validateParams(discount, year)
    const url = `${env.MIMIFUND_API_URL}/`
    const amount = 22 ?? await _fetchJson(url)
    const updatedCost = await calculateInflation({ amount, fromYear: MIN_YEAR, toYear: year })
    return updatedCost
}
