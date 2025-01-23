"use client";
import React, { useState } from "react";
import Image from "next/image";
import Translator from "@/components/layout/Translator";

const OTPField = ({ label, id, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-lg font-medium text-gray-50">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="mt-1 block bg-transparent w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
);

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("example@gmail.com")

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

      <div className="w-full mt-16 max-w-xl space-y-8 bg-black bg-opacity-100 p-6 shadow-2xl rounded-lg">
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

          <h2 className="text-3xl  text-gray-100">Verify your email</h2>
          <p className="mt-4 text-md text-gray-400 text-center">
              Please enter the verification code that was sent to {email}{" "}
              <a
                href="/accounts/sign-up"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                Change email
              </a>
            </p>
        </div>

        <form className="mt-8 space-y-6">
          <OTPField
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="6 digit code"
          />
          
           
          <button
            type="submit"
            disabled={otp.length < 6} // disable the button if the OTP is less than 6 digits
            className={`mt-6 w-full rounded-md bg-green-600 px-4 py-2 text-lg font-medium text-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${otp.length < 6 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Verify
          </button>
          <p className="mt-4 text-md text-gray-400 text-start">
              Didn't receive code?{" "}
              <a
                href="/accounts/sign-up"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                Send it again
              </a>
            </p>
        </form>

        <p className="mt-8 text-center text-md text-gray-500">
          &copy; 2025 Ecotra. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}