import { useMemo } from "react";
import { Container } from "@mui/material";

import Chart from "../ui/chart";

import { getHeadersFromCollection } from "src/utils/table";


interface SampleChartProps {
    rows: Record<string, string>[]
    labelProp?: string
}
const SampleChart = ({ rows, labelProp }: SampleChartProps) => {
    const headers = useMemo(() => getHeadersFromCollection(rows), [rows])

    return (
        <Container>
            <Chart
                headers={headers}
                dataPoints={rows}
                labelProp={labelProp}
            />
        </Container>
    )
};

export default SampleChart;
