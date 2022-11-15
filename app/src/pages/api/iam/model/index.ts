import type { NextApiRequest, NextApiResponse } from "next";
import { IAM_MODELS } from "../../../../constants/iam-models";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(IAM_MODELS)
};

export default handler;