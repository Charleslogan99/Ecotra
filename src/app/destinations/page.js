"use client";
import { useState, useMemo } from "react";
import { useDebounce } from "use-debounce";

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500); // Debounce after 500ms

  const destinations = useMemo(() => [
    {
      name: "Lagos, Nigeria",
      description: "The city of lights, known for its art, fashion, and culture.",
      imageUrl: "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/paris",
    },
    {
      name: "Tokyo",
      description: "A bustling metropolis with modern and traditional architecture.",
      imageUrl: "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/tokyo",
    },
    {
      name: "New York",
      description: "The city that never sleeps, home to iconic landmarks and theaters.",
      imageUrl: "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/nyc",
    },
    {
      name: "Sydney",
      description: "Famous for its stunning opera house and beautiful beaches.",
      imageUrl: "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/sydney",
    },
    {
      name: "Dubai",
      description: "A city of innovation, luxury shopping, and towering skyscrapers.",
      imageUrl: "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/dubai",
    },
    {
      name: "London",
      description: "Home to history, culture, and world-famous landmarks like Big Ben.",
      imageUrl: "https://img.freepik.com/free-photo/view-from-rooftop-china-town-middle-city-bangkok-thailand_231208-1544.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid",
      link: "/destinations/london",
    },
  ], []);

  const filteredDestinations = useMemo(
    () => destinations.filter(destination =>
      destination.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    ),
    [debouncedSearch, destinations]
  );

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <img
         src="https://img.freepik.com/premium-photo/travel-blogger-flat-lay-composition-with-vintage-camera-black-background-space-text_495423-95161.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid"
          alt="Hero Image"
          className="w-full h-[600px] object-cover shadow-lg rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Explore Our Destinations
          </h1>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <input
          type="text"
          className="w-full sm:w-1/2 p-5 rounded-full border-2 border-gray-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-300 ease-in-out text-lg"
          placeholder="Search destinations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-12 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredDestinations.map((destination) => (
          <div
            key={destination.name}
            className="relative rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={destination.imageUrl}
              alt={destination.name}
              loading="lazy"
              className="w-full h-[320px] object-cover transition-all duration-300 group-hover:opacity-90 rounded-t-3xl"
            />

            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl sm:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-center px-4">{destination.name}</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent rounded-b-3xl transition-all duration-300 group-hover:bg-opacity-80">
              <p className="text-white text-sm sm:text-base">
                {destination.description}
              </p>
            </div>

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
