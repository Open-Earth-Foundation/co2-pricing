export const formatDiscount = (value: number) => {
    return `${Number((value * 100).toFixed(3))}%`
}