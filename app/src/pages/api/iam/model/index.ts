import { asyncHandler } from "src/utils/syncApi";
import { IAM_MODELS } from "../../../../constants/iam-models";


const handler = asyncHandler((_, res) => {
    res.status(200).json(IAM_MODELS)
});

export default handler;
