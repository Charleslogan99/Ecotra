"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Tours() {
  return (
    <div className="bg-green-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/midsection-woman-car-against-sky_1048944-28609448.jpg?ga=GA1.1.640371070.1737806957&semt=ais_hybrid')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
            Explore Our Eco Tours
          </h1>
          <p className="text-lg lg:text-2xl mt-4 text-white max-w-2xl mx-auto">
            Discover breathtaking nature destinations with our curated eco-friendly tours.
          </p>
          <Link href="#featured-tours">
            <button className="bg-green-700 text-white py-3 px-8 mt-6 rounded-full text-xl flex items-center hover:bg-green-800 transition-all transform hover:scale-105 shadow-lg">
              Browse Tours <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="featured-tours" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-green-900">Featured Eco Tours</h2>
          <p className="text-lg text-gray-600 mt-4">
            Handpicked eco-friendly tours designed for sustainable and unforgettable adventures.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Paris City Tour",
                image: "/tourimages/tour2.jpg",
                description:
                  "Experience the beauty of Paris with a guided tour through iconic landmarks.",
              },
              {
                name: "Safari in Kenya",
                image: "/tourimages/tour1.jpg",
                description: "Discover the wilderness of Kenya with our adventurous safari tours.",
              },
              {
                name: "Tropical Getaway in Bali",
                image: "/tourimages/tour3.jpg",
                description:
                  "Relax and explore the serene beaches and temples of Bali.",
              },
            ].map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl border border-green-300"
              >
                <Image
                  src={tour.image}
                  alt={tour.name}
                  width={500}
                  height={300}
                  className="object-cover w-full h-56"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-green-900">{tour.name}</h3>
                  <p className="text-gray-700 mt-2">{tour.description}</p>
                  <Link
                    href="#"
                    className="text-green-700 hover:text-green-900 mt-4 inline-block font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">Ready to Book Your Next Adventure?</h2>
          <p className="text-lg mt-4">
            Don’t miss out on breathtaking eco-tours. Book with us today!
          </p>
          <Link href="/accounts/sign-up">
            <button className="bg-white text-green-800 py-3 px-8 mt-6 rounded-lg text-xl hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
