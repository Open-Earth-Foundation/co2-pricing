import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const calculations = await prisma.calculation.findMany({
    take: 2
  });
  res.status(200).json(calculations);
};

export default handler;
