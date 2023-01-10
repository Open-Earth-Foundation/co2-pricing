
import { _fetchJson } from 'utils/fetch';

import type { CalculatorStage } from 'types/calculator/stage';
import type { ChartDataPoint } from "types/calculator/plot";


const validateParams = () => {
    return true
}

export default {
    getStages() {
        validateParams()
        return _fetchJson<CalculatorStage[]>(`/api/calculator/stages`)
    },
    getStageById(id: string) {
        validateParams()
        return _fetchJson<CalculatorStage>(`/api/calculator/stage/${id}`)
    },
    async getPlotData(_discount: number, _year: number) {
        const discount = _discount.toFixed(2)
        const year = _year.toFixed(0)
        const queryString = new URLSearchParams({ discount, year });
        validateParams()
        return await _fetchJson<ChartDataPoint[]>(`/api/calculator/plot?${queryString}`)
    },
    async getCarbonSocialCost(_discount: number, _year: number) {
        const discount = _discount.toFixed(2)
        const year = _year.toFixed(0)
        const queryString = new URLSearchParams({ discount, year });
        validateParams()
        const { cost } = await _fetchJson<{ cost: number }>(`/api/carbon/social-cost?${queryString}`)
        return cost
    }
} as const
