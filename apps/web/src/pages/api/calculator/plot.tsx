import { asyncHandler } from "utils/syncApi";
import tablesService from "services/tables";

import type { ChartDataPoint } from "types/calculator/plot";
import type { MimiFundRecord } from "types/models";
import { calculateInflation } from "@/services/inflation";

const TODAY = new Date()
const CURRENT_YEAR = TODAY.getFullYear()
const CURRENT_CPI_YEAR = TODAY >= new Date(CURRENT_YEAR, 1, 14) ? CURRENT_YEAR : CURRENT_YEAR - 1

const calculate = async (dataPoint: MimiFundRecord): Promise<ChartDataPoint> => {
    const name = dataPoint.year
    const scc = await calculateInflation({
        amount: dataPoint.scc,
        fromYear: 1995,
        toYear: Number(Math.min(dataPoint.year, CURRENT_CPI_YEAR))
    })
    return { name, scc }
}

const handler = asyncHandler(async (req, res) => {
    const { discount } = req.query;
    const { records } = await tablesService.query<MimiFundRecord>('mimifund', {
        filters: `prtp=${discount}`,
    })
    records.sort((a, b) => Number(a.year) - Number(b.year))
    const dataPoints = await Promise.all(records.map(calculate))
    res.status(200).json(dataPoints);
})

export default handler;
