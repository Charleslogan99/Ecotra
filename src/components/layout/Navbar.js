"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Translator from "./Translator";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative z-50 font-serif">
      <Translator />
      <nav className="bg-white shadow-lg w-full top-0 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center h-20">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
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
                className={`text-lg font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-green-600"
                    : "text-gray-800 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex space-x-6">
            <Link
              href="/accounts/sign-up"
              className="px-4 py-2 text-black bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300"
            >
              Sign Up
            </Link>
            <Link
              href="/accounts/login"
              className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              Login
            </Link>
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
              <Link href="/" className="flex items-center" onClick={closeMenu}>
                <Image
                  src="/logo.png"
                  alt="Travel Agency Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </Link>

              <button onClick={toggleMenu} className="text-gray-700 text-2xl">
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
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex space-x-6 mb-12">
              <Link
                href="/accounts/sign-up"
                className="px-6 py-3 text-black bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
              <Link
                href="/accounts/login"
                className="px-6 py-3 text-green-600 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
                onClick={closeMenu}
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}
