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
import { motion } from "framer-motion";
import Translator from "./Translator";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative z-50">
      <Translator />
      <nav className="bg-white shadow-lg w-full  top-0 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Travel Agency Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {[
              { name: "Home", href: "/" },
              { name: "Destinations", href: "/destinations" },
              { name: "Tours", href: "/tours" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 text-lg font-medium hover:text-green-600 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-800 text-lg font-medium hover:text-green-600 flex items-center transition-all duration-300"
              >
                Services
                <motion.svg
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-1"
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
                </motion.svg>
              </button>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10"
                >
                  <Link
                    href="/custom-tours"
                    className="block px-5 py-3 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    Custom Tours
                  </Link>
                  <Link
                    href="/travel-packages"
                    className="block px-5 py-3 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    Travel Packages
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          <div className="hidden md:flex space-x-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-800 hover:text-green-600"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              )
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <motion.svg
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
            </motion.svg>
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center py-6 space-y-6 shadow-lg"
          >
            {[
              { name: "Home", href: "/" },
              { name: "Destinations", href: "/destinations" },
              { name: "Tours", href: "/tours" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-800 text-lg hover:text-green-600 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close the menu when a link is clicked
              >
                {item.name}
              </Link>
            ))}

            <div className="flex space-x-8 mt-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-gray-800 hover:text-green-600"
                    onClick={() => setMenuOpen(false)} // Close the menu when a link is clicked
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}
