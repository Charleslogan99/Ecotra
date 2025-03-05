"use client";
import { useState } from "react";
import { FaSearch, FaFilter, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const bookingsData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Confirmed", date: "2025-03-01" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending", date: "2025-03-02" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Cancelled", date: "2025-03-03" },
];

export default function Bookings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredBookings = bookingsData.filter((booking) =>
    (filter === "All" || booking.status === filter) &&
    (booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl"> 
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Bookings</h1>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-4 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-600" />
          <select
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full bg-white border rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{booking.name}</td>
                  <td className="p-4">{booking.email}</td>
                  <td className="p-4">{booking.date}</td>
                  <td className="p-4">
                    {booking.status === "Confirmed" && (
                      <span className="text-green-600 font-medium flex items-center gap-1">
                        <FaCheckCircle /> Confirmed
                      </span>
                    )}
                    {booking.status === "Pending" && (
                      <span className="text-yellow-600 font-medium flex items-center gap-1">
                        <FaClock /> Pending
                      </span>
                    )}
                    {booking.status === "Cancelled" && (
                      <span className="text-red-600 font-medium flex items-center gap-1">
                        <FaTimesCircle /> Cancelled
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-500 font-medium">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
