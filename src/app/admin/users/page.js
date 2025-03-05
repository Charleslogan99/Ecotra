"use client";
import { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaUserCheck,
  FaUserTimes,
  FaUser,
  FaTrash,
} from "react-icons/fa";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Active" },
  { id: 4, name: "Sarah Brown", email: "sarah@example.com", role: "User", status: "Inactive" },
  { id: 5, name: "Emma Wilson", email: "emma@example.com", role: "Admin", status: "Active" },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [users, setUsers] = useState(usersData);

  const filteredUsers = users.filter((user) =>
    (filter === "All" || user.status === filter) &&
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleStatus = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg border border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Users</h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500 bg-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-4 text-gray-500" />
        </div>

        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-600" />
          <select
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500 bg-gray-100"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr className="text-gray-700">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={user.id} className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="p-4 flex items-center gap-2">
                    <FaUser className="text-gray-600" /> {user.name}
                  </td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        user.status === "Active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 flex items-center gap-4">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      {user.status === "Active" ? <FaUserTimes /> : <FaUserCheck />}
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
