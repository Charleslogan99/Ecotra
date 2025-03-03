"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";

export function SpecialTours() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const specialTours = useMemo(
    () => [
      {
        id: 1,
        name: "Environmental Scholar Tours",
        image: "/images/tourimages/tour5.jpg",
        link: "/special-tours/EnvironmentalScholarTours",
      },
      {
        id: 2,
        name: "Mystery Tours",
        image: "/images/tourimages/mysterytours.avif",
        link: "/special-tours/MysteryTours",
      },
      {
        id: 3,
        name: "African History Tours",
        image: "/images/tourimages/AfricanHistory.avif",
        link: "/special-tours/AfricanHistoryTours",
      },
    ],
    []
  );

  return (
    <section ref={ref} className="py-16 bg-gray-100 p-8">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl text-center font-serif text-gray-900 mb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Special Tours
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 md:text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Discover exclusive travel experiences curated just for you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <Link href={tour.link} legacyBehavior>
                <a className="group block cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white transform transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <div className="relative">
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        width={600}
                        height={400}
                        className="w-full h-64 md:w-full md:h-96 object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 transition group-hover:bg-opacity-50"></div>
                      <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold drop-shadow-lg">
                        {tour.name}
                      </h3>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
