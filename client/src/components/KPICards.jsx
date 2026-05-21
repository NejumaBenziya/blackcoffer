// src/components/KPICards.jsx

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Total Data</h3>
        <p className="text-3xl font-bold mt-2">500</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Avg Intensity</h3>
        <p className="text-3xl font-bold mt-2">6.8</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Avg Relevance</h3>
        <p className="text-3xl font-bold mt-2">4.3</p>
      </div>

    </div>
  );
};

export default KPICards;