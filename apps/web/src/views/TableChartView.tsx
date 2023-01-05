import { Stack, Typography } from "@mui/material";

import SampleTable from "src/components/data/SampleTable";
import Chart from "src/components/ui/chart";


interface TableChartViewProps {
    table: string
    rows: any[]
    xLabelProp: string
    axisProp: string
    dataProps: string[]
}
const TableChartView = ({ table, rows, axisProp, xLabelProp, dataProps }: TableChartViewProps) => {
    return (
        <>
            <Typography variant="h3">
                {table.toUpperCase()}
            </Typography>

            <Chart
                axisProp={axisProp}
                dataPoints={rows}
                xLabelProp={xLabelProp}
                dataProps={dataProps}
            />
            <Stack>
                <SampleTable rows={rows.slice(0, 5)} />
            </Stack>
        </>
    );
}

export default TableChartView
