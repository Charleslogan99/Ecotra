"use client";
import { FaClipboardList, FaDollarSign, FaUsers } from "react-icons/fa";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Total Bookings */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
        <FaClipboardList className="text-green-600 text-3xl" />
        <div>
          <h3 className="text-gray-700 text-sm">Total Bookings</h3>
          <p className="text-xl font-semibold">1,245</p>
        </div>
      </div>

      {/* Total Revenue */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
        <FaDollarSign className="text-blue-600 text-3xl" />
        <div>
          <h3 className="text-gray-700 text-sm">Total Revenue</h3>
          <p className="text-xl font-semibold">$75,430</p>
        </div>
      </div>

      {/* Total Users */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
        <FaUsers className="text-orange-600 text-3xl" />
        <div>
          <h3 className="text-gray-700 text-sm">Total Users</h3>
          <p className="text-xl font-semibold">3,850</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
