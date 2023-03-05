import {
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ReferenceLine,
  Line,
} from "recharts";
import type { ChartDataPoint } from "types/calculator/plot";

interface ChartProps {
  xLabelProp: string;
  axisProp: string;
  dataProps: string[];
  dataPoints: ChartDataPoint[];
}

const formatter = (value: string) => `$${value}`;

const Chart = ({ dataPoints, dataProps, xLabelProp }: ChartProps) => {
  const colors = [
    "#2351DC",
    "blue",
    "green",
    "yellow",
    "pink",
    "organge",
    "magenta",
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={dataPoints}
        margin={{ top: 30, right: 0, left: 10, bottom: 0 }}
      >
        <defs>
          {dataProps.map((dataProp, idx) => (
            <linearGradient
              key={dataProp}
              id={dataProp}
              x1="1"
              y1="0"
              x2="0"
              y2="0"
            >
              <stop offset="5%" stopColor={colors[idx]} stopOpacity={0.8} />
              <stop offset="50%" stopColor={"#D1282C"} stopOpacity={0.5} />
              <stop offset="80%" stopColor={"#D1282C"} stopOpacity={0.0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xLabelProp}
          fontFamily="Roboto"
          height={50}
          label={{
            value: "Year of Emission",
            position: "insideBottom",
          }}
        />
        <YAxis
          label={{ value: "$/Ton of CO2", angle: -90, position: "insideLeft" }}
          width={80}
          tickFormatter={formatter}
        />
        <Tooltip
          labelFormatter={(value) => {
            return `Year of Emission: ${value}`;
          }}
          formatter={(value, name, props) => [`$${value}`, "Carbon Price"]}
          separator=" = "
        />
        {/* <Legend verticalAlign="top" /> */}
        {dataProps.map((dataProp, idx) => (
          <Area
            key={dataProp}
            type="monotone"
            dataKey={dataProp}
            stroke={colors[idx]}
            strokeWidth={4}
            fillOpacity={1}
            fill={`url(#${dataProp})`}
          />
        ))}
        <ReferenceLine
          x={2029}
          stroke="#FA9100"
          strokeWidth={4}
          label={{ value: "1.5°C Limit Exceeded", position: "top" }}
          isFront={true}
        />
        <Line
          name="Remaining Carbon Budget for 1.5°C"
          dataKey="name"
          stroke="#FA9100"
        />
        <ReferenceLine
          x={2047}
          stroke="#D1282C"
          strokeWidth={4}
          label={{ value: "2.0°C Limit Exceeded", position: "top" }}
          isFront={true}
        />
        <Line
          name="Remaining Carbon Budget for 2.0°C"
          dataKey="name"
          stroke="#D1282C"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
