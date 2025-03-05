"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChartLine, FaUsers, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-900 text-white h-full w-64 p-6 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 md:w-80`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <Image src="/logo.png" alt="Ecotra Logo" width={100} height={40} />
          <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>

        <ul className="space-y-4">
          {[
            { href: "/admin", label: "Dashboard", icon: <FaChartLine /> },
            { href: "/admin/bookings", label: "Bookings", icon: <FaClipboardList /> },
            { href: "/admin/users", label: "Users", icon: <FaUsers /> },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`p-3 flex items-center gap-2 rounded-md cursor-pointer w-full ${
                  pathname === item.href ? "bg-green-700" : "hover:bg-green-700"
                }`}
                onClick={toggleSidebar} // Close sidebar on mobile after clicking a link
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
          <li className="p-3 flex items-center gap-2 cursor-pointer hover:bg-red-700 rounded-md">
            <Link href="/logout" className="flex items-center gap-2 w-full">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop (only for mobile) */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

const Header = ({ toggleSidebar }) => (
  <header className="p-4 flex items-center justify-between shadow-sm bg-white">
    <Image src="/logo.png" alt="Ecotra Logo" width={100} height={40} className="sm:block hidden" />
    <button className="sm:hidden text-gray-700" onClick={toggleSidebar}>
      <FaBars className="text-2xl" />
    </button>
  </header>
);

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 p-6 overflow-y-auto">
        <Header toggleSidebar={toggleSidebar} />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
