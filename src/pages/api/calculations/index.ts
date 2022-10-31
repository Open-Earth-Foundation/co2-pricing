import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.calculation.findMany();
  res.status(200).json(examples);
};

export default handler;
