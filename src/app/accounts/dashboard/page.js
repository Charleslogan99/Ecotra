"use client";

import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPlaneDeparture,
  FaUsers,
  FaDollarSign,
  FaCalendarAlt,
  FaHome,
  FaBook,
  FaUser,
  FaLeaf,
  FaMountain,
  FaHotel,
  FaGlobe,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Translator from "@/components/layout/Translator";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userType, setUserType] = useState("user");
  const username = "John"; 

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 w-full z-40 md:px-10 h-16">
        <Link href="/">
          <Image src="/logo.png" alt="Ecotra Logo" width={150} height={50} />
        </Link>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden text-2xl text-gray-700 hover:text-green-600 transition"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <div className="flex flex-1 mt-16">
        <aside
          className={`bg-white shadow-lg p-6 transition-transform duration-300 fixed top-16 left-0 w-3/4 h-screen z-10 md:static md:w-1/4 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <Translator />
          <nav className="mt-4 space-y-4">
            {navLinks.map(({ href, icon, label }) => (
              <NavLink key={href} href={href} icon={icon} label={label} />
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 w-full md:pl-8">
          <h1 className="text-2xl font-bold text-gray-900">Hello, {username}!</h1>
          <p className="text-gray-600 mb-6">Welcome back! Here’s a quick overview of your dashboard.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard icon={<FaPlaneDeparture />} title="Upcoming Trips" value="3" />
            {userType === "admin" && (
              <StatCard icon={<FaUsers />} title="Total Users" value="1,200" />
            )}
            <StatCard icon={<FaDollarSign />} title="Total Spend" value="$5,230" />
            <StatCard icon={<FaCalendarAlt />} title="Recent Bookings" value="8" />
          </div>

          <Section title="Quick Actions">
            <div className="flex flex-wrap gap-4">
              {quickActions.map(({ href, label }) => (
                <ActionButton key={href} href={href} label={label} />
              ))}
            </div>
          </Section>

          <Section title="Recommended Destinations">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {destinations.map(({ title, image }) => (
                <DestinationCard key={title} title={title} image={image} />
              ))}
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
};

const NavLink = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-green-100 transition"
  >
    <span className="text-lg text-green-600">{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
    <div className="text-green-600 text-3xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const ActionButton = ({ href, label }) => (
  <Link
    href={href}
    className="bg-green-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
  >
    {label}
  </Link>
);

const DestinationCard = ({ title, image }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg group">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
      <h3 className="text-white text-lg font-bold">{title}</h3>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
    {children}
  </div>
);

const navLinks = [
  { href: "/dashboard", icon: <FaHome />, label: "Dashboard" },
  { href: "/bookings", icon: <FaBook />, label: "My Bookings" },
  { href: "/profile", icon: <FaUser />, label: "Profile" },
  { href: "/eco-tourism", icon: <FaLeaf />, label: "Eco-Tourism Overview" },
  { href: "/tours", icon: <FaMountain />, label: "Eco Tours" },
  { href: "/green-hotels", icon: <FaHotel />, label: "Green Hotels" },
  { href: "/sustainable-destinations", icon: <FaGlobe />, label: "Sustainable Destinations" },
  { href: "/change-password", icon: <FaLock />, label: "Change Password" },
  { href: "/accounts/login", icon: <FaSignOutAlt />, label: "Logout" },
];

const quickActions = [
  { href: "/book", label: "Book a Trip" },
  { href: "/bookings", label: "View My Bookings" },
  { href: "/profile", label: "Manage Profile" },
];

const destinations = [
  { title: "Paris, France", image: "/plane.jpg" },
  { title: "Bali, Indonesia", image: "/hero3.jpg" },
  { title: "Dubai, UAE", image: "/hero4.jpg" },
];

export default Dashboard;
