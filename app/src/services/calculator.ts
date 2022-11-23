import { _fetchJson } from "./common";

import type { CalculatorStage } from './../types/calculator/stage';
import type { ChartDataPoint } from "src/types/calculator/plot";
import { env } from "src/env/client.mjs";


const validateParams = () => {
    return true
}

const API_URL = env.NEXT_PUBLIC_API_URL

export default {
    getStages() {
        validateParams()
        return _fetchJson<CalculatorStage[]>(`${API_URL}/calculator/stages`)
    },
    getStageById(id: string) {
        validateParams()
        return _fetchJson<CalculatorStage>(`${API_URL}/calculator/stage/${id}`)
    },
    async getPlotData(_discount: number, _year: number) {
        const discount = _discount.toFixed(2)
        const year = _year.toFixed(0)
        const queryString = new URLSearchParams({ discount, year });
        validateParams()
        return await _fetchJson(`${API_URL}/calculator/plot?${queryString}`) as ChartDataPoint[]
    }
} as const
