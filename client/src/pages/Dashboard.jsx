import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import KPICards from "../components/KPICards";
import IntensityBarChart from "../components/IntensityBarChart";
import TopicsPieChart from "../components/TopicsPieChart";
import YearLineChart from "../components/YearLineChart";
import DataTable from "../components/DataTable";

const Dashboard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await API.get("/data");

        setData(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">

        <h1 className="text-5xl font-bold mb-8">
          Blackcoffer Dashboard
        </h1>

        <KPICards data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          <IntensityBarChart data={data} />

          <TopicsPieChart data={data} />

        </div>

        <div className="mt-6">
          <YearLineChart data={data} />
        </div>

        <div className="mt-6">
          <DataTable data={data} />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;