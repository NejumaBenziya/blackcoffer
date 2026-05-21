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
  const chartData = data.reduce((acc, item) => {

    // Skip empty regions
    if (!item.region || !item.intensity) return acc;

    // Check if region already exists
    const existingRegion = acc.find(
      (region) => region.region === item.region
    );

    if (existingRegion) {

      existingRegion.intensity += item.intensity;

    } else {

      acc.push({
        region: item.region,
        intensity: item.intensity,
      });

    }

    return acc;

  }, []);

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