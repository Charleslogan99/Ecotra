"use client";
import { useState } from "react";
import { FaSearch, FaCheckCircle, FaTimesCircle, FaStar } from "react-icons/fa";

const reviewsData = [
  { id: 1, name: "John Doe", review: "Great experience!", rating: 5, status: "Approved" },
  { id: 2, name: "Jane Smith", review: "Average service.", rating: 3, status: "Pending" },
  { id: 3, name: "Mike Johnson", review: "Not satisfied.", rating: 2, status: "Rejected" },
];

export default function Reviews() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredReviews = reviewsData.filter((review) => {
    return (
      (filter === "All" || review.status === filter) &&
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Customer Reviews</h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search reviews..."
            className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        <select
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-700">Name</th>
              <th className="p-3 text-left text-gray-700">Review</th>
              <th className="p-3 text-left text-gray-700">Rating</th>
              <th className="p-3 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <tr key={review.id} className="border-t">
                  <td className="p-3">{review.name}</td>
                  <td className="p-3">{review.review}</td>
                  <td className="p-3 flex items-center gap-1 text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    {review.status === "Approved" && (
                      <span className="text-green-600 flex items-center gap-1">
                        <FaCheckCircle /> {review.status}
                      </span>
                    )}
                    {review.status === "Pending" && (
                      <span className="text-yellow-600">{review.status}</span>
                    )}
                    {review.status === "Rejected" && (
                      <span className="text-red-600 flex items-center gap-1">
                        <FaTimesCircle /> {review.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
