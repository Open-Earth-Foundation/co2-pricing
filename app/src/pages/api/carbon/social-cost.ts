import { asyncHandler } from "src/utils/syncApi";

import { getSCCO2 } from "src/services/mimifund/mimifund";


const handler = asyncHandler(async (req, res) => {
  const { discount, year } = req.query;
  const cost = await getSCCO2(Number(discount), Number(year));
  res.status(200).json({ cost })
});

export default handler;
