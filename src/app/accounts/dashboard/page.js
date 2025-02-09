"use client";

import { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import {
  FaBars, FaTimes, FaPlaneDeparture, FaUsers, FaDollarSign,
  FaCalendarAlt, FaHome, FaBook, FaUser, FaLeaf, FaMountain,
  FaGlobe, FaLock, FaSignOutAlt, FaTrophy
} from "react-icons/fa";

const Translator = dynamic(() => import("@/components/layout/Translator"), { ssr: false });

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const username = "Piroo";

  const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);

  const navLinks = useMemo(() => ([
    { href: "/dashboard", icon: FaHome, label: "Dashboard" },
    { href: "/bookings", icon: FaBook, label: "My Bookings" },
    { href: "/profile", icon: FaUser, label: "Profile" },
    { href: "/eco-tourism", icon: FaLeaf, label: "Eco-Tourism" },
    { href: "/tours", icon: FaMountain, label: "Eco Tours" },
    { href: "/sustainable-destinations", icon: FaGlobe, label: "Destinations" },
    { href: "/change-password", icon: FaLock, label: "Change Password" },
    { href: "/accounts/login", icon: FaSignOutAlt, label: "Logout" },
  ]), []);

  const quickActions = useMemo(() => ([
    { href: "/book", label: "Book a Trip" },
    { href: "/bookings", label: "View My Bookings" },
    { href: "/profile", label: "Manage Profile" },
  ]), []);

  const destinations = useMemo(() => ([
    { title: "Paris, France", image: "/plane.jpg" },
    { title: "Bali, Indonesia", image: "/hero3.jpg" },
    { title: "Dubai, UAE", image: "/hero4.jpg" },
  ]), []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 w-full z-40 md:px-10 h-16">
        <Link href="/accounts/dashboard">
          <Image src="/logo.png" alt="Ecotra Logo" width={150} height={50} priority />
        </Link>
        <button onClick={toggleSidebar} className="md:hidden text-2xl text-gray-700 hover:text-green-600 transition">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <div className="flex flex-1 mt-16">
        <aside className={`bg-white shadow-lg p-6 transition-transform duration-300 fixed top-16 left-0 w-64 h-full z-10 md:static md:w-1/5 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 overflow-y-auto`} style={{ maxHeight: "calc(100vh - 4rem)" }}>
          <Translator />
          <nav className="mt-6 space-y-4">
            {navLinks.map(({ href, icon, label }) => (
              <NavLink key={href} href={href} icon={icon} label={label} />
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8 w-full md:pl-12">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {username}! 👋</h1>
          <p className="text-gray-600 mb-8">Here's a quick overview of your dashboard.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={FaPlaneDeparture} title="Upcoming Trips" value="3" />
            <StatCard icon={FaDollarSign} title="Total Spend" value="$5,230" />
            <StatCard icon={FaCalendarAlt} title="Recent Bookings" value="8" />
            <StatCard icon={FaTrophy} title="Points Gained" value="105" />
          </div>

          <Section title="Quick Actions">
            <div className="flex flex-wrap gap-4">
              {quickActions.map(({ href, label }) => (
                <ActionButton key={href} href={href} label={label} />
              ))}
            </div>
          </Section>

          <Section title="Recommended Destinations">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

const NavLink = memo(({ href, icon: Icon, label }) => (
  <Link href={href} className="flex items-center gap-4 p-3 rounded-lg text-gray-700 hover:bg-green-100 transition">
    <span className="p-2 bg-green-100 rounded-lg shadow-md">
      <Icon className="text-2xl text-green-600" />
    </span>
    <span className="font-medium">{label}</span>
  </Link>
));

const StatCard = memo(({ icon: Icon, title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6 hover:shadow-lg transition">
    <span className="p-3 bg-green-100 rounded-full shadow">
      <Icon className="text-green-600 text-4xl" />
    </span>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
));

const ActionButton = memo(({ href, label }) => (
  <Link href={href} className="bg-green-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
    {label}
  </Link>
));

const DestinationCard = memo(({ title, image }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg group">
    <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
      <h3 className="text-white text-lg font-bold">{title}</h3>
    </div>
  </div>
));

const Section = memo(({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
    {children}
  </div>
));

export default Dashboard;
