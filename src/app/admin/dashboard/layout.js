"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaSignOutAlt,
  FaCalendarCheck,
  FaClipboardList,
  FaMapMarkedAlt,
  FaHome,
  FaHistory,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Overview", href: "/admin/dashboard", icon: <FaHome /> },
  { name: "Manage Users", href: "/admin/dashboard/manage-users", icon: <FaUser /> },
  { name: "Manage Payment", href: "/admin/dashboard/manage-payment", icon: <FaHistory /> },
  { name: "Manage Tours", href: "/admin/dashboard/manage-tours", icon: <FaMapMarkedAlt /> },
];

export default function AdminDashboardLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Update active section based on the current pathname
  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar (Hidden when menuOpen is true on sm & md screens) */}
      {!menuOpen && (
        <nav className="bg-white shadow-md px-6 flex items-center justify-between sticky top-0 z-[9999] w-full">
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu */}
            <button className="text-gray-700 lg:hidden" onClick={() => setMenuOpen(true)}>
              <FaBars className="w-6 h-6" />
            </button>
            {/* Logo */}
            <Image src="/logo.png" alt="Ecotra" width={100} height={50} className="object-contain" />
          </div>

          {/* Navbar Links (Large Screens) */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center text-lg font-medium transition-all duration-300 ${activeSection.startsWith(item.href)
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-green-500"
                  }`}
              >
                {item.icon} <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/admin/dashboard/profile">
              <FaUser className="text-gray-600 w-6 h-6 cursor-pointer hover:text-green-500" />

            </Link>
            <Link href="/admin/login">
              <FaSignOutAlt className="text-red-500 w-6 h-6 cursor-pointer hover:text-red-700" />

            </Link>
          </div>
        </nav>
      )}

      {/* Full-Screen Sidebar (sm & md Screens) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col transition-opacity">
          {/* Sidebar Content */}
          <aside className="w-full h-full flex flex-col justify-center items-center space-y-8">
            {/* Logo & Close Button */}
            <div className="flex justify-between items-center w-full px-6">
              <Image src="/logo.png" alt="Logo" width={150} height={60} className="object-contain" />
              <button onClick={() => setMenuOpen(false)} className="text-gray-300">
                <FaTimes className="w-8 h-8" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center text-xl px-8 py-4 rounded-lg transition-all duration-300 ${activeSection.startsWith(item.href)
                      ? "bg-green-500 text-white font-bold"
                      : "text-gray-300 hover:bg-gray-800"
                    }`}
                >
                  {item.icon} <span className="ml-4">{item.name}</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-16">{children}</div>
    </div>
  );
}
