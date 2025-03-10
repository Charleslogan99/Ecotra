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
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-green-800">Manage Tours</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">All Tours</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700">
            <FaPlus className="mr-2" /> Add Tour
          </button>
        </div>

        {tours.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full mt-4 border-collapse hidden md:table">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                  <th className="py-3 px-6 text-left">Tour Name</th>
                  <th className="py-3 px-6 text-left">Location</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {tours.map((tour) => (
                  <tr key={tour.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6">{tour.name}</td>
                    <td className="py-3 px-6">{tour.location}</td>
                    <td className="py-3 px-6">{tour.price}</td>
                    
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center space-x-4">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaEye className="w-5 h-5" />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700">
                          <FaEdit className="w-5 h-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(tour.id)}>
                          <FaTrash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">No tours available.</p>
        )}
      </div>
    </div>
  );
}