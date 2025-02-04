"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import Translator from "@/components/layout/Translator";
import 'react-phone-number-input/style.css';  // Import the styles for PhoneInput

const InputField = ({ label, id, type, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-lg font-medium text-gray-50">
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
      className="mt-1 block w-full rounded-md border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent focus:border-green-500 shadow-sm sm:text-lg"
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
    <label htmlFor={id} className="block text-lg font-medium text-gray-50">
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
        className="mt-1 block w-full rounded-md border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent focus:border-green-500 shadow-sm sm:text-lg"
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
  const [countries, setCountries] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fetch country data on component mount
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryOptions = response.data.map(country => ({
          label: country.name.common,
          value: country.cca2
        }));

        // Sort countries alphabetically by name
        countryOptions.sort((a, b) => a.label.localeCompare(b.label));

        setCountries(countryOptions);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  return (
    <div
      className="flex min-h-screen font-serif flex-col items-center text-gray-500 justify-center bg-cover bg-center bg-no-repeat py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/bgimage.jpg')",
      }}
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Translator />
      </div>

      <div className="w-full max-w-lg space-y-8 bg-black bg-opacity-80 p-6 sm:p-8 lg:p-12 shadow-2xl rounded-lg">
        <div className="text-center">
          <a href="/">
            <Image
              alt="Ecotra"
              src="/logo.png"
              width={200}
              height={100}
              className="mx-auto"
            />
          </a>
          <h2 className="text-4xl font-semibold text-gray-100">Create Account</h2>
          <p className="mt-2 text-lg text-gray-400">
            Already have an account?{" "}
            <a href="/accounts/login" className="text-green-600 hover:text-green-500">
              Sign in
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent focus:border-green-500 shadow-sm sm:text-lg"
            >
              <option value="">-- Select your country --</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-gray-50"
            >
              Phone Number
            </label>
            <PhoneInput
              id="phoneNumber"
              country={selectedCountry ? selectedCountry.toLowerCase() : "us"}
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="mt-1 block w-full rounded-md border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent focus:border-green-500 shadow-lg sm:text-lg"
              style={{
                background: "#111",  // Dark background
                borderRadius: "8px",  // Matching rounded corners
                border: "1px solid #4CAF50",  // Green border
                paddingLeft: "40px",  // Space for the flag icon
                transition: "all 0.3s ease-in-out",  // Smooth transition
              }}
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
            <a href="/legal/terms" className="text-green-600 hover:text-green-500">
              Terms of Use
            </a>{" "}
            and consent to the processing of my personal and biometric data as stated in the{" "}
            <a href="/legal/privacy-policy" className="text-green-600 hover:text-green-500">
              Privacy Policy
            </a>
            .
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-green-600 px-4 py-2 text-lg font-medium text-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create Account
          </button>

          <p className="mt-4 text-md text-gray-400 text-center">
            Need help?{" "}
            <a href="mailto:support@ecotra.com" className="text-green-600 hover:text-green-500 font-medium">
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
