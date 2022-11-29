import { CALCULATOR_STAGES } from "src/constants/calculator/stage";
import { asyncHandler } from "src/utils/syncApi";


const handler = asyncHandler(async (req, res) => {
    const { id } = req.query;
    const calculatorStage = CALCULATOR_STAGES.find((stage) => stage.id === id);
    if (!calculatorStage) {
        res.status(404).json({ message: `Calculator stage with id ${id} not found` });
        return;
    }
    res.status(200).json(calculatorStage)
});

export default handler;
