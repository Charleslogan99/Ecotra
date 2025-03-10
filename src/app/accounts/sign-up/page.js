"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import Translator from "@/components/layout/Translator";

const InputField = React.memo(
  ({ label, id, type, value, onChange, placeholder }) => (
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
        className="mt-1 block w-full rounded-md border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent focus:border-green-500 shadow-sm sm:text-lg"
      />
    </div>
  )
);


const PasswordField = React.memo(
  ({
    label,
    id,
    passwordVisible,
    togglePasswordVisibility,
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
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? (
            <AiOutlineEye className="text-gray-500 text-xl" />
          ) : (
            <AiOutlineEyeInvisible className="text-gray-500 text-xl" />
          )}
        </span>
      </div>
    </div>
  )
);

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryOptions = response.data
          .map((country) => ({
            label: country.name.common,
            value: country.cca2.toLowerCase(),
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(countryOptions);
      })
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  useEffect(() => {
    // Update the phone input when the country changes
    if (selectedCountry) {
      setPhoneNumber(""); // Reset phone number
    }
  }, [selectedCountry]);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData, phoneNumber, selectedCountry);
  };

  return (
    <div
      className="flex min-h-screen font-serif flex-col items-center text-gray-500 justify-center bg-cover bg-center bg-no-repeat py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/bgimage.jpg')" }}
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
          <h2 className="text-4xl font-semibold text-gray-100">
            Create Account
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Already have an account?{" "}
            <a
              href="/accounts/login"
              className="text-green-600 hover:text-green-500"
            >
              Sign in
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            <InputField
              label="Last Name"
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
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
              className="mt-1 block w-full rounded-md border border-gray-600 px-4 py-3 text-gray-100 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm sm:text-lg"
            >
              <option value="" className="text-gray-500" style={{ color: '#6b7280' }}>
                -- Select your country --
              </option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-50">
              Phone Number
            </label>
            <PhoneInput
              country={selectedCountry}
              value={phoneNumber}
              onChange={setPhoneNumber}
              inputStyle={{
                width: "100%",
                height: "50px",
                paddingLeft: "60px",
                paddingRight: "10px",
                borderRadius: "6px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #4a4a4a",
                fontSize: "1rem",
                outline: "none",
                "::placeholder": { color: "#9ca3af" }, // Light gray placeholder (text-gray-400)
              }}
              containerStyle={{
                width: "100%",
              }}
              buttonStyle={{
                backgroundColor: "black",
                borderRight: "1px solid #4a4a4a",
                paddingLeft: "10px",
                paddingRight: "10px",
                display: "flex",
                alignItems: "center",
              }}
              dropdownStyle={{
                backgroundColor: "#222",
                color: "#fff",
                border: "1px solid #4a4a4a",
              }}
              flagStyle={{
                width: "22px",
                height: "15px",
                borderRadius: "3px",
              }}
            />
          </div>

          <InputField
            label="Email Address"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
          <PasswordField
            label="Password"
            id="password"
            passwordVisible={passwordVisible}
            togglePasswordVisibility={() =>
              setPasswordVisible(!passwordVisible)
            }
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordField
            label="Confirm Password"
            id="confirmPassword"
            passwordVisible={confirmPasswordVisible}
            togglePasswordVisibility={() =>
              setConfirmPasswordVisible(!confirmPasswordVisible)
            }
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-green-600 px-4 py-2 text-lg font-medium text-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
        <p className="mt-8 text-center text-md text-gray-500">
          © 2025 Ecotra. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
