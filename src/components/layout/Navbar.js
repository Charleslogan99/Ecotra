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
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50 font-serif">
      <Translator />
      <nav className="bg-white shadow-lg w-full top-0 transition-all duration-300">
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

          <div className="hidden lg:flex items-center space-x-10">
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
          </div>

          <div className="hidden lg:flex space-x-6">
            {[
              { Icon: FaFacebookF, url: "https://www.facebook.com" },
              { Icon: FaTwitter, url: "https://www.twitter.com" },
              { Icon: FaInstagram, url: "https://www.instagram.com" },
              { Icon: FaLinkedinIn, url: "https://www.linkedin.com" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-green-600"
              >
                <social.Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 focus:outline-none"
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
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-between"
          >
            <div className="flex justify-between items-center w-full p-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Ecotra Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={toggleMenu}
                className="text-gray-700 text-2xl font-extralight"
              >
                <FaTimes className="h-6 w-6 opacity-90" />
              </button>
            </div>

            <div className="flex flex-col items-center space-y-8 py-12">
              {[
                { name: "Get Started", href: "/accounts/sign-up" },
                { name: "Destinations", href: "/destinations" },
                { name: "Tours", href: "/tours" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl text-gray-800 hover:text-green-600 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-20 mb-12">
              {[
                { Icon: FaFacebookF, url: "https://www.facebook.com" },
                { Icon: FaTwitter, url: "https://www.twitter.com" },
                { Icon: FaInstagram, url: "https://www.instagram.com" },
                { Icon: FaLinkedinIn, url: "https://www.linkedin.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-green-600"
                  onClick={toggleMenu}
                >
                  <social.Icon className="w-7 h-7" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}
