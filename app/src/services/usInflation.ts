import type { Readable } from 'stream';
import csvtojson from 'csvtojson';

import { INFLATION_CPI_CSV_URL } from './../constants/inflation';
import { _fetchJson } from './common';
import { DEFAULT_MAX_YEAR, DEFAULT_MIN_YEAR } from './../constants/axioms';

let CSV_DATA: string
interface ConvertionInput {
    year: number
    month?: number
    amount: number
}
const validateInput = ({ year, month, amount }: Partial<ConvertionInput>) => {
    // function docstring:
    // Validate the input for the convert function.
    //
    // Args:
    //     amount (number): The amount to convert.
    //     year (number): The year to convert to.
    //     month (number): The month to convert to. (Optional)
    //
    // Returns:
    //     boolean: True if the input is valid, False otherwise.
    //
    if (!year) {
        throw new Error('Invalid input: [year] and [amount] are required')
    }
    if (isNaN(year)) {
        throw new Error('[year] and [amount] must be numbers')
    }
    if (year < DEFAULT_MIN_YEAR || year > DEFAULT_MAX_YEAR) {
        throw new Error(`Year must be between ${DEFAULT_MIN_YEAR} and ${DEFAULT_MAX_YEAR}`)
    }
    if (!!month && (month < 1 || month > 12)) {
        throw new Error('If [month] exists, it must be between 1 and 12');
    }
    // if (amount < 0) {
    //     throw new Error('Amount must be greater than 0')
    // }
    return true
}

const listToObjectFromKey = (list: any[], key: string) => {
    return list.reduce((acc, item) => {
        acc[item[key]] = item
        return acc
    }, {})
}

const getCpi = async (year: number, month?: number) => {
    const csvTableData = await csvtojson().fromString(CSV_DATA)
    const cpiData = listToObjectFromKey(csvTableData, 'YEAR')
    const januaryPercent = Number(cpiData[year]['1']) / 100
    return januaryPercent
}


async function calculateInflation(from: ConvertionInput, to: Omit<ConvertionInput, 'amount'>) {
    CSV_DATA = (await _fetchJson<Readable>(INFLATION_CPI_CSV_URL, { cache: 'force-cache' })) as string;
    // validateInput(from)
    // validateInput(to)
    const [fromCpi, toCpi] = await Promise.all([
        getCpi(from.year, from.month),
        getCpi(to.year, to.month)
    ])

    const inflationFactor = (toCpi - fromCpi) / fromCpi
    const inflationValue = inflationFactor * from.amount
    const currentValue = inflationValue + from.amount

    return +currentValue.toFixed(2)
}


export default {
    calculateInflation
} as const
