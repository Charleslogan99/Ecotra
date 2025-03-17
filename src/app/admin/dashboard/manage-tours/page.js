"use client";

import { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function ManageToursPage() {
  const [tours, setTours] = useState([
    { id: 1, name: "Safari Adventure", location: "Kenya", price: "$1200", status: "active" },
    { id: 2, name: "Island Getaway", location: "Maldives", price: "$2500", status: "inactive" },
    { id: 3, name: "Mountain Trek", location: "Nepal", price: "$1800", status: "active" },
  ]);

  const handleDelete = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold text-green-800 text-center">Manage Tours</h1>
      
      {/* Add Tour Button */}
      <div className="flex justify-center">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700">
          <FaPlus className="mr-2" /> Add Tour
        </button>
      </div>

      {/* Responsive List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">All Tours</h2>

        {/* Mobile View - Cards */}
        <div className="space-y-4 md:hidden">
          {tours.map((tour) => (
            <div key={tour.id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">{tour.name}</h3>
              <p className="text-sm text-gray-600">{tour.location}</p>
              <p className="text-md font-semibold text-green-600">{tour.price}</p>
              <span className={`text-xs px-2 py-1 rounded-md ${tour.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
              </span>
              <div className="flex justify-end space-x-3 mt-3">
                <button className="text-blue-500 hover:text-blue-700"><FaEye /></button>
                <button className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(tour.id)}><FaTrash /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                <th className="py-3 px-6 text-left">Tour Name</th>
                <th className="py-3 px-6 text-left">Location</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {tours.map((tour) => (
                <tr key={tour.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6">{tour.name}</td>
                  <td className="py-3 px-6">{tour.location}</td>
                  <td className="py-3 px-6">{tour.price}</td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 text-xs rounded-md ${tour.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center space-x-4">
                      <button className="text-blue-500 hover:text-blue-700"><FaEye /></button>
                      <button className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                      <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(tour.id)}><FaTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
