import Chart from "@/components/ui/chart";


interface SampleChartProps {
    rows: Record<string, string>[]

    xLabelProp: string
    dataProps: string[]
}
const SampleChart = ({ rows, xLabelProp, dataProps }: SampleChartProps) => {

    return (
        <>
            <Chart
                dataPoints={rows}
                axisProp={xLabelProp}
                xLabelProp={xLabelProp}
                dataProps={dataProps}
            />
        </>
    )
};

export default SampleChart;
