// "use client";
// import Translator from "@/components/layout/Translator";
// import { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaBell,
//   FaMapMarkedAlt,
//   FaUser,
//   FaSignOutAlt,
//   FaCalendarCheck,
//   FaClipboardList,
//   FaGlobeAmericas,
//   FaPlaneDeparture,
//   FaDollarSign,
//   FaHistory,
//   FaStar,
//   FaHome,
//   FaSave,
// } from "react-icons/fa";
// import Image from "next/image";
// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };

// const username = "Piroo";

// const destinations = [
//   {
//     name: "Kigali, Rwanda",
//     image: "https://source.unsplash.com/600x400/?bali",
//   },
//   {
//     name: "Harare, Zimbabwe",
//     image: "https://source.unsplash.com/600x400/?paris",
//   },
//   {
//     name: "Lagos, Nigeria",
//     image: "https://source.unsplash.com/600x400/?santorini",
//   },
// ];

// const navigation = [
//   { name: "Overview", href: "/accounts/dashboard", icon: <FaHome /> },
//   {
//     name: "Book a Tour",
//     href: "/accounts/dashboard/bookings",
//     icon: <FaCalendarCheck />,
//   },
//   {
//     name: "Manage Bookings",
//     href: "/accounts/dashboard/manage-bookings",
//     icon: <FaClipboardList />,
//   },
// ];

// export default function TravelDashboard() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] = useState(false);
//   const [savedTripsOpen, setSavedTripsOpen] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".profile-menu")) {
//         setProfileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 font-serif">
//       <nav className="bg-black py-2 px-6 shadow-md flex items-center justify-between relative h-24">
//         <div className="flex items-center space-x-4">
//           <button
//             className="text-white md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <FaTimes className="w-6 h-6" />
//             ) : (
//               <FaBars className="w-6 h-6" />
//             )}
//           </button>
//           <img
//             src="/logo.png"
//             alt="Ecotra"
//             width={150}
//             height={60}
//             className="object-contain"
//           />
//         </div>

//         <div className="hidden md:flex space-x-8 text-lg">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="flex items-center text-green-700 hover:text-gray-300 text-xl"
//             >
//               {item.icon} <span className="ml-2 text-blue-50">{item.name}</span>
//             </a>
//           ))}
//         </div>

//         <div className="flex items-center space-x-4 relative">
//           <button
//             className="text-white relative"
//             onClick={() => setSavedTripsOpen(true)}
//           >
//             <FaSave className="w-6 h-6" />
//           </button>
//           <button
//             className="text-white relative"
//             onClick={() => setNotificationsOpen(true)}
//           >
//             <FaBell className="w-6 h-6" />
//           </button>
//           <div className="relative profile-menu">
//             <img
//               src={user.imageUrl}
//               alt="User Profile"
//               width={40}
//               height={40}
//               className="rounded-full border-2 border-white cursor-pointer"
//               onClick={() => setProfileMenuOpen(!profileMenuOpen)}
//             />
//             {profileMenuOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
//                 <a
//                   href="/profile"
//                   className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   <FaUser className="mr-2 text-green-600" /> View Profile
//                 </a>
//                 <button className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                   <FaSignOutAlt className="mr-2 text-red-600" /> Log Out
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
   
//       {menuOpen && (
//   <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black  z-50 flex flex-col p-6">
//     <div className="flex justify-between items-center w-full px-6">
//       <Image 
//         src="/logo.png" 
//         alt="Logo" 
//         width={100} 
//         height={100} 
//         className="rounded-full border w-20 h-20 lg:w-32 lg:h-32" 
//       />
//       <button className="text-white" onClick={() => setMenuOpen(false)}>
//         <FaTimes className="w-6 h-6" />
//       </button>
//     </div>

//     {/* Navigation Links Centered */}
//     <div className="flex flex-1 flex-col justify-center items-center space-y-6 w-full">
//       {navigation.map((item) => (
//         <a
//           key={item.name}
//           href={item.href}
//           className="flex items-center text-white text-lg py-2"
//           onClick={() => setMenuOpen(false)}
//         >
//           {item.icon} <span className="ml-3">{item.name}</span>
//         </a>
//       ))}
//     </div>
//   </div>
// )}


//       <main className="p-8 space-y-16 bg-gray-50 min-h-screen">
//         <div className="text-3xl font-semibold py-2">
//           <h1>Hello {username} !</h1>
//           <p className="text-base font-light text-gray-600">
//             Here's an Overview of your Account
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
//           {[
//             {
//               icon: <FaPlaneDeparture className="text-blue-600 text-5xl" />,
//               title: "Upcoming Trips",
//               value: "3 trips planned",
//               details: "Next trip: Paris on March 15",
//               buttonText: "View Details",
//             },
          
//             {
//               icon: <FaHistory className="text-purple-600 text-5xl" />,
//               title: "Recent Bookings",
//               value: "Last trip: Bali",
//               details: "Hotel: The Grand Resort",
//               buttonText: "Manage Bookings",
//             },
//             {
//               icon: <FaStar className="text-yellow-500 text-5xl" />,
//               title: "My Eco-Points",
//               value: "1,250 reward points",
//               details: "Redeemable for hotel discounts",
//               buttonText: "Redeem Now",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-10 bg-whit rounded-3xl shadow-xl flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:shadow-2xl"
//             >
//               <div className="p-4 bg-gray-100 rounded-full">{item.icon}</div>
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 {item.title}
//               </h2>
//               <p className="text-lg font-medium text-gray-600">{item.value}</p>
//               <p className="text-gray-500">{item.details}</p>
//               <button className="mt-4 bg-green-600 text-black px-6 py-3 rounded-lg font-sans hover:bg-green-700 transition">
//                 {item.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>

    
//         <div className="p-10 rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Recent Activity
//           </h2>
//           <ul className="space-y-6">
//             {[
//               { activity: "Booked a trip to London", time: "2 hours ago" },
//               { activity: "Redeemed 500 reward points", time: "Yesterday" },
//               { activity: "Updated profile information", time: "3 days ago" },
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between text-gray-600 border-b pb-4 last:border-none"
//               >
//                 <span className="font-medium">{item.activity}</span>
//                 <span className="text-sm text-gray-500">{item.time}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//       {notificationsOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Notifications</h3>
//               <button
//                 onClick={() => setNotificationsOpen(false)}
//                 className="text-gray-600 hover:text-gray-900"
//               >
//                 <FaTimes className="size-5" />
//               </button>
//             </div>
//             <p className="text-gray-600">No new notifications</p>
//           </div>
//         </div>
//       )}
//       {savedTripsOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-semibold">Saved Trips</h2>
//               <button
//                 className="text-gray-600 hover:text-red-600"
//                 onClick={() => setSavedTripsOpen(false)}
//               >
//                 <FaTimes className="w-5 h-5" />
//               </button>
//             </div>

//             <ul className="space-y-2">
//               {destinations.map((dest, index) => (
//                 <li
//                   key={index}
//                   className="p-2 border-b last:border-none text-gray-800"
//                 >
//                   {dest.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import {
  FaCalendarCheck,
  FaClipboardList,
  FaWallet,
  FaMapMarkedAlt,
  FaStar,
  FaClock,
} from "react-icons/fa";

export default function DashboardPage() {
  const [user] = useState({
    name: "Piroo",
  });

  const stats = [
    { label: "Total Bookings", value: 12, icon: <FaClipboardList /> },
    { label: "Upcoming Tours", value: 3, icon: <FaMapMarkedAlt /> },
    { label: "My Eco-Points", value: "540", icon: <FaStar /> },
  ];

  const upcomingTours = [
    { id: 1, name: "Safari Adventure", date: "March 15, 2025", time: "10:00 AM" },
    { id: 2, name: "Island Getaway", date: "April 2, 2025", time: "2:00 PM" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className=" p-6 rounded-lg shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-green-800">Welcome, {user.name}!</h1>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4">
            <div className="text-green-500 text-3xl">{stat.icon}</div>
            <div>
              <p className="text-gray-600">{stat.label}</p>
              <h3 className="text-xl font-semibold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

  

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Upcoming Tours</h2>
        {upcomingTours.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {upcomingTours.map((tour) => (
              <li key={tour.id} className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">{tour.name}</h3>
                  <p className="text-gray-500">{tour.date} at {tour.time}</p>
                </div>
                <FaClock className="text-green-500 text-2xl" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No upcoming tours scheduled.</p>
        )}
      </div>
    </div>
  );
}



