import { ResponsiveContainer, CartesianGrid, YAxis, XAxis, Tooltip, Legend, AreaChart, Area } from 'recharts';
import type { ChartDataPoint } from 'types/calculator/plot';


interface ChartProps {
    xLabelProp: string
    axisProp: string
    dataProps: string[]
    dataPoints: ChartDataPoint[]
}
const Chart = ({ dataPoints, dataProps, xLabelProp }: ChartProps) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'organge', 'magenta']
    return (
        <ResponsiveContainer width="100%" height={300} >
            <AreaChart data={dataPoints}>
                <defs>
                    {dataProps.map((dataProp, idx) => (
                        <linearGradient key={dataProp} id={dataProp} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={colors[idx]} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={colors[idx]} stopOpacity={0} />
                        </linearGradient>
                    ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xLabelProp} fontFamily='Roboto' />
                <YAxis />
                <Tooltip />
                <Legend />
                {dataProps.map((dataProp, idx) => (
                    <Area
                        key={dataProp}
                        type="monotone"
                        dataKey={dataProp}
                        stroke={colors[idx]}
                        fillOpacity={1}
                        fill={`url(#${dataProp})`} />
                ))}
            </AreaChart>
        </ResponsiveContainer >
    );
}

export default Chart;
