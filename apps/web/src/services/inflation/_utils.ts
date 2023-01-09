import { DEFAULT_MAX_YEAR, DEFAULT_MIN_YEAR } from 'constants/axioms';
import type { ConvertionInput } from './types';

export const validateInput = ({ fromYear, toYear, amount }: ConvertionInput) => {
    if (!(fromYear || toYear || amount)) {
        throw new Error('Invalid input: [fromYear] and [amount] are required')
    }
    if (fromYear < DEFAULT_MIN_YEAR || fromYear > DEFAULT_MAX_YEAR) {
        throw new Error(`Invalid input: [fromYear] must be between ${DEFAULT_MIN_YEAR} and ${DEFAULT_MAX_YEAR}`)
    }
    if (toYear < DEFAULT_MIN_YEAR || toYear > DEFAULT_MAX_YEAR) {
        throw new Error(`Invalid input: [toYear] must be between ${DEFAULT_MIN_YEAR} and ${DEFAULT_MAX_YEAR}`)
    }
    return true
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const listToObjectFromKey = (list: any[], key: string) => {
    return list.reduce((acc, item) => {
        acc[item[key]] = item
        return acc
    }, {})
}