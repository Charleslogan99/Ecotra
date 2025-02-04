"use client";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
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

const PasswordField = ({
  label,
  id,
  passwordVisible,
  setPasswordVisible,
  value,
  onChange,
}) => (
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
      <span
        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
        onClick={() => setPasswordVisible(!passwordVisible)}
      >
        {passwordVisible ? (
          <AiOutlineEye className="text-gray-500 text-xl" />
        ) : (
          <AiOutlineEyeInvisible className="text-gray-500 text-xl" />
        )}
      </span>
    </div>
  </div>
);

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="flex min-h-screen font-serif flex-col items-center text-gray-500 justify-center bg-cover bg-center bg-no-repeat py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/bgimage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Translator />
      </div>

      <div className="w-full max-w-md space-y-8 bg-black bg-opacity-80 p-8 sm:p-12 shadow-2xl rounded-lg">
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

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100">Login</h2>
          <p className="mt-2 text-sm sm:text-lg text-gray-400">
            To get access to all your dashboards
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <InputField
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />

          <PasswordField
            label="Password"
            id="password"
            passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-right text-sm sm:text-base">
            <a
              href="/accounts/forgotpassword"
              className="text-green-600 hover:text-green-500 font-medium"
            >
              Forgot Password?
            </a>
          </p>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-green-600 px-4 py-2 text-base sm:text-lg font-medium text-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Login
          </button>
          <div className="flex flex-col sm:flex-row justify-between mt-4">
            <p className="text-sm sm:text-base text-gray-400">
              Need help?{" "}
              <a
                href="mailto:support@ecotra.com"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                Contact Support
              </a>
            </p>
            <p className="text-sm sm:text-base text-gray-400 text-start mt-2 sm:mt-0">
              No account?{" "}
              <a
                href="/accounts/sign-up"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                SignUp
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
