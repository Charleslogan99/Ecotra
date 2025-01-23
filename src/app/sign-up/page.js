"use client";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Image from "next/image";
import Select from "react-select";
import useCountries from "react-select-country-list";
import Translator from "@/components/layout/Translator";

const InputField = ({ label, id, type, value, onChange, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-lg font-medium text-gray-50"
    >
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
    <label
      htmlFor={id}
      className="block text-lg font-medium text-gray-50"
    >
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

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const countries = useCountries();

  return (
    <div
      className="flex min-h-screen font-serif flex-col items-center text-gray-500 justify-center bg-cover bg-center bg-no-repeat py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/bgimage.jpg')", // Replace 'your-image-name.jpg' with the actual image filename
      }}
    >
      {/* Translator Component */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Translator />
      </div>

      {/* Main Form Container */}
      <div className="w-full mt-16 max-w-xl space-y-8 bg-black bg-opacity-100 p-6 shadow-2xl rounded-lg">
        <div className="text-center">
          {/* Logo */}
          <a href="/">
            <Image
              alt="Ecotra"
              src="/logo.png"
              width={200}
              height={100}
              className="mx-auto"
            />
          </a>

          <h2 className="text-4xl font-semibold text-gray-100">
            Create Account
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Already have an account?{" "}
            <a href="/signin" className="text-green-600 hover:text-green-500">
              Sign in
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="First Name"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <InputField
              label="Last Name"
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-lg font-medium text-gray-50"
            >
              Country
            </label>
            <Select
              id="country"
              options={countries.getData()}
              value={selectedCountry}
              onChange={setSelectedCountry}
              className="mt-1"
              placeholder="-- Select your country --"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#4b5563",
                  backgroundColor: "transparent",
                  "&:hover": {
                    borderColor: "#d1d5db",
                  },
                }),
              }}
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-gray-50"
            >
              Phone Number
            </label>
            <PhoneInput
              country={
                selectedCountry ? selectedCountry.value.toLowerCase() : "us"
              }
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              className="mt-1 block w-full"
              inputClass="w-full rounded-md border border-gray-600 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              buttonClass="bg-transparent border border-gray-900 rounded-l-md"
              dropdownClass="custom-dropdown"
              enableSearch={true}
              placeholder="Enter your phone number"
            />
          </div>

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

          <PasswordField
            label="Confirm Password"
            id="confirmPassword"
            passwordVisible={confirmPasswordVisible}
            setPasswordVisible={setConfirmPasswordVisible}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="text-sm text-center text-gray-400">
            By signing up, I confirm I accept the{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-500"
            >
              Terms of Use
            </a>{" "}
            and consent to the processing of my personal and biometric data as
            stated in the{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-500"
            >
              Privacy Policy
            </a>.
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-green-600 px-4 py-2 text-lg font-medium text-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create Account
          </button>

          <p className="mt-4 text-md text-gray-400 text-center">
            Need help?{" "}
            <a
              href="/support"
              className="text-green-600 hover:text-green-500 font-medium"
            >
              Contact Support
            </a>
          </p>
        </form>

        <p className="mt-8 text-center text-md text-gray-500">
          © 2025 Ecotra. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
