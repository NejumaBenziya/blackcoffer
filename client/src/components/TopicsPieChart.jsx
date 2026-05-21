// src/components/TopicsPieChart.jsx

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Energy", value: 40 },
  { name: "Economy", value: 30 },
  { name: "Politics", value: 20 },
  { name: "Tech", value: 10 },
];

const TopicsPieChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow h-96">

      <h2 className="text-xl font-bold mb-4">
        Topics Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default TopicsPieChart;