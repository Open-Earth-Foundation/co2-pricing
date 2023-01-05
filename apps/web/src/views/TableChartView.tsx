import { Stack } from "@mui/material";

import SampleChart from "src/components/data/SampleChart";
import SampleTable from "src/components/data/SampleTable";


interface TableChartViewProps {
    rows: any[]
    labelProp?: string
}
const TableChartView = ({ rows, labelProp }: TableChartViewProps) => {
    return (
        <Stack>
            <SampleChart rows={rows} labelProp={labelProp} />
            <SampleTable rows={rows} />
        </Stack>
    );
}

export default TableChartView
