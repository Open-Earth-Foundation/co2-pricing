import { env } from "../../env/server.mjs"
import { _fetchJson } from "../common";
import { calculateInflation } from "src/services/inflation";
import { validateParams } from "./_utils";


export const getSCCO2 = async (discount: number, year: number) => {
    validateParams(discount, year)
    const baseUrl = `${env.MIMIFUND_API_URL}/`
    const searchParams = new URLSearchParams({
        year: year.toString(),
        prpt: discount.toFixed(3),
    })
    const url = `${baseUrl}?${searchParams}`
    const amount = await _fetchJson<number>(url)
    const updatedCost = await calculateInflation({ amount, fromYear: 1995, toYear: year })
    return updatedCost
}
