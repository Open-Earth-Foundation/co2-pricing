export const _fetchJson = async (path: string, options: RequestInit = {}, baseUrl = '/api') => {
    const baseOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const url = baseUrl + path
    const response = await fetch(url, { ...baseOptions, ...options });
    if (!response.ok) {
        throw new Error(`The HTTP status of the reponse: ${response.status} (${response.statusText})`)
    }
    const data = await response.json()
    return data;
}

