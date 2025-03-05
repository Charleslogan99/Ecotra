"use client";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const activities = [
  { id: 1, user: "John Doe", action: "Booked a trip to Bali", status: "Completed" },
  { id: 2, user: "Jane Smith", action: "Updated profile details", status: "Pending" },
  { id: 3, user: "Michael Brown", action: "Left a review on Paris trip", status: "Completed" },
];

const UserActivity = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-gray-700 text-lg font-semibold mb-2">Recent User Activity</h3>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center gap-2 p-2 border-b">
            {activity.status === "Completed" ? <FaCheckCircle className="text-green-600" /> : <FaClock className="text-yellow-600" />}
            <span className="text-gray-700">{activity.user} {activity.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivity;
