export type ChartDataPoint<T = Record<string, unknown>> = T extends Record<
  string,
  unknown
>
  ? T & { [key: string]: string | number }
  : T;
export type ChartDataObject = { name: string; scc: number };
