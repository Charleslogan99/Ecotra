// "use client";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { FaBars, FaTimes, FaChartLine, FaUsers, FaClipboardList, FaSignOutAlt, FaGlobe, FaMoneyBillWave, FaCog, FaStar } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// const adminLinks = [
//   { href: "/admin", label: "Dashboard", icon: <FaChartLine />, isSideNav: true, isHeader: true },
//   { href: "/admin/bookings", label: "Bookings", icon: <FaClipboardList />, isSideNav: true, isHeader: true },
//   { href: "/admin/users", label: "Users", icon: <FaUsers />, isSideNav: true, isHeader: true },
//   { href: "/admin/manage-tours", label: "Tours", icon: <FaGlobe />, isSideNav: true, isHeader: true },
//   { href: "/admin/manage-payment", label: "Payments", icon: <FaMoneyBillWave />, isSideNav: true, isHeader: true },
//   { href: "/admin/reviews", label: "Reviews", icon: <FaStar />, isSideNav: true, isHeader: true },
//   { href: "/admin/settings", label: "Settings", icon: <FaCog />, isSideNav: true, isHeader: true },
// ];

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const pathname = usePathname(); // Get the current path
//   const [activeSection, setActiveSection] = useState(pathname); // Track the active section

//   const handleLinkClick = (href) => {
//     setActiveSection(href); // Set active section when a link is clicked
//     toggleSidebar(); // Close sidebar on mobile
//   };

//   return (
//     <>
//       {/* Sidebar */}
//       <div className={`fixed inset-0 bg-gray-900 text-white h-full w-full md:w-80 p-6 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 md:h-auto ${isOpen ? "block" : "hidden"}`}>
//         <div className="flex justify-between items-center mb-6 md:hidden">
//           <Image src="/logo.png" alt="Ecotra Logo" width={100} height={40} />
//           <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleSidebar} />
//         </div>
//         <ul className="space-y-4">
//           {adminLinks
//             .filter(link => link.isSideNav) // Only sidebar links
//             .map((item) => (
//               <li
//                 key={item.href}
//                 className={`p-3 flex items-center gap-2 rounded-md cursor-pointer ${activeSection === item.href ? "bg-green-700" : "hover:bg-green-700"}`}
//               >
//                 <Link href={item.href} className="flex items-center gap-2 w-full" onClick={() => handleLinkClick(item.href)}>
//                   {item.icon} {item.label}
//                 </Link>
//               </li>
//             ))}
//           <li className="p-3 flex items-center gap-2 cursor-pointer hover:bg-red-700 rounded-md">
//             <Link href="/logout" className="flex items-center gap-2 w-full" onClick={() => handleLinkClick("/logout")}>
//               <FaSignOutAlt /> Logout
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Backdrop (only for mobile) */}
//       {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
//     </>
//   );
// };

// const Header = ({ toggleSidebar }) => {
//   const [activeSection, setActiveSection] = useState(""); // Track active section for header links

//   const handleLinkClick = (href) => {
//     setActiveSection(href); // Set active section when a header link is clicked
//   };

//   return (
//     <header className="flex items-center justify-between shadow-sm px-4  bg-white">
//       <div className="flex items-center">
//         <Image src="/logo.png" alt="Ecotra Logo" width={100} height={100} />
//       </div>
//       <nav className="hidden lg:flex space-x-6">
//         {adminLinks
//           .filter(link => link.isHeader) // Only header links
//           .map((item) => (
//             <Link key={item.href} href={item.href} className={`text-gray-700 text-lg hover:text-blue-600 flex items-center gap-2 ${activeSection === item.href ? "text-blue-600" : ""}`} onClick={() => handleLinkClick(item.href)}>
//               {item.icon} {item.label}
//             </Link>
//           ))}
//       </nav>
//       <button className="lg:hidden text-gray-700" onClick={toggleSidebar}>
//         <FaBars className="text-2xl" />
//       </button>
//     </header>
//   );
// };

// const AdminLayout = ({ children }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

//   return (
//     <div className="flex h-full sm:h-screen">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col bg-gray-100  overflow-y-auto">
//         <Header toggleSidebar={toggleSidebar} />
//         <div className="mt-4 p-6">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaChartLine,
  FaClipboardList,
  FaUsers,
  FaSignOutAlt,
  FaCog,
  FaGlobe,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const adminNavigation = [
  { name: "Dashboard", href: "/admin", icon: <FaChartLine /> },
  { name: "Bookings", href: "/admin/bookings", icon: <FaClipboardList /> },
  { name: "Users", href: "/admin/users", icon: <FaUsers /> },
  { name: "Tours", href: "/admin/manage-tours", icon: <FaGlobe /> },
  { name: "Payments", href: "/admin/manage-payment", icon: <FaMoneyBillWave /> },
  { name: "Reviews", href: "/admin/reviews", icon: <FaStar /> },
  { name: "Settings", href: "/admin/settings", icon: <FaCog /> },
];

export default function AdminLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Update active section based on the current pathname
  useEffect(() => {
    // Update active section if the current path contains any of the hrefs
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
            {adminNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center text-lg font-medium transition-all duration-300 ${
                  pathname.includes(item.href)  // Check if pathname includes the href
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
            <Link href="/admin/auth">
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
              {adminNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center text-xl px-8 py-4 rounded-lg transition-all duration-300 ${
                    pathname.includes(item.href)  // Check if pathname includes the href
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
