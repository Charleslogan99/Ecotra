"use client";
import { useState } from "react";
import { FaClock, FaCheckCircle, FaTimesCircle, FaEye, FaTrash } from "react-icons/fa";

export default function ManageBookingsPage() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Safari Adventure",
      date: "March 15, 2025",
      time: "10:00 AM",
      status: "upcoming",
    },
    {
      id: 2,
      name: "Island Getaway",
      date: "April 2, 2025",
      time: "2:00 PM",
      status: "upcoming",
    },
    {
      id: 3,
      name: "Mountain Trek",
      date: "Jan 10, 2025",
      time: "8:00 AM",
      status: "completed",
    },
    {
      id: 4,
      name: "Jungle Expedition",
      date: "Feb 5, 2025",
      time: "12:00 PM",
      status: "canceled",
    },
  ]);

  const handleCancel = (id) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, status: "canceled" } : booking
      )
    );
  };

  return (
    <div className=" space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-green-800">Manage Bookings</h1>

      {/* Bookings List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">All Bookings</h2>

        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full mt-4 border-collapse hidden md:table">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Tour</th>
                  <th className="py-3 px-6 text-left">Date & Time</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6">{booking.name}</td>
                    <td className="py-3 px-6">
                      {booking.date} at {booking.time}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                          booking.status === "upcoming"
                            ? "bg-green-500"
                            : booking.status === "completed"
                            ? "bg-blue-500"
                            : "bg-red-500"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center space-x-4">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaEye className="w-5 h-5" />
                        </button>
                        {booking.status === "upcoming" && (
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleCancel(booking.id)}
                          >
                            <FaTrash className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">No bookings available.</p>
        )}

        {/* Mobile View */}
        <div className="mt-4 space-y-4 md:hidden">
          {bookings.map((booking) => (
            <div key={booking.id} className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-gray-800">{booking.name}</h3>
              <p className="text-gray-500 text-sm">
                {booking.date} at {booking.time}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span
                  className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                    booking.status === "upcoming"
                      ? "bg-green-500"
                      : booking.status === "completed"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                >
                  {booking.status}
                </span>
                <div className="flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEye className="w-5 h-5" />
                  </button>
                  {booking.status === "upcoming" && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleCancel(booking.id)}
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
