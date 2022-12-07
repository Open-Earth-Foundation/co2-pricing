import { ResponsiveContainer, CartesianGrid, YAxis, XAxis, Tooltip, Legend, AreaChart, Area } from 'recharts';
import type { ChartDataPoint } from 'src/types/calculator/plot';


interface ChartProps {
    dataPoints: ChartDataPoint[]
}
const Chart = ({
    dataPoints
}: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height='100%' maxHeight={220} >
            <AreaChart data={dataPoints}>
                <defs>
                    <linearGradient id="current" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="red" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="red" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="yours" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="blue" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="ideal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="green" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="green" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontFamily='Roboto' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="current" stroke="red" fillOpacity={1} fill="url(#current)" />
                <Area type="monotone" dataKey="yours" stroke="blue" fillOpacity={1} fill="url(#yours)" />
                <Area type="monotone" dataKey="ideal" stroke="green" fillOpacity={1} fill="url(#ideal)" />
            </AreaChart>
        </ResponsiveContainer >
    );
}

export default Chart;
