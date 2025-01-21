// components/Navbar.js

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Translator from "./Translator";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <Translator />
      <nav className="bg-white shadow-lg fixe w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-screen-2xl  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Travel Agency Logo"
              width={150}
              height={50}
              className="object contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-black text-lg font-medium hover:text-green-600 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-black text-lg font-medium hover:text-green-600 transition-all duration-300"
            >
              Destinations
            </Link>
            <Link
              href="/tours"
              className="text-black text-lg font-medium hover:text-green-600 transition-all duration-300"
            >
              Tours
            </Link>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-black text-lg font-medium hover:text-green-600 flex items-center transition-all duration-300"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                  <Link
                    href="/custom-tours"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    Custom Tours
                  </Link>
                  <Link
                    href="/travel-packages"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    Travel Packages
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-black text-lg font-medium hover:text-green-600 transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-black text-lg font-medium hover:text-green-600 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-black hover:text-green-600"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-black hover:text-green-600"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-black hover:text-green-600"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-black hover:text-green-600"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white h-full border-t border-gray-200 flex flex-col justify-between items-center py-6 space-y-6">
            <div className="space-y-8 my-auto">
              <Link
                href="/"
                className="block text-gray-700 hover:text-green-600 text-lg"
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="block text-gray-700 hover:text-green-600 text-lg"
              >
                Destinations
              </Link>
              <Link
                href="/tours"
                className="block text-gray-700 hover:text-green-600 text-lg"
              >
                Tours
              </Link>

              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-black text-lg font-medium hover:text-green-600 flex items-center transition-all duration-300"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                    <Link
                      href="/custom-tours"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                    >
                      Custom Tours
                    </Link>
                    <Link
                      href="/travel-packages"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                    >
                      Travel Packages
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block text-gray-700 hover:text-green-600 text-lg"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-green-600 text-lg"
              >
                Contact
              </Link>
            </div>

            <div className="flex justify-center space-x-16 mt-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-black hover:text-green-600"
              >
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-black hover:text-green-600"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-black hover:text-green-600"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-black hover:text-green-600"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
