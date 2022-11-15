import type { NextApiRequest, NextApiResponse } from "next";

import { CALCULATOR_PLOT } from "src/constants/calculator/plot";
import type { ChartDataPoint } from "src/types/calculator/plot";

const CURRENT_YEAR = 2022


const calculate = (dataPoint: ChartDataPoint, discount: number): ChartDataPoint => {
    const newDataPoint: ChartDataPoint = {
        name: dataPoint.name,
    }
    for (const [key, value] of Object.entries(dataPoint)) {
        if (key === 'name') continue
        else if (key === 'yours') newDataPoint[key] = value
        else {
            if (Number(dataPoint.name) <= CURRENT_YEAR) newDataPoint[key] = value
            else newDataPoint[key] = (value as number)
                * (1 + discount)
        }
    }

    console.log(newDataPoint)
    return newDataPoint
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { discount, year } = req.query;
    const filteredDataPoints = CALCULATOR_PLOT.filter(point => Number(point.name) <= Number(year))
    const dataPoints = filteredDataPoints.map((point) => calculate(point, Number(discount)))
    res.status(200).json(dataPoints);
}

export default handler;