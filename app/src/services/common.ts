export const _fetchJson = async <T = Record<string, unknown>>(
    url: string,
    options: RequestInit = {},
): Promise<T> => {
    const baseOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    console.log({ url })
    const response = await fetch(url, { ...baseOptions, ...options });
    if (!response.ok) {
        throw new Error(`The HTTP status of the reponse: ${response.status} (${response.statusText})`)
    }
    const data = await response.json()
    return data as T;
}

