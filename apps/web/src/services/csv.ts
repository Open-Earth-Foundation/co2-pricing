import { _fetchJson } from "utils/fetch";

import type { QueryDataOutput } from "types/data/query";

export default {
  query<T = Record<string, unknown>>(_filters?: string[]) {
    const filters = _filters || [];
    const whereParams = filters.join(",");
    const url = `https://co2pricingdata.openearth.dev/query/csv?where=${whereParams}`;
    return _fetchJson<QueryDataOutput<T>>(url);
  },
} as const;
