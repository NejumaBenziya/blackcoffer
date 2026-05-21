import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const IntensityBarChart = ({ data }) => {

  // Group data by region
  const chartData = data
  .filter(
    (item) =>
      item.region &&
      item.intensity &&
      !isNaN(item.intensity)
  )
  .reduce((acc, item) => {

    const existing = acc.find(
      (r) => r.region === item.region
    );

    if (existing) {

      existing.intensity += Number(item.intensity);

    } else {

      acc.push({
        region: item.region,
        intensity: Number(item.intensity),
      });

    }

    return acc;

  }, [])
  .slice(0, 10);

  return (
    <div className="bg-white p-5 rounded-xl shadow h-96">

      <h2 className="text-xl font-bold mb-4">
        Intensity by Region
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="region" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="intensity"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default IntensityBarChart;