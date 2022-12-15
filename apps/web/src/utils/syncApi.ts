import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const asyncHandler = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            await (handler(req, res) as Promise<unknown>);
        } catch (unknownError: unknown) {
            const error = unknownError as Error;
            res.status(500).json({ error: error.message ?? error.toString() });
        }
    };
}
