import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Ecotra Travel Agency planned the perfect getaway for my family! From seamless booking to an amazing itinerary, everything was exceptional. We can't wait to travel with them again.",
      name: "Samantha Lee",
      position: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 2,
      quote:
        "Thanks to Ecotra, our honeymoon was unforgettable! The team paid attention to every little detail, ensuring we had the most romantic experience. Highly recommended!",
      name: "James & Emily Brown",
      position: "Newlyweds",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 3,
      quote:
        "I’ve used Ecotra Travel Agency for all my business trips, and they always exceed expectations. Reliable, professional, and stress-free travel arrangements every single time.",
      name: "Michael Adams",
      position: "CEO of BrightTech",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPreviousTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative bg-gray-100 text-black py-16 px-6 md:px-12 lg:px-24">
      <h1 className="text-center text-4xl font-serif font-semibold mb-4 text-green-800">
        Customer Testimonials
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        What our customers say about us
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative text-center">
        <p className="text-xl text-gray-800 font-light italic leading-relaxed">
          "{testimonials[currentIndex].quote}"
        </p>

        <div className="mt-6 flex flex-col items-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 rounded-full border-4 border-green-700"
          />
          <div className="mt-4 text-lg font-semibold text-green-800">
            {testimonials[currentIndex].name}
          </div>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={goToNextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
