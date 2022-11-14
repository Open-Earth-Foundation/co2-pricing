import type { NextApiRequest, NextApiResponse } from "next";
import { CALCULATOR_STAGES } from "src/constants/calculator/stage";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const calculatorStage = CALCULATOR_STAGES.find((stage) => stage.id === id);
    if (!calculatorStage) {
        res.status(404).json({ message: `Calculator stage with id ${id} not found` });
        return;
    }
    res.status(200).json(calculatorStage)
};

export default handler;
