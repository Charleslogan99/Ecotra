"use client";
import { useState, useEffect, useMemo } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const tours = [
  {
    id: 1,
    name: "Safari Adventure in Kenya",
    location: "Kenya",
    price: "$1200",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    image: "/images/tourimages/tour2.jpg",
  },
  {
    id: 2,
    name: "Bali Paradise Escape",
    location: "Indonesia",
    price: "$850",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    image: "/images/tourimages/tour3.jpg",
  },
  {
    id: 3,
    name: "Bali Paradise Escape",
    location: "Indonesia",
    price: "$850",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    image: "/images/tourimages/tour3.jpg",
  },
  {
    id: 4,
    name: "Bali Paradise Escape",
    location: "Indonesia",
    price: "$850",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    image: "/images/tourimages/tour3.jpg",
  },
];

export function AllTours() {
  const [sortBy, setSortBy] = useState("");

  const sortedTours = useMemo(() => {
    let sorted = [...tours];
    if (sortBy === "price_low_high") {
      sorted.sort((a, b) => parseFloat(a.price.replace(/[$,]/g, "")) - parseFloat(b.price.replace(/[$,]/g, "")));
    } else if (sortBy === "price_high_low") {
      sorted.sort((a, b) => parseFloat(b.price.replace(/[$,]/g, "")) - parseFloat(a.price.replace(/[$,]/g, "")));
    } else if (sortBy === "rating_low_high") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "rating_high_low") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  }, [sortBy]);

  return (
    <section className="max-w-7xl h-screen mx-auto py-32 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-4xl font-bold text-gray-800">Popular Tours</h2>
        <select
          className="mt-4 md:mt-0 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by:</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
          <option value="rating_low_high">Rating: Low to High</option>
          <option value="rating_high_low">Rating: High to Low</option>
        </select>
      </div>

      <div className="relative mt-8">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {sortedTours.map((tour) => (
           <div
           key={tour.id}
           className="min-w-[320px] md:min-w-[400px] bg-whit border border-gray-200 rounded-3xl shadow-l hover:shadow-2xl transition-transform transform hover:scale-[1.03] overflow-hidden"
         >
           {/* Image with Overlay */}
           <div className="relative">
             <img
               src={tour.image}
               alt={tour.name}
               loading="lazy"
               className="w-full h-56 md:h-64 object-cover rounded-t-3xl"
             />
             <div className="absolute inset-0 bg-black bg-opacity-10 rounded-t-3xl"></div>
           </div>
         
           {/* Tour Details */}
           <div className="p-6 space-y-3">
             <h3 className="text-xl font-bold text-gray-800">{tour.name}</h3>
             
             {/* Location */}
             <p className="flex items-center text-gray-500 text-sm">
               📍 {tour.location}
             </p>
         
             {/* Price */}
             <p className="text-2xl font-semibold text-green-600">{tour.price}</p>
         
             {/* Duration */}
             <p className="flex items-center text-gray-500 text-sm">
               ⏳ {tour.duration}
             </p>
         
             {/* Rating */}
             <p className="flex items-center text-yellow-500 font-semibold text-sm">
               <FaStar className="mr-1 text-lg" /> {tour.rating} / 5
             </p>
         
             {/* Book Now Button */}
             <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition-transform transform hover:scale-105">
               Book Now
             </button>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
}

const heroImages = [
  "/images/others/ecotra17.jpg",
  "/images/others/ecotra18.jpg",
  "/images/others/ecotra19.jpg",
  "/images/others/ecotra20.jpg",
];

export default function Tours() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-[60vh] lg:h-[100vh] w-full">
        <Image
          src={heroImages[currentImage]}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
        </div>
      </section>
      <section>
        <AllTours />
      </section>
      <section className="max-w-9xl mx-auto py-20 px-6 bg-zinc-900 text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Special Offers & Discounts</h2>
        <p className="text-gray-400 text-lg">Save up to 30% on selected tours! Limited time offers available.</p>
        <button className="mt-6 bg-green-600 text-black px-6 py-3 rounded-lg hover:bg-green-700 transition">
          View Deals
        </button>
      </section>
    </div>
  );
}
