import { IAM_MODELS } from "src/constants/iam-models";
import { asyncHandler } from "src/utils/syncApi";


const handler = asyncHandler(async (req, res) => {
    const { id } = req.query;
    const iamModel = IAM_MODELS.find((model) => model.id === id);
    if (!iamModel) {
        res.status(404).json({ message: `IAM Model with id ${id} not found` });
        return;
    }
    res.status(200).json(iamModel)
});

export default handler;
