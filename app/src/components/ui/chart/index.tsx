import { ResponsiveContainer, CartesianGrid, YAxis, XAxis, Tooltip, Legend, AreaChart, Area } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: '2015',
            current: 1000,

        },
        {
            name: '2020',
            current: 1500,
            yours: 1500,
            ideal: 1500,
        },
        {
            name: '2025',
            current: 3000,
            yours: 2500,
            ideal: 2000,
        },
        {
            name: '2030',
            current: 5000,
            yours: 4000,
            ideal: 2500,
        },
    ]
    return (
        <ResponsiveContainer width="100%" height='100%' maxHeight={220} >
            <AreaChart data={data}>
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
