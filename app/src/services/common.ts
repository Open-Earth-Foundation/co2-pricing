import { env } from "src/env/server.mjs";

export const _fetchJson = async <T = Record<string, unknown>>(
    path: string,
    options: RequestInit = {},
    baseUrl?: string
): Promise<T> => {
    const baseOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const url = (baseUrl ?? env.NEXT_PUBLIC_API_URL) + `/${path}`
    console.log({ url })
    const response = await fetch(url, { ...baseOptions, ...options });
    if (!response.ok) {
        throw new Error(`The HTTP status of the reponse: ${response.status} (${response.statusText})`)
    }
    const data = await response.json()
    return data as T;
}

