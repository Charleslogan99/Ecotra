"use client";
import { useState, useMemo } from "react";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import { PopularDestinations } from "../page";

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500); 

  const destinations = useMemo(
    () => [
      { name: "Lagos, Nigeria", description: "The city of lights, known for its art, fashion, and culture.", imageUrl: "/images/lagos.jpg", link: "/destinations/lagos" },
      { name: "Tokyo", description: "A bustling metropolis with modern and traditional architecture.", imageUrl: "/images/tokyo.jpg", link: "/destinations/tokyo" },
      { name: "New York", description: "The city that never sleeps, home to iconic landmarks and theaters.", imageUrl: "/images/nyc.jpg", link: "/destinations/nyc" },
      { name: "Sydney", description: "Famous for its stunning opera house and beautiful beaches.", imageUrl: "/images/sydney.jpg", link: "/destinations/sydney" },
      { name: "Dubai", description: "A city of innovation, luxury shopping, and towering skyscrapers.", imageUrl: "/images/dubai.jpg", link: "/destinations/dubai" },
      { name: "London", description: "Home to history, culture, and world-famous landmarks like Big Ben.", imageUrl: "/images/london.jpg", link: "/destinations/london" },
    ],
    []
  );

  const filteredDestinations = useMemo(
    () =>
      destinations.filter((destination) =>
        destination.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      ),
    [debouncedSearch, destinations]
  );

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="relative">
        <img
          src="/images/others/ecotra5.jpg"
          alt="Explore Destinations"
          className="w-full h-[600px] object-cover shadow-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Explore Our Destinations
          </h1>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <input
          type="text"
          className="w-full sm:w-1/2 p-4 rounded-xl border-2 border-gray-300 shadow-md focus:outline-none focus:ring-1 focus:ring-green-500 text-lg"
          placeholder="Search destinations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* <div className="mt-12 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredDestinations.map(({ name, description, imageUrl, link }) => (
          <div
            key={name}
            className="relative rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={imageUrl}
              alt={name}
              loading="lazy"
              className="w-full h-[320px] object-cover group-hover:opacity-90 rounded-t-3xl"
            />

            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl sm:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-center px-4">{name}</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent rounded-b-3xl transition-all duration-300">
              <p className="text-white text-sm sm:text-base">{description}</p>
            </div>

            <Link href={link}>
              <span className="absolute bottom-4 right-4 text-indigo-500 font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </Link>
          </div>
        ))}
      </div> */}
      <PopularDestinations />
    </div>
  );
}
