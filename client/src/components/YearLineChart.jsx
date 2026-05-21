// src/components/YearLineChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 2018, intensity: 3 },
  { year: 2019, intensity: 5 },
  { year: 2020, intensity: 7 },
  { year: 2021, intensity: 9 },
];

const YearLineChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow h-96">

      <h2 className="text-xl font-bold mb-4">
        Year Trend
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="intensity" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default YearLineChart;