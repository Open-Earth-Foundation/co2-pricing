import csvtojson from 'csvtojson';

import { INFLATION_CPI_CSV_URL } from 'constants/inflation';
import { _fetchJson } from 'utils/fetch';

import { listToObjectFromKey, validateInput } from './_utils';
import type { ConvertionInput } from './types';


let CSV_DATA: string

const getCpi = async (year: number) => {
    const csvTableData = await csvtojson().fromString(CSV_DATA)
    const cpiData = listToObjectFromKey(csvTableData, 'YEAR')
    const yearCpi = cpiData[year]
    if (!yearCpi) {
        throw new Error(`CPI data not found for year ${year}`)
    }
    const januaryPercent = Number(yearCpi['1']) / 100
    return januaryPercent
}

export async function calculateInflation({ fromYear, toYear, amount }: ConvertionInput) {
    CSV_DATA = await _fetchJson(INFLATION_CPI_CSV_URL, { cache: 'force-cache' });
    validateInput({ fromYear, toYear, amount })
    const [fromCpi, toCpi] = await Promise.all([getCpi(fromYear), getCpi(toYear)])

    const inflationFactor = (toCpi - fromCpi) / fromCpi
    const inflationValue = inflationFactor * amount
    const currentValue = inflationValue + amount

    return +currentValue.toFixed(2)
}



