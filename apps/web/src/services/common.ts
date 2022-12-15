const controller = new AbortController()

export const _fetchJson = async <T = never>(
    url: string,
    options: RequestInit = {},
): Promise<T extends never ? string : T> => {
    const baseOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(url, {
        ...baseOptions,
        ...options,
        signal: controller.signal
    });
    if (!response.ok) {
        throw new Error(`The HTTP status of the reponse: ${response.status} (${response.statusText})`)
    }
    if (response.headers.get('content-type')?.includes('json')) {
        return await response.json()
    } else {
        return await response.text() as T extends never ? string : T
    }
}
