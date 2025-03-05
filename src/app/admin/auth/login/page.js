"use client";

import { FaUserShield, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-xl rounded-xl w-96 border border-gray-200">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Admin Login</h2>
        
        {/* Form */}
        <form className="space-y-5">
          <div className="relative">
            <FaUserShield className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password & Signup */}
        <div className="mt-4 text-center">
          <a href="/admin/auth/forgot-password" className="text-blue-600 text-sm hover:underline">
            Forgot Password?
          </a>
          <p className="text-sm text-gray-600 mt-2">
            Don't have an account?{" "}
            <a href="/admin/auth/signup" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
