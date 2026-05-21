// src/components/DataTable.jsx

const DataTable = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow overflow-x-auto">

      <h2 className="text-xl font-bold mb-4">
        Data Table
      </h2>

      <table className="w-full border-collapse">

        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Country</th>
            <th className="p-3 text-left">Topic</th>
            <th className="p-3 text-left">Intensity</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3">India</td>
            <td className="p-3">Energy</td>
            <td className="p-3">6</td>
          </tr>

          <tr className="border-b">
            <td className="p-3">USA</td>
            <td className="p-3">Economy</td>
            <td className="p-3">8</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default DataTable;