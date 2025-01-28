"use client";
import { useState } from "react";

export default function Destinations() {
  const [search, setSearch] = useState("");

  // Sample destinations data
  const destinations = [
    {
      name: "Lagos, Nigeria",
      description:
        "The city of lights, known for its art, fashion, and culture.",
      imageUrl:
        "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/paris",
    },
    {
      name: "Tokyo",
      description:
        "A bustling metropolis with modern and traditional architecture.",
      imageUrl:
        "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/tokyo",
    },
    {
      name: "New York",
      description:
        "The city that never sleeps, home to iconic landmarks and theaters.",
      imageUrl:
        "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/nyc",
    },
    {
      name: "Sydney",
      description: "Famous for its stunning opera house and beautiful beaches.",
      imageUrl:
        "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/sydney",
    },
    {
      name: "Dubai",
      description:
        "A city of innovation, luxury shopping, and towering skyscrapers.",
      imageUrl:
        "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",

      link: "/destinations/dubai",
    },
    {
      name: "London",
      description:
        "Home to history, culture, and world-famous landmarks like Big Ben.",
      imageUrl:
        "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",

      link: "/destinations/london",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/green-plane-sustainable-energy-concept_23-2151582545.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid"
          alt="Hero Image"
          className="w-full h-[500px] object-cover shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Explore Our Destinations
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          className="w-full sm:w-1/2 p-4 m-4 rounded-lg border-2 border-gray-300 shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300 ease-in-out"
          placeholder="Search destinations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Featured Destinations */}
      <div className="mt-12 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {destinations
          .filter((destination) =>
            destination.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((destination) => (
            <div
              key={destination.name}
              className="relative rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Destination Image */}
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-[280px] object-cover transition-all duration-300 group-hover:opacity-90 rounded-t-3xl"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Title Text */}
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl sm:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center px-4">{destination.name}</p>
              </div>

              {/* Description */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent rounded-b-3xl transition-all duration-300 group-hover:bg-opacity-80">
                <p className="text-white text-sm sm:text-base">
                  {destination.description}
                </p>
              </div>

              {/* Learn More Link */}
              <a
                href={destination.link}
                className="absolute bottom-4 right-4 text-indigo-500 font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
