"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEdit, FaCamera } from "react-icons/fa";

export default function AdminProfilePage() {
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@example.com",
    role: "Super Admin",
    joined: "January 10, 2023",
    password: "",
  });

  const [profilePic, setProfilePic] = useState("/default-avatar.png"); // Placeholder image

  const handleInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Profile</h2>

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full rounded-full border border-gray-300 shadow-sm"
            />
            <label className="absolute bottom-0 right-0 bg-green-600 p-2 rounded-full cursor-pointer">
              <FaCamera className="text-white text-sm" />
              <input type="file" className="hidden" onChange={handleProfilePicChange} />
            </label>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              name="name"
              value={admin.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Role */}
          <div className="relative">
            <FaEdit className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              name="role"
              value={admin.role}
              readOnly
              className="w-full pl-10 pr-4 py-3 border bg-gray-100 rounded-lg text-gray-500"
            />
          </div>

          {/* Joined Date */}
          <div className="relative">
            <FaEdit className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              name="joined"
              value={admin.joined}
              readOnly
              className="w-full pl-10 pr-4 py-3 border bg-gray-100 rounded-lg text-gray-500"
            />
          </div>

          {/* Change Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
