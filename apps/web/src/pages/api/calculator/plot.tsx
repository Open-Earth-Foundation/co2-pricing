import { asyncHandler } from "utils/syncApi";
import csvService from "@/services/csv";

import type { ChartDataPoint } from "types/calculator/plot";
import type { MimiFundRecord } from "types/models";
import calculatorService from "services/calculator";

const TODAY = new Date();
const CURRENT_YEAR = TODAY.getFullYear();
const CURRENT_CPI_YEAR =
  TODAY >= new Date(CURRENT_YEAR, 1, 14) ? CURRENT_YEAR : CURRENT_YEAR - 1;

const calculate = async (
  dataPoint: MimiFundRecord
): Promise<ChartDataPoint> => {
  const name = dataPoint.year;
  const scc = dataPoint.scc;
  return { name, scc };
};

const handler = asyncHandler(async (req, res) => {
  const { discount } = req.query;
  const input = discount ?? "0.0000";
  res.status(200).json(calculatorService.getPlotData(+input));
});

export default handler;
