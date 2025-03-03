"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Newsletter from "@/components/layout/Newsletter";
import Image from "next/image";
import { Stats } from "@/components/layout/Stats";
import { Testimonials } from "@/components/layout/Testimonial";
import Services from "@/components/layout/Services";
import { HeroSection } from "@/components/layout/HeroSection";
import { SpecialTours } from "@/components/layout/SpecialTours";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function KeyFeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const features = [
    {
      id: 1,
      icon: "🌱",
      title: "Sustainable Tourism",
      text: "A portion of our revenue directly supports conservation projects, ensuring your travel positively impacts the environment and local communities.",
    },
    {
      id: 2,
      icon: "🌍",
      title: "Diverse Destinations",
      text: "From the savannahs of Kenya to the beaches of Cape Verde, explore Africa’s hidden treasures with guided tours and customized itineraries.",
    },
    {
      id: 3,
      icon: "🤝",
      title: "Expert Partnerships",
      text: "Travel with confidence through partnerships with leading airlines, embassies, and NGOs, ensuring a seamless experience from start to finish.",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-green-900 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <span className="text-green-600 text-3xl font-bold">
                  {feature.icon}
                </span>
              </div>
              <h4 className="text-2xl font-serif text-center text-green-700 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="bg-black py-24  text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-4xl font-extrabold mb-6 text-center leading-tight tracking-wide">
          Ready to Explore Africa Responsibly?
        </h3>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Join us in promoting sustainable tourism while enjoying the beauty of
          Africa. Let’s conserve nature and uplift communities together.
        </p>
        <div className="flex items-center justify-center">
          <a
            href="/accounts/sign-up"
            className="bg-gradient-to-r from-green-600 to-green-500 text-gray-950 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-5xl font-bold text-gray-900 mb-4 md:text-6xl">
          Our Partner Airlines
        </h2>
        <p className="text-lg mb-8">
          When you travel with us, you get the best deals in terms of flight
          prices. Ecotra believes only in providing outstanding services, and
          our partner airlines ensure you get the best travel experience.
        </p>
        <div
          className="mx-auto grid max-w-lg grid-cols-2 items-center gap-12 sm:max-w-xl sm:grid-cols-3 
                        lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-x-16 mt-12"
        >
          {[
            {
              alt: "Air Peace",
              src: "https://flyairpeace.com/wp-content/uploads/2024/05/logo.webp",
            },
            {
              alt: "Ethiopian Airlines",
              src: "https://www.ethiopianairlines.com/images/default-source/default-album/icons/et-logo.png",
            },
            {
              alt: "Zambia Airways",
              src: "https://www.zambia-airways.com/Cms_Data/Sites/ZambiaAirways/Files/zambia-logo.png",
            },
            {
              alt: "Airtrfx",
              src: "https://assets.airtrfx.com/media-em/wb/logos/wb-large-default.png?width=170&quality=80&fit=crop&format=auto&opt=true",
            },
            {
              alt: "South African Airways",
              src: "https://www.flysaa.com/saa-airways-theme/airways/images/logo.png",
            },
          ].map((airline, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              <img
                alt={airline.alt}
                src={airline.src}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Steps() {
  const steps = [
    {
      icon: "🌍",
      title: "Choose A Destination",
      description:
        "Explore Africa’s most breathtaking destinations with Ecotra. Whether it’s wildlife safaris, serene beaches, or cultural landmarks, we help you discover the perfect experience.",
    },
    {
      icon: "💳",
      title: "Pay Online",
      description:
        "Book your adventure seamlessly with our secure online payment system. At Ecotra, we ensure a hassle-free process so you can focus on your journey.",
    },
    {
      icon: "✈️",
      title: "Fly Today",
      description:
        "Start your journey with our trusted airline partners and enjoy a sustainable travel experience that benefits local communities and conserves nature.",
    },
  ];

  return (
    <div className="bg-neutral-50 text-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl font-serif text-green-600 mb-16"
        >
          3 Easy Steps
        </motion.h2>

        {/* Steps animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white text-gray-900"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="text-6xl text-green-600 mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 font-serif">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <SpecialTours />
      <KeyFeaturesSection />
      <Cta />
      <Services />
      <Stats />
      {/* <PopularDestinations /> */}
      <Steps />
      <Testimonials />
      <Partners />
      <Newsletter />
    </div>
  );
}
