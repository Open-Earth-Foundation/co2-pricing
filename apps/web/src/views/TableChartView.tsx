import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

import SampleTable from "@/components/data/SampleTable";
import Chart from "@/components/ui/chart";


interface TableChartViewProps {
    table: string
    rows: any[]
    xLabelProp: string
    axisProp: string
    dataProps: string[]
}
const TableChartView = ({ table, rows, axisProp, xLabelProp, dataProps }: TableChartViewProps) => {
    const url = `${process.env.NEXT_PUBLIC_DATA_API_URL}/query?table=${table}&explain=true`
    return (
        <Box>
            <Link href={`/sample/${table}`}>
                <Typography variant="h3">
                    {table.toUpperCase()}
                </Typography>
            </Link>
            <Link href={url} target='_blank'>
                <Typography variant="h6">
                    {url}
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
