"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 8000 },
  { month: "Mar", revenue: 7500 },
  { month: "Apr", revenue: 12000 },
  { month: "May", revenue: 15000 },
  { month: "Jun", revenue: 20000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-gray-700 text-lg font-semibold mb-2">Revenue Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#4CAF50" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
