import { asyncHandler } from "utils/syncApi";
import tablesService from "services/tables";

import type { ChartDataPoint } from "types/calculator/plot";
import type { MimiFundRecord } from "types/models";
import { calculateInflation } from "@/services/inflation";


const calculate = async (dataPoint: MimiFundRecord): Promise<ChartDataPoint> => {
    const name = dataPoint.year
    const scc = await calculateInflation({
        amount: dataPoint.scc,
        fromYear: 1995,
        toYear: Number(Math.min(dataPoint.year, 2022))
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
