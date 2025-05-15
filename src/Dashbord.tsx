import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold mb-4">Creative Tim</h1>
        <ul className="space-y-2">
          <li className="bg-gray-200 p-2 rounded">Dashboard</li>
          <li className="p-2 hover:bg-gray-200 rounded">
            <Link to="/dropdown">Tables</Link>
          </li>
        </ul>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">add</p>
            {/* Clicking this redirects to Dropdown.tsx */}
            <Link to="/dropdown">
              <h3 className="text-2xl font-bold text-blue-600 hover:underline">
                Header Component
              </h3>
            </Link>
            <p className="text-green-500">+55% than last week</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Today's Users</p>
            <h3 className="text-2xl font-bold">navbar</h3>
            <p className="text-green-500">+3% than last month</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Ads Views</p>
            <h3 className="text-2xl font-bold">3,462</h3>
            <p className="text-red-500">-2% than yesterday</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Sales</p>
            <h3 className="text-2xl font-bold">$103,430</h3>
            <p className="text-green-500">+5% than yesterday</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
