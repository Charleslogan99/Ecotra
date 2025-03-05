"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="bg-gradient-to-r from-gray-50 to-gray-100 py-24 sm:py-32"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="text-center text-5xl font-bold text-gray-900 mb-4 md:text-6xl"
          variants={itemVariants}
        >
          Our Partner Airlines
        </motion.h2>
        <motion.p className="text-lg mb-8 text-center" variants={itemVariants}>
          When you travel with us, you get the best deals in terms of flight prices. Ecotra
          believes only in providing outstanding services, and our partner airlines ensure
          you get the best travel experience.
        </motion.p>

        <motion.div
          className="mx-auto grid max-w-lg grid-cols-2 items-center gap-12 sm:max-w-xl sm:grid-cols-3 
                        lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-x-16 mt-12"
          variants={containerVariants}
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
              alt: "Egyptian Airways",
              src: "https://www.egyptair.com/Style%20Library/Images/egyptairmainlogo.png",
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
            <motion.div
              key={index}
              className="flex justify-center items-center p-4 transition-transform duration-500 ease-in-out transform hover:scale-110"
              variants={itemVariants}
            >
              <img
                alt={airline.alt}
                src={airline.src}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
