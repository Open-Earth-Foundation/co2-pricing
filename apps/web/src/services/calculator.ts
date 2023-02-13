
import { _fetchJson } from 'utils/fetch';

import type { ChartDataPoint } from "types/calculator/plot";

const DECIMALS = 4

export default {
    async getPlotData(_discount: number) {
        const discount = _discount.toFixed(DECIMALS)
        const queryString = new URLSearchParams({ discount });
        return await _fetchJson<ChartDataPoint[]>(`/api/calculator/plot?${queryString}`)
    },
} as const
