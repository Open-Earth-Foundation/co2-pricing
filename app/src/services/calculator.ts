import { _fetchJson } from "./common";

import type { CalculatorStage } from './../types/calculator/stage';
import type { ChartDataPoint } from "src/types/calculator/plot";


const validateParams = () => {
    return true
}

export default {
    getStages() {
        validateParams()
        return _fetchJson<CalculatorStage[]>('/calculator/stages')
    },
    getStageById(id: string) {
        validateParams()
        return _fetchJson<CalculatorStage>(`/calculator/stage/${id}`)
    },
    getPlotData(_discount: number, _year: number) {
        const discount = _discount.toFixed(2)
        const year = _year.toFixed(0)
        const queryString = new URLSearchParams({ discount, year });
        validateParams()
        return _fetchJson<ChartDataPoint[]>(`/calculator/plot?${queryString}`)
    }
} as const
