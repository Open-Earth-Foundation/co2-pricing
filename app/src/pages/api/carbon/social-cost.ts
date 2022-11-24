import type { NextApiRequest, NextApiResponse } from "next";
import mimifund from "../../../services/mimifund";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { discount, year } = req.query;
  const cost = await mimifund.getSCCO2(Number(discount), Number(year));
  res.status(200).json({ cost })
};

export default handler;
