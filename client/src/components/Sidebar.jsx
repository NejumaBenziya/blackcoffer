// src/components/Sidebar.jsx

const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-white p-5 min-h-screen">

      <h2 className="text-2xl font-bold mb-8">
        Filters
      </h2>

      <div className="space-y-5">

        <div>
          <label className="block mb-2">Region</label>
          <select className="w-full p-2 rounded text-black">
            <option>All</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Topic</label>
          <select className="w-full p-2 rounded text-black">
            <option>All</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Country</label>
          <select className="w-full p-2 rounded text-black">
            <option>All</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;