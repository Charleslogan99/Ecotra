"use client";
import { useState } from "react";
import {
  FaUsers,
  FaClipboardList,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHistory,
} from "react-icons/fa";

export default function AdminDashboardPage() {
  const [admin] = useState({ name: "Admin" });

  const stats = [
    { label: "Total Users", value: 120, icon: <FaUsers /> },
    { label: "Active Users", value: 85, icon: <FaUsers /> },
    { label: "Total Bookings", value: 45, icon: <FaClipboardList /> },
    { label: "Pending Bookings", value: 10, icon: <FaHistory /> },
    { label: "Confirmed Bookings", value: 30, icon: <FaCheckCircle /> },
    { label: "Canceled Bookings", value: 5, icon: <FaTimesCircle /> },
    { label: "Total Revenue", value: "$12,500", icon: <FaMoneyBillWave /> },
  ];

  const upcomingTours = [
    { id: 1, name: "Safari Adventure", date: "March 15, 2025", time: "10:00 AM" },
    { id: 2, name: "Island Getaway", date: "April 2, 2025", time: "2:00 PM" },
  ];

  const recentActivity = [
    { id: 1, action: "New user registered", time: "5 mins ago" },
    { id: 2, action: "Booking confirmed: Safari Adventure", time: "30 mins ago" },
    { id: 3, action: "Payment received: $250", time: "1 hour ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="p-6 rounded-lg shadow-sm bg-gray-100 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">Welcome, {admin.name}!</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4">
            <div className="text-green-500 text-4xl">{stat.icon}</div>
            <div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Tours */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Upcoming Tours</h2>
        {upcomingTours.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {upcomingTours.map((tour) => (
              <li key={tour.id} className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">{tour.name}</h3>
                  <p className="text-gray-500">{tour.date} at {tour.time}</p>
                </div>
                <FaClock className="text-green-500 text-2xl" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No upcoming tours scheduled.</p>
        )}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Recent Activity</h2>
        {recentActivity.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="p-4 border rounded-lg flex justify-between items-center">
                <p className="text-gray-600">{activity.action}</p>
                <span className="text-gray-400 text-sm">{activity.time}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No recent activity.</p>
        )}
      </div>
    </div>
  );
}