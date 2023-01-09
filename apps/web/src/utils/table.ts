export const getHeadersFromCollection = (collection: any[]): string[] => {
    return collection.reduce((acc, row) => {
        Object.keys(row).forEach(key => {
            if (!acc.includes(key)) acc.push(key)
        })
        return acc
    }, [])
}
