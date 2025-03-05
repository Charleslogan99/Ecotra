"use client";
import { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const toursData = [
  { id: 1, name: "Safari Adventure", price: "$150", status: "Active" },
  { id: 2, name: "Beach Getaway", price: "$200", status: "Inactive" },
  { id: 3, name: "Mountain Hiking", price: "$180", status: "Active" },
];

export default function ToursManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTours = toursData.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Page Title & Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Tours Management</h1>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <FaPlus /> Add Tour
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-1/3 mb-4">
        <input
          type="text"
          placeholder="Search tours..."
          className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      {/* Tours Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-700">Tour Name</th>
              <th className="p-3 text-left text-gray-700">Price</th>
              <th className="p-3 text-left text-gray-700">Status</th>
              <th className="p-3 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <tr key={tour.id} className="border-t">
                  <td className="p-3">{tour.name}</td>
                  <td className="p-3">{tour.price}</td>
                  <td className={`p-3 ${tour.status === "Active" ? "text-green-600" : "text-red-600"}`}>{tour.status}</td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-600 hover:underline flex items-center gap-1">
                      <FaEdit /> Edit
                    </button>
                    <button className="text-red-600 hover:underline flex items-center gap-1">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">No tours found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
