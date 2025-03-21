"use client";
import React, { useState, useCallback } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Translator from "@/components/layout/Translator";

const InputField = React.memo(({ label, id, type, value, onChange, placeholder }) => (
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
      className="mt-1 block bg-transparent placeholder-gray-800 w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
));

const PasswordField = React.memo(({ label, id, passwordVisible, togglePassword, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-base sm:text-lg font-medium text-gray-50">
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        name={id}
        type={passwordVisible ? "text" : "password"}
        value={value}
        onChange={onChange}
        required
        className="mt-1 block bg-transparent w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePassword}>
        {passwordVisible ? (
          <AiOutlineEye className="text-gray-500 text-xl" />
        ) : (
          <AiOutlineEyeInvisible className="text-gray-500 text-xl" />
        )}
      </span>
    </div>
  </div>
));

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePassword = useCallback(() => setPasswordVisible((prev) => !prev), []);
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e) => setPassword(e.target.value), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      alert("Login successful!");
    }, 2000);
  };

  return (
    <div
      className="flex min-h-screen font-serif flex-col items-center text-gray-500 justify-center bg-cover bg-center bg-no-repeat py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/bgimage.jpg')" }}
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Translator />
      </div>

      <div className="w-full max-w-md space-y-8 bg-black bg-opacity-80 p-8 sm:p-12 shadow-2xl rounded-lg">
        <div className="text-center">
          <Link href="/">
            <Image
              alt="Ecotra"
              src="/logo.png"
              width={180}
              height={90}
              className="mx-auto"
              priority
            />
          </Link>

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100">Login</h2>
          <p className="mt-2 text-sm sm:text-lg text-gray-400">To get access to all your dashboards</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@email.com"
          />

          <PasswordField
            label="Password"
            id="password"
            passwordVisible={passwordVisible}
            togglePassword={togglePassword}
            value={password}
            onChange={handlePasswordChange}
          />

          <p className="text-right text-sm sm:text-base">
            <Link href="/accounts/forgotpassword" className="text-green-600 hover:text-green-500 font-medium">
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full rounded-md px-4 py-2 text-base sm:text-lg font-medium text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
              ${loading ? "bg-green-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="flex flex-col sm:flex-row justify-between mt-4">
            <p className="text-sm sm:text-base text-gray-400">
              Need help?{" "}
              <Link href="mailto:support@ecotra.com" className="text-green-600 hover:text-green-500 font-medium">
                Contact Support
              </Link>
            </p>
            <p className="text-sm sm:text-base text-gray-400 text-start mt-2 sm:mt-0">
              No account?{" "}
              <Link href="/accounts/sign-up" className="text-green-600 hover:text-green-500 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </form>

        <p className="mt-8 text-center text-sm sm:text-md text-gray-500">&copy; 2025 Ecotra. All Rights Reserved.</p>
      </div>
    </div>
  );
}
