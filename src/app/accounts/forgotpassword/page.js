"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Translator from "@/components/layout/Translator";

const InputField = ({ label, id, type, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-base sm:text-lg font-medium text-gray-50">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="mt-1 block bg-transparent w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
);

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password email sent to:", email);
  };

  return (
    <div
      className="flex min-h-screen font-serif flex-col items-center text-gray-500 justify-center bg-cover bg-center bg-no-repeat py-10 px-6 sm:px-8 lg:px-10"
      style={{
        backgroundImage: "url('/bgimage.jpg')",
      }}
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Translator />
      </div>

      <div className="w-full max-w-md space-y-8 bg-black bg-opacity-70 p-8 sm:p-10 shadow-2xl rounded-lg">
        <div className="text-center">
          <a href="/">
            <Image
              alt="Ecotra"
              src="/logo.png"
              width={180}
              height={90}
              className="mx-auto"
            />
          </a>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">Confirm your email</h2>
          <p className="mt-2 text-sm sm:text-lg text-gray-400">
            Enter your email address to receive a password reset link
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <InputField
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-green-600 px-4 py-2 text-lg font-medium text-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Send Reset Link
          </button>

          <div className="text-center">
            <p className="mt-4 text-sm sm:text-base text-gray-400">
              Remembered your password?{" "}
              <a
                href="/accounts/login"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                Login
              </a>
            </p>
          </div>
        </form>

        <p className="mt-8 text-center text-sm sm:text-md text-gray-500">
          &copy; 2025 Ecotra. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
