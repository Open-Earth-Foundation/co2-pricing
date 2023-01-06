import { asyncHandler } from "../../utils/syncApi";
import tablesService from '../../services/tables'

const handler = asyncHandler(async (req, res) => {
    const { table } = req.query;

    const response = await tablesService.query(table as string);
    const { records, explain } = response;

    res.status(200).json({ records, explain })
});

export default handler;
