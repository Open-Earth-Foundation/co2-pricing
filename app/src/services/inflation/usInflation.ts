import type { ConvertionInput } from './types';
import csvtojson from 'csvtojson';

import { INFLATION_CPI_CSV_URL } from '../../constants/inflation';
import { _fetchJson } from '../common';
import { listToObjectFromKey, validateInput } from './_utils';


let CSV_DATA: string

const getCpi = async (year: number) => {
    const csvTableData = await csvtojson().fromString(CSV_DATA)
    const cpiData = listToObjectFromKey(csvTableData, 'YEAR')
    const januaryPercent = Number(cpiData[year]['1']) / 100
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



