"use client";
import { useState } from "react";
import { FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function BookingsPage() {
  const [bookings] = useState([
    { id: 1, name: "Safari Adventure", date: "March 15, 2025", time: "10:00 AM", status: "upcoming" },
    { id: 2, name: "Island Getaway", date: "April 2, 2025", time: "2:00 PM", status: "upcoming" },
    { id: 3, name: "Mountain Trek", date: "Jan 10, 2025", time: "8:00 AM", status: "completed" },
    { id: 4, name: "Jungle Expedition", date: "Feb 5, 2025", time: "12:00 PM", status: "canceled" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">My Bookings</h1>
        <button className="mt-4 sm:mt-0 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
          Book a New Tour
        </button>
      </div>

      {/* Bookings Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Bookings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Tours</h2>
          {bookings.filter((b) => b.status === "upcoming").length > 0 ? (
            <ul className="space-y-4">
              {bookings
                .filter((b) => b.status === "upcoming")
                .map((booking) => (
                  <li
                    key={booking.id}
                    className="flex justify-between items-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">{booking.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {booking.date} at {booking.time}
                      </p>
                    </div>
                    <FaClock className="text-green-500 text-2xl" />
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-4">No upcoming tours scheduled.</p>
          )}
        </div>

        {/* Past Bookings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Past Tours</h2>
          {bookings.filter((b) => b.status !== "upcoming").length > 0 ? (
            <ul className="space-y-4">
              {bookings
                .filter((b) => b.status !== "upcoming")
                .map((booking) => (
                  <li
                    key={booking.id}
                    className="flex justify-between items-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">{booking.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {booking.date} at {booking.time}
                      </p>
                    </div>
                    {booking.status === "completed" ? (
                      <FaCheckCircle className="text-green-500 text-2xl" />
                    ) : (
                      <FaTimesCircle className="text-red-500 text-2xl" />
                    )}
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-4">No past bookings available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
