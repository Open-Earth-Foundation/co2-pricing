import { ResponsiveContainer, CartesianGrid, YAxis, XAxis, Tooltip, Legend, AreaChart, Area } from 'recharts';
import type { ChartDataPoint } from 'src/types/calculator/plot';


interface ChartProps {
    headers: string[]
    labelProp?: string
    dataPoints: ChartDataPoint[]
}
const Chart = ({ headers, dataPoints, labelProp }: ChartProps) => {
    const colors = ['red', 'blue', 'green'] as const
    const labelProperty = labelProp ?? headers[1]
    return (
        <ResponsiveContainer width="100%" height='100%' maxHeight={220} >
            <AreaChart data={dataPoints}>
                <defs>
                    {headers.map((header, idx) => (
                        <linearGradient key={header} id={header} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={colors[idx]} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={colors[idx]} stopOpacity={0} />
                        </linearGradient>
                    ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={labelProperty} fontFamily='Roboto' />
                <YAxis />
                <Tooltip />
                <Legend />
                {headers.map((header, idx) => (
                    <Area key={header} type="monotone" dataKey={header} stroke={colors[idx]} fillOpacity={1} fill={`url(#${header})`} />
                ))}
            </AreaChart>
        </ResponsiveContainer >
    );
}

export default Chart;
