import { Box, Stack, Typography } from "@mui/material";

import SampleTable from "../components/data/SampleTable";
import Chart from "../components/ui/chart";
import Link from "next/link";


interface TableChartViewProps {
    table: string
    rows: any[]
    xLabelProp: string
    axisProp: string
    dataProps: string[]
}
const TableChartView = ({ table, rows, axisProp, xLabelProp, dataProps }: TableChartViewProps) => {
    return (
        <Box>
            <Link href={`/table/${table}`}>
                <Typography variant="h3">
                    {table.toUpperCase()}
                </Typography>
            </Link>

            <Chart
                axisProp={axisProp}
                dataPoints={rows}
                xLabelProp={xLabelProp}
                dataProps={dataProps}
            />
            <Stack>
                <SampleTable rows={rows.slice(0, 5)} />
            </Stack>
        </Box>
    );
}

export default TableChartView
