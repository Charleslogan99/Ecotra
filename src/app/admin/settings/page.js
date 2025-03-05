"use client";
import { useState } from "react";
import { FaUserCog, FaLock, FaBell } from "react-icons/fa";

export default function AdminSettings() {
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaUserCog className="text-green-600" /> Admin Settings
        </h1>

        {/* Profile Settings */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Settings</h2>
          <input
            type="text"
            placeholder="Admin Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Security Settings */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FaLock className="text-red-500" /> Security
          </h2>
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaBell className="text-yellow-500" /> Notifications
          </h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>

        {/* Save Changes Button */}
        <button className="w-full bg-green-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
