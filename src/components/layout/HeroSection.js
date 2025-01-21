"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
    "/hero6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex transition-transform duration-700 ease-in-out">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            <Image
              src={image}
              alt={`Travel Image ${index + 1}`}
              width={1600}
              height={900}
              className="object-cover w-full h-full opacity-100"
              priority
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-start items-center text-left text-white z-10 px-4 sm:px-6 lg:px-16 xl:px-24 lg:pl-32">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-6xl font-serif leading-tight tracking-tight sm:leading-tight">
            Explore Your Dream Destinations with Us
          </h1>
          <p className="text-lg sm:text-xl font-medium">
            We offer customized travel experiences that cater to your
            preferences. Discover unforgettable destinations with ease and
            luxury.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Arrow Down Icon */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div> */}
     
    </section>
  );
}



export  function SecondSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
          Unlock the Adventure of a Lifetime
        </h2>
        <p className="text-green-600 text-xl sm:text-lg mb-12">
          Join thousands of satisfied travelers who’ve experienced the best of
          customized travel. From exotic destinations to curated experiences,
          we’ve got it all covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* First Feature Card */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Personalized Itineraries
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you're into adventure or relaxation, we’ll customize your
              trip to match your needs and interests. You decide the pace!
            </p>
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300">
              Learn More
            </div>
          </div>

          {/* Second Feature Card */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Expert Guides
            </h3>
            <p className="text-gray-600 mb-6">
              Our local guides know the hidden gems and will ensure you have
              the best experience possible, every step of the way.
            </p>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300">
              Learn More
            </div>
          </div>

          {/* Third Feature Card */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Stress-Free Travel
            </h3>
            <p className="text-gray-600 mb-6">
              From airport transfers to bookings, we handle all the details so
              you can focus on enjoying your vacation without the hassle.
            </p>
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300">
              Learn More
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-black text-lg sm:text-xl font-semibold mb-6">
            Ready to get started on your next adventure?
          </p>
          <a
            href="/sign-up"
            className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Sign Up Today
          </a>
        </div>
      </div>
    </section>
  );
}

export function KeyFeaturesSection() {
    return (
        <section className="bg-gray-100 py-20 px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-800 mb-10">
      Why Travel with Ecotra?
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-green-600 mb-4">
          Sustainable Tourism
        </h4>
        <p className="text-gray-600">
          A portion of our revenue directly supports conservation projects,
          ensuring that your travel positively impacts the environment and local
          communities.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-green-600 mb-4">
          Diverse Destinations
        </h4>
        <p className="text-gray-600">
          From the savannahs of Kenya to the beaches of Cape Verde, explore
          Africa’s hidden treasures with guided tours and customized itineraries.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-green-600 mb-4">
          Expert Partnerships
        </h4>
        <p className="text-gray-600">
          Travel with confidence through partnerships with leading airlines,
          embassies, and NGOs, ensuring a seamless experience from start to
          finish.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}