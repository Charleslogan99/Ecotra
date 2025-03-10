"use client";
import { useState } from "react";
import { FaUser, FaTrash, FaEye, FaCheckCircle, FaTimesCircle, FaUserShield } from "react-icons/fa";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "User", status: "inactive" },
    { id: 4, name: "Sarah Johnson", email: "sarah@example.com", role: "User", status: "active" },
  ]);

  const toggleStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "active" ? "inactive" : "active" }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-6"> 
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Manage Users</h1>

      {/* Users List */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-lg font-semibold text-gray-700">All Users</h2>

        {users.length > 0 ? (
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse hidden md:table">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-sm font-semibold">
                  <th className="py-4 px-6 text-left">Name</th>
                  <th className="py-4 px-6 text-left">Email</th>
                  <th className="py-4 px-6 text-center">Role</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-100 transition-all">
                    <td className="py-4 px-6">{user.name}</td>
                    <td className="py-4 px-6">{user.email}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${user.role === "Admin" ? "bg-purple-600" : "bg-blue-500"}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-xs font-bold ${
                          user.status === "active" ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center space-x-3">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaEye className="w-5 h-5" />
                        </button>
                        <button
                          className={`${user.status === "active" ? "text-red-500 hover:text-red-700" : "text-green-500 hover:text-green-700"}`}
                          onClick={() => toggleStatus(user.id)}
                        >
                          {user.status === "active" ? <FaTimesCircle className="w-5 h-5" /> : <FaCheckCircle className="w-5 h-5" />}
                        </button>
                        <button className="text-gray-600 hover:text-purple-700">
                          <FaUserShield className="w-5 h-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700" onClick={() => deleteUser(user.id)}>
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
          <p className="text-gray-500 mt-4">No users available.</p>
        )}
      </div>
    </div>
  );
}
