"use client";
import { memo } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Flight Bookings",
    description:
      "When you book a tour with us, it includes a return flight ticket with one of our trusted partner airlines.",
    icon: "✈️",
  },
  {
    id: 2,
    title: "Accomodation",
    description:
      "We also cater for lodging at our various travel destinations. Your comfort is of importance to us.",
    icon: "🏨",
  },
  {
    id: 3,
    title: "Tour Packages",
    description:
      "Explore our customized tour packages with unique features that are designed to suit your travel interests and give you an unforgettable experience.",
    icon: "🌍",
  },
  {
    id: 4,
    title: "Travel Insurance",
    description:
      "Your trip with Ecotra is protected with a comprehensive travel insurance plan. We provide flexible packages that protect you from unforeseen circumstances and enable you travel confidently.",
    icon: "🛡️",
  },
];

// Title & Text Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
  }),
};

// Services Component
const Services = () => {
  return (
    <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-6 font-serif"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Services
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
         At Ecotra, we specialize in crafting memorable travel experiences that suit your unique preferences. Our expert travel consultants handle everything for you from start to finish in order to ensure a seamless journey.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group rounded-xl p-8 flex flex-col items-center  transition-shadow transform hover:-translate-y-3 duration-300 will-change-transform"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-green-600 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl text-center font-serif font-semibold text-green-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoizing the component to prevent unnecessary re-renders
export default memo(Services);
