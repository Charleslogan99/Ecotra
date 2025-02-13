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



// export function PopularDestinations() {
//   const destinations = [
//     {
//       id: 1,
//       name: "Algeria",
//       description:
//         "Discover the rich history and diverse landscapes of Algeria, from the Sahara Desert to the Mediterranean coast.",
//       images: [
//         "https://img.freepik.com/free-photo/beautiful-shot-hassan-tower-rabat-morocco_181624-44514.jpg?ga=GA1.1.640371070.1737806957&semt=ais_incoming",
//       ],
//     },
//     {
//       id: 2,
//       name: "Angola",
//       description:
//         "Experience the stunning waterfalls, wildlife, and vibrant culture of Angola.",
//       images: [
//         "https://img.freepik.com/free-photo/breathtaking-view-waterfall-surrounded-by-lush-greenery-sunlight_181624-13210.jpg",
//       ],
//     },
//     {
//       id: 3,
//       name: "Botswana",
//       description:
//         "Explore the natural beauty of Botswana, home to the Okavango Delta and abundant wildlife.",
//       images: [
//         "https://img.freepik.com/free-photo/elephants-savannah_167946-123.jpg",
//       ],
//     },
//     {
//       id: 4,
//       name: "Cape Verde",
//       description:
//         "Relax on the beautiful beaches of Cape Verde and enjoy its vibrant music scene.",
//       images: [
//         "https://img.freepik.com/free-photo/high-angle-shot-boats-sea-cityscape_181624-44810.jpg",
//       ],
//     },
//     {
//       id: 5,
//       name: "Egypt",
//       description:
//         "Uncover the mysteries of ancient Egypt, from the pyramids to the Nile River.",
//       images: [
//         "https://img.freepik.com/free-photo/pyramids-giza_181624-26310.jpg",
//       ],
//     },
//     {
//       id: 6,
//       name: "Gabon",
//       description:
//         "Experience the lush rainforests and stunning coastline of Gabon.",
//       images: [
//         "https://img.freepik.com/free-photo/tropical-beach-landscape_181624-40400.jpg",
//       ],
//     },
//     {
//       id: 7,
//       name: "Ghana",
//       description:
//         "Discover the cultural heritage and beautiful beaches of Ghana.",
//       images: [
//         "https://img.freepik.com/premium-photo/aerial-drone-photo-city-bangkok-thailand-sunset_51530-1312.jpg",
//       ],
//     },
//     {
//       id: 8,
//       name: "Kenya",
//       description:
//         "Embark on a safari adventure in Kenya and witness its incredible wildlife.",
//       images: [
//         "https://img.freepik.com/free-photo/beautiful-bildings-with-lights-hong-kong_181624-44526.jpg",
//       ],
//     },
//     {
//       id: 9,
//       name: "Malawi",
//       description:
//         "Enjoy the tranquil beauty of Lake Malawi and the warm hospitality of its people.",
//       images: [
//         "https://img.freepik.com/free-photo/lake-sunset_181624-45120.jpg",
//       ],
//     },
//     {
//       id: 10,
//       name: "Mauritius",
//       description:
//         "Relax in paradise on the breathtaking beaches of Mauritius.",
//       images: [
//         "https://img.freepik.com/free-photo/tropical-paradise-island_181624-13300.jpg",
//       ],
//     },
//     {
//       id: 11,
//       name: "Morocco",
//       description:
//         "Experience the bustling souks, stunning deserts, and rich culture of Morocco.",
//       images: [
//         "https://img.freepik.com/free-photo/marrakech-market-morocco_181624-14040.jpg",
//       ],
//     },
//     {
//       id: 12,
//       name: "Mozambique",
//       description:
//         "Explore the pristine beaches and marine life of Mozambique.",
//       images: [
//         "https://img.freepik.com/free-photo/beach-dunes-landscape_181624-21000.jpg",
//       ],
//     },
//     {
//       id: 13,
//       name: "Namibia",
//       description:
//         "Marvel at the stunning dunes of the Namib Desert and the unique landscapes of Namibia.",
//       images: [
//         "https://img.freepik.com/free-photo/desert-sand-dunes-namibia_181624-27100.jpg",
//       ],
//     },
//     {
//       id: 14,
//       name: "Nigeria",
//       description:
//         "Discover Nigeria's bustling cities, rich culture, and beautiful landscapes.",
//       images: [
//         "https://img.freepik.com/premium-photo/aerial-view-victoria-island-lagos-nigeria_662214-312907.jpg",
//       ],
//     },
//     {
//       id: 15,
//       name: "Rwanda",
//       description:
//         "Explore the breathtaking landscapes and gorilla trekking experiences in Rwanda.",
//       images: [
//         "https://img.freepik.com/free-photo/cityscape-bucharest-road-with-moving-cars-multiple-residential-buildings-clear-sky-view-from-drone-romania_1268-16363.jpg",
//       ],
//     },
//     {
//       id: 16,
//       name: "Sao Tome and Principe",
//       description:
//         "Relax on the serene islands of Sao Tome and Principe, a hidden gem in Africa.",
//       images: [
//         "https://img.freepik.com/free-photo/tropical-island-view_181624-40010.jpg",
//       ],
//     },
//     {
//       id: 17,
//       name: "South Africa",
//       description:
//         "Experience the diverse landscapes and vibrant culture of South Africa.",
//       images: [
//         "https://img.freepik.com/premium-photo/scenic-view-sea-against-clear-blue-sky_1048944-25096874.jpg",
//       ],
//     },
//     {
//       id: 18,
//       name: "Tanzania",
//       description:
//         "Discover the beauty of Tanzania, home to Mount Kilimanjaro and Serengeti National Park.",
//       images: [
//         "https://img.freepik.com/free-photo/giraffes-herd-savannah_155003-6490.jpg",
//       ],
//     },
//     {
//       id: 19,
//       name: "Tunisia",
//       description:
//         "Experience the rich history and Mediterranean charm of Tunisia.",
//       images: [
//         "https://img.freepik.com/free-photo/mediterranean-coast-tunisia_181624-27000.jpg",
//       ],
//     },
//     {
//       id: 20,
//       name: "Uganda",
//       description:
//         "Explore the diverse wildlife and stunning landscapes of Uganda.",
//       images: [
//         "https://img.freepik.com/premium-photo/city-waterfront-against-cloudy-sky_1048944-30428834.jpg",
//       ],
//     },
//     {
//       id: 21,
//       name: "Zambia",
//       description:
//         "Visit Zambia, home to the breathtaking Victoria Falls and abundant wildlife.",
//       images: [
//         "https://img.freepik.com/free-photo/waterfall-middle-cliffs-with-trees-plants-sunny-day_181624-2315.jpg",
//       ],
//     },
//     {
//       id: 22,
//       name: "Zimbabwe",
//       description:
//         "Experience the natural beauty and rich culture of Zimbabwe.",
//       images: [
//         "https://img.freepik.com/premium-photo/cityscape-view-point-pattaya-beaches-thailand_53526-260.jpg",
//       ],
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const destinationInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
//       setCurrentImageIndex(0);
//     }, 10000);

//     return () => clearInterval(destinationInterval);
//   }, [destinations.length]);
//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setCurrentImageIndex((prevImageIndex) => {
//         const images = destinations[currentIndex]?.images || [];
//         return (prevImageIndex + 1) % images.length;
//       });
//     }, 5000);

//     return () => clearInterval(imageInterval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
//     setCurrentImageIndex(0);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length
//     );
//     setCurrentImageIndex(0);
//   };

//   const currentDestination = destinations[currentIndex];
//   const currentImage =
//     currentDestination.images[currentImageIndex] ||
//     currentDestination.images[0];

//   return (
//     <div className="py-16 sm:py-24 lg:py-32 bg-zinc-5">
//       <div className="mx-auto max-w-screen-2xl px-8 text-center text-white">
//         <h1 className="text-5xl font-serif font-semibold tracking-tight text-black">
//           Our Top Eco-Destinations
//         </h1>
//         <p className="mt-4 text-lg sm:text-xl text-black font-serif opacity-80">
//           Explore the beauty of Africa and experience it's rich diversity spread
//           across various Countries
//         </p>
//       </div>

//       <div className="mx-auto max-w-screen-xl px-8 mt-16 lg:mt-24">
//         <div className="relative flex flex-col lg:flex-row items-center justify-between bg-black text-white py-8 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-32 rounded-3xl shadow-2xl transition-transform duration-300 ease-in-out transform hovr:scale-105">
//           <div className="text-center lg:text-left lg:w-1/2 space-y-6">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
//               {currentDestination.name}
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-400">
//               {currentDestination.description}
//             </p>
//             <div className="mt-8 flex justify-center lg:justify-start gap-x-8">
//               <button
//                 onClick={goToPrevious}
//                 className="rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={goToNext}
//                 className="rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//           <div className="relative w-full max-w-full mx-auto lg:w-1/2 mt-8 lg:mt-0 h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl">
//             <img
//               src={currentImage}
//               alt={currentDestination.name}
//               className="w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-500 ease-in-out transform hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }