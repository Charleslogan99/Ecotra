"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/others/ecotra1.jpg",
  "/images/others/ecotra2.jpg",
  "/images/others/ecotra3.jpg",
  "/images/others/ecotra12.jpg",
  "/images/others/ecotra15.jpg",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[65vh] lg:h-[90vh] sm:h-[50vh] overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images[currentIndex]}
          alt="Travel Destination"
          fill
          className="object-cover brightness-95"
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>

      {/* Hero Content */}
      <div className="absolute left-0 lg:left-20 inset-0 flex flex-col justify-center items-start text-white z-10 px-6 sm:px-10 lg:px-24 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Explore the Best <br /> Destinations in Africa with Us
        </h1>
        <p className="text-lg sm:text-sm font-medium opacity-90 mt-4 leading-relaxed italic">
        Hello, Habari, Ndeewo, Sawubona, Mhoro, Molo!
        </p>
        <p className="text-lg sm:text-xl font-medium opacity-90 mt-4 leading-relaxed">
          We offer unique travel experiences that suit your interests and
          preferences. Discover Africa as an ecotourist—Explore, Enjoy, and
          Conserve.
        </p>
        <Link
          href="/destinations"
          className="mt-6 inline-block bg-green-600 text-black px-8 py-4 rounded-xl font-semibold text-lg sm:text-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-2xl"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}