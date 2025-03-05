"use client";
import { useState } from "react";
import { FaSearch, FaFilter, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const paymentsData = [
  { id: 1, user: "John Doe", amount: "$200", status: "Paid", method: "Credit Card", date: "2025-03-01" },
  { id: 2, user: "Jane Smith", amount: "$150", status: "Pending", method: "PayPal", date: "2025-03-02" },
  { id: 3, user: "Mike Johnson", amount: "$100", status: "Failed", method: "Bank Transfer", date: "2025-03-03" },
];

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPayments = paymentsData.filter((payment) => {
    return (
      (filter === "All" || payment.status === filter) &&
      (payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.method.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Payments</h1>
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search payments..."
            className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-600" />
          <select
            className="p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-700">User</th>
              <th className="p-3 text-left text-gray-700">Amount</th>
              <th className="p-3 text-left text-gray-700">Method</th>
              <th className="p-3 text-left text-gray-700">Date</th>
              <th className="p-3 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-t">
                  <td className="p-3">{payment.user}</td>
                  <td className="p-3">{payment.amount}</td>
                  <td className="p-3">{payment.method}</td>
                  <td className="p-3">{payment.date}</td>
                  <td className="p-3 flex items-center gap-2">
                    {payment.status === "Paid" && (
                      <span className="text-green-600 flex items-center gap-1">
                        <FaCheckCircle /> {payment.status}
                      </span>
                    )}
                    {payment.status === "Pending" && (
                      <span className="text-yellow-600 flex items-center gap-1">
                        <FaClock /> {payment.status}
                      </span>
                    )}
                    {payment.status === "Failed" && (
                      <span className="text-red-600 flex items-center gap-1">
                        <FaTimesCircle /> {payment.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
