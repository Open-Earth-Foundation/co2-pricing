export type MimiFundRecord = {
    scc: number;
    year: number;
    snapshot_time: string;
    prtp: number;
}


export type MimiGiveRecord = {
    scc: number;
    year: number;
    snapshot_time: string;
    prtp: number;
}

export type NOAARecord = {
    trend: number;
    full_date: string;
    smoothed: number;
    month: number;
    year?: number;
    day?: number;
}

export type DamagesCountryRecord = {
    snapshot_time: string;
    '83.3%': number;
    run: number;
    '50%': number;
    N: number;
    SSP: number;
    dr: number;
    eta: number;
    dmgfuncpar: number;
    climate: string;
    '16.7%': number;
    prtp: number;
    ISO3: string;
    RCP: string;
}