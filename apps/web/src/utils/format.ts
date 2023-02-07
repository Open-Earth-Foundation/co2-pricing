export const formatDiscount = (value: number) => {
    return `${Number((value * 100).toFixed(3))}%`
}

export const formatPrice = (value: number): [string, string] => {
    const price = Number(value.toFixed(2))
    const integer = Math.floor(price)
    const decimal = Math.round((price - integer) * 100)
    return [integer.toFixed(0), decimal.toFixed(0)]
}
