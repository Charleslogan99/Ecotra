'use client'
import { FaChartLine, FaUsers, FaClipboardList, FaSignOutAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`fixed inset-0 bg-gray-900 text-white h-full w-full sm:w-96 p-6 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
    <div className="flex justify-between items-center mb-6 md:hidden">
      <Image src="/logo.png" alt="Ecotra Logo" width={100} height={100} className="w-32" />
      <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleSidebar} />
    </div>

    <ul className="space-y-4">
      <li className="p-3 flex items-center gap-2 bg-green-700 rounded-md">
        <Link href="/admin">
          <FaChartLine /> Dashboard
        </Link>
      </li>
      <li className="p-3 flex items-center gap-2 cursor-pointer hover:bg-green-700 rounded-md">
        <Link href="/admin/bookings">
          <FaClipboardList /> Bookings
        </Link>
      </li>
      <li className="p-3 flex items-center gap-2 cursor-pointer hover:bg-green-700 rounded-md">
        <Link href="/admin/admin-users">
          <FaUsers /> Users
        </Link>
      </li>
      <li className="p-3 flex items-center gap-2 cursor-pointer hover:bg-green-700 rounded-md">
        <Link href="/logout">
          <FaSignOutAlt /> Logout
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
