"use client";
import { useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Algeria",
    image: "/images/destinations/Algeria.avif",
    details:
      "Discover the vast Sahara, ancient Roman ruins, and bustling markets in Algiers.",
    link: "/destinations/algeria",
  },
  {
    name: "Angola",
    image: "/images/destinations/Angola.avif",
    details:
      "Experience Angola’s vibrant culture, stunning beaches, and rich history in Luanda.",
    link: "/destinations/angola",
  },
  {
    name: "Botswana",
    image: "/images/destinations/Botswana.avif",
    details:
      "A unique inland delta teeming with wildlife, perfect for safari adventures.",
    link: "/destinations/botswana",
  },
  {
    name: "Cape Verde",
    image: "/images/destinations/Capeverde.avif",
    details:
      "Enjoy Cape Verde’s capital with its beautiful beaches, Creole culture, and music.",
    link: "/destinations/cape-verde",
  },
  {
    name: "Egypt",
    image: "/images/destinations/Egypt.avif",
    details:
      "Explore the Great Pyramids, Sphinx, and the rich history of ancient Egypt.",
    link: "/destinations/egypt",
  },
  {
    name: "Gabon",
    image: "/images/destinations/Gabon.avif",
    details:
      "Discover Gabon’s rainforests, national parks, and beautiful Atlantic coastline.",
    link: "/destinations/gabon",
  },
  {
    name: "Ghana",
    image: "/images/destinations/Ghana.avif",
    details:
      "Experience Ghana’s warm hospitality, cultural heritage, and vibrant nightlife.",
    link: "/destinations/ghana",
  },
  {
    name: "Kenya",
    image: "/images/destinations/Kenya.avif",
    details:
      "A world-renowned safari destination with breathtaking wildlife migrations.",
    link: "/destinations/kenya",
  },
  {
    name: "Malawi",
    image: "/images/destinations/Malawi.avif",
    details:
      "A tropical paradise with crystal-clear waters and diverse aquatic life.",
    link: "/destinations/malawi",
  },
  {
    name: "Mauritius",
    image: "/images/destinations/Mauritius.avif",
    details:
      "A beautiful island nation known for its beaches, lagoons, and diverse culture.",
    link: "/destinations/mauritius",
  },
  {
    name: "Morocco",
    image: "/images/destinations/Morocco.avif",
    details:
      "Explore colorful souks, palaces, and gardens in Morocco’s enchanting city.",
    link: "/destinations/morocco",
  },
  {
    name: "Mozambique",
    image: "/images/destinations/Mozambique.avif",
    details: "A paradise of white sandy beaches and marine biodiversity.",
    link: "/destinations/mozambique",
  },
  {
    name: "Namibia",
    image: "/images/destinations/Namibia.jpg",
    details: "Discover the striking red dunes of the Namib Desert.",
    link: "/destinations/namibia",
  },
  {
    name: "Nigeria",
    image: "/images/destinations/Nigeria.jpg",
    details:
      "Experience Nigeria’s bustling metropolis with its rich culture and nightlife.",
    link: "/destinations/nigeria",
  },
  {
    name: "Rwanda",
    image: "/images/destinations/Rwanda.avif",
    details:
      "A clean and green city, known for its history, nature, and gorilla trekking.",
    link: "/destinations/rwanda",
  },
  {
    name: "São Tomé and Príncipe",
    image: "/images/destinations/Saotome.avif",
    details:
      "A hidden gem with stunning beaches, forests, and cocoa plantations.",
    link: "/destinations/sao-tome",
  },
  {
    name: "South Africa",
    image: "/images/destinations/Southafrica.avif",
    details:
      "A breathtaking coastal city with Table Mountain and vibrant culture.",
    link: "/destinations/south-africa",
  },
  {
    name: "Tanzania",
    image: "/images/destinations/Tanzania.avif",
    details: "One of Africa’s greatest wildlife conservation areas.",
    link: "/destinations/tanzania",
  },
  {
    name: "Tunisia",
    image: "/images/destinations/Tunisia.jpg",
    details: "A blend of ancient ruins and Mediterranean charm.",
    link: "/destinations/tunisia",
  },
  {
    name: "Uganda",
    image: "/images/destinations/Uganda.avif",
    details: "The heart of Uganda’s cultural and natural attractions.",
    link: "/destinations/uganda",
  },
  {
    name: "Zambia",
    image: "/images/destinations/Zambia.avif",
    details: "One of the world’s largest and most spectacular waterfalls.",
    link: "/destinations/zambia",
  },
  {
    name: "Zimbabwe",
    image: "/images/destinations/Zimbabwe.avif",
    details: "Zimbabwe’s largest national park, home to diverse wildlife.",
    link: "/destinations/zimbabwe",
  },
];

export function PopularDestinations() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-screen-xl mx-auto px-6 py-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Popular Destinations
        </h2>
        <div className="flex gap-4">
          <button
            className="bg-gray-950 text-green-500 p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
            onClick={() => handleScroll("left")}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="bg-gray-950 text-green-500 p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
            onClick={() => handleScroll("right")}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {destinations.map((destination, index) => (
            <div key={index} className="w-full sm:w-[50%] lg:w-[25%] flex-shrink-0">

              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DestinationCard = ({ destination }) => {
  return (
    <Link href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`} passHref>
      <div className="h-[450px] flex flex-col rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105">
        <Image
          src={destination.image}
          alt={destination.name}
          width={400}
          height={350}
          className="object-cover w-full h-[320px]"
          priority={true}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{destination.name}</h2>
          <p className="text-gray-600">{destination.details}</p>
        </div>
      </div>
    </Link>
  );
};

export default function Destinations() {
 

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="relative">
        <Image
          src="/images/others/ecotra5.jpg"
          width={400}
          height={100}
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

      <PopularDestinations />
    </div>
  );
}
