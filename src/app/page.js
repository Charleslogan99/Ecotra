"use client";

import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaUserAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";
import Newsletter from "@/components/layout/Newsletter";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
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
      {/* Image Slider */}
      <div className="absolute inset-0 w-full h-full flex transition-transform duration-1000 ease-in-out">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Travel Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-10 px-6 sm:px-10 lg:px-24 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Explore Your Dream <br /> Destinations with Us
        </h1>
        <p className="text-lg sm:text-xl font-medium opacity-90 mt-4 leading-relaxed">
          Discover customized travel experiences tailored to your desires.
          Embark on unforgettable adventures with ease and luxury.
        </p>
        <Link
          href="/accounts/sign-up"
          className="mt-6 inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg sm:text-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-700"
        >
          Get Started
        </Link>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-5" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export function InfoSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-6xl font-serif text-gray-800 leading-tight mb-6">
          Unlock the Adventure of a Lifetime
        </h2>
        <p className="text-gray-600 text-xl sm:text-lg mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied travelers who’ve experienced the best of
          customized travel. From exotic destinations to curated experiences,
          we’ve got it all covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bp-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-6">
              <FaMapMarkerAlt size={48} className="text-green-600 mb-4" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Personalized Itineraries
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Whether you're into adventure or relaxation, we’ll customize your
              trip to match your needs and interests. You decide the pace!
            </p>
            <a
              href="/about"
              className="bg-green-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>

          <div className="p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-6">
              <FaUserAlt size={48} className="text-blue-600 mb-4" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Expert Guides
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our local guides know the hidden gems and will ensure you have the
              best experience possible, every step of the way.
            </p>
            <a
              href="/about"
              className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>

          <div className="p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-6">
              <FaSuitcaseRolling size={48} className="text-red-600 mb-4" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Stress-Free Travel
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              From airport transfers to bookings, we handle all the details so
              you can focus on enjoying your vacation without the hassle.
            </p>
            <a
              href="/about"
              className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-black text-lg sm:text-xl font-semibold mb-6">
            Ready to get started on your next adventure?
          </p>
          <a
            href="/accounts/sign-up"
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-md font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className=" p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-900 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
              <span className="text-green-900 text-3xl font-bold">🌱</span>
            </div>
            <h4 className="text-2xl font-serif text-green-700 mb-4">
              Sustainable Tourism
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              A portion of our revenue directly supports conservation projects,
              ensuring your travel positively impacts the environment and local
              communities.
            </p>
          </div>
          <div className=" p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-900 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
              <span className="text-green-600 text-3xl font-bold">🌍</span>
            </div>
            <h4 className="text-2xl font-serif text-green-700 mb-4">
              Diverse Destinations
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              From the savannahs of Kenya to the beaches of Cape Verde, explore
              Africa’s hidden treasures with guided tours and customized
              itineraries.
            </p>
          </div>
          <div className="p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-900 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
              <span className="text-green-600 text-3xl font-bold">🤝</span>
            </div>
            <h4 className="text-2xl font-serif text-green-700 mb-4">
              Expert Partnerships
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              Travel with confidence through partnerships with leading airlines,
              embassies, and NGOs, ensuring a seamless experience from start to
              finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="bg-black py-24 text-center text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-4xl font-extrabold mb-6 leading-tight tracking-wide">
          Ready to Explore Africa Responsibly?
        </h3>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Join us in promoting sustainable tourism while enjoying the beauty of
          Africa. Let’s conserve nature and uplift communities together.
        </p>
        <a
          href="/accounts/sign-up"
          className="bg-gradient-to-r from-green-600 to-green-500 text-gray-950 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      id: 1,
      title: "Flight Bookings",
      description:
        "Book domestic and international flights at the best prices with Ecotra Travel Agency.",
      icon: <span className="text-green-700">✈️</span>,
    },
    {
      id: 2,
      title: "Hotel Reservations",
      description:
        "Find and reserve the perfect hotel for your travel destination worldwide.",
      icon: "🏨",
    },
    {
      id: 3,
      title: "Tour Packages",
      description:
        "Explore our customized tour packages designed to give you an unforgettable experience.",
      icon: "🌍",
    },
    {
      id: 4,
      title: "Travel Insurance",
      description:
        "Stay safe with our comprehensive travel insurance plans tailored for travelers.",
      icon: "🛡️",
    },
  ];

  return (
    <section
      className="relative py-16 px-6"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1440 320%27%3E%3Cpath fill=%27%23047857%27 fill-opacity=%271%27 d=%27M0,224L48,197.3C96,171,192,117,288,122.7C384,128,480,192,576,197.3C672,203,768,149,864,128C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%27%3E%3C/path%3E%3C/svg%3E")',
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-serif text-green-800 mb-8">
          Our Services
        </h2>
        <p className="text-gray-600 text-xl mb-12 font-serif max-w-3xl mx-auto">
          At Ecotra Travel Agency, we offer a range of services to make your
          travel experience seamless and enjoyable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-green-600">{service.icon}</div>
              <h3 className="text-2xl font-serif text-green-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Gaborone, Botswana",
      description:
        "Explore the thriving capital of Botswana, known for its wildlife and rich cultural history.",
      images: [
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Praia, Cape Verde",
      description:
        "Enjoy the serene beaches and vibrant culture of Praia, the capital of Cape Verde.",
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 3,
      name: "Accra, Ghana",
      description:
        "Discover the heart of Ghana with its historic forts, lively art scene, and welcoming culture.",
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 4,
      name: "Lagos, Nigeria",
      description:
        "Explore the vibrant city of Lagos with its bustling markets, stunning beaches, and rich cultural heritage.",
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 5,
      name: "Nairobi, Kenya",
      description:
        "Experience the charm of Nairobi with its unique blend of wildlife, culture, and modernity.",
      images: [
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 6,
      name: "Dar es Salaam, Tanzania",
      description:
        "Unwind in Dar es Salaam, a city offering stunning beaches, vibrant markets, and rich history.",
      images: [
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 7,
      name: "Kigali, Rwanda",
      description:
        "Witness the beauty and transformation of Kigali, a city known for its cleanliness and resilience.",
      images: [
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 8,
      name: "Kampala, Uganda",
      description:
        "Discover Kampala, a city full of life, culture, and breathtaking landscapes in Uganda.",
      images: [
        "https://images.unsplash.com/photo-1672889255276-4f34588ac93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 9,
      name: "Lusaka, Zambia",
      description:
        "Explore Lusaka, a growing city with vibrant markets and a gateway to Zambia's natural wonders.",
      images: [
        "https://images.unsplash.com/photo-1667377532685-7048d322143e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 10,
      name: "Harare, Zimbabwe",
      description:
        "Discover the cultural richness and vibrant art scene of Harare, Zimbabwe's capital city.",
      images: [
        "https://images.unsplash.com/photo-1672889255276-4f34588ac93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 11,
      name: "Cape Town, South Africa",
      description:
        "Enjoy the breathtaking landscapes and vibrant culture of Cape Town, South Africa's jewel.",
      images: [
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 12,
      name: "Windhoek, Namibia",
      description:
        "Discover the unique blend of German heritage and African traditions in Windhoek.",
      images: [
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 13,
      name: "Libreville, Gabon",
      description:
        "Relax in Libreville, a city offering beautiful beaches and a laid-back atmosphere.",
      images: [
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const destinationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
      setCurrentImageIndex(0);
    }, 6000);

    return () => clearInterval(destinationInterval);
  }, [destinations.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevImageIndex) => {
        const images = destinations[currentIndex]?.images || [];
        return (prevImageIndex + 1) % images.length;
      });
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [currentIndex, destinations]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    setCurrentImageIndex(0);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length
    );
    setCurrentImageIndex(0);
  };

  const currentDestination = destinations[currentIndex];
  const currentImage =
    currentDestination.images[currentImageIndex] ||
    currentDestination.images[0];

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-screen-2xl px-8 text-center">
        <h1 className="text-6xl font-serif font-extrabold tracking-tight text-green-800">
          Our Top Destinations
        </h1>
        <p className="mt-4 text-lg text-gray-600 font-serif">
          Explore the beauty and diversity of these amazing destinations across
          Africa.
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl px-8 mt-16">
        <div className="relative flex items-center justify-between bg-black text-white py-16 px-12 rounded-3xl shadow-2xl lg:px-32 lg:py-20">
          <div className="max-w-lg text-center lg:text-left lg:max-w-xl lg:w-1/2">
            <h2 className="text-5xl font-extrabold">
              {currentDestination.name}
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              {currentDestination.description}
            </p>
            <div className="mt-8 flex justify-center gap-x-8 lg:justify-start">
              <button
                onClick={goToPrevious}
                className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Previous
              </button>
              <button
                onClick={goToNext}
                className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Next
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-full mx-auto lg:w-1/2 h-96">
            <img
              src={currentImage}
              alt={currentDestination.name}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
          Trusted by Africa’s Leading Airlines
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-x-16">
          <div className="flex justify-center items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <img
              alt="Air Peace"
              src="https://flyairpeace.com/wp-content/uploads/2024/05/logo.webp"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <img
              alt="Ethiopian Airlines"
              src="https://www.ethiopianairlines.com/images/default-source/default-album/icons/et-logo.png"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <img
              alt="Zambia Airways"
              src="https://www.zambia-airways.com/Cms_Data/Sites/ZambiaAirways/Files/zambia-logo.png"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          {/* <div className="flex justify-center items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <img
              alt="Zambia Airways"
              // src="https://www.zambia-airways.com/Cms_Data/Sites/ZambiaAirways/Files/zambia-logo.png"
              src="https://res.cloudinary.com/diapyzzws/image/upload/v1682565809/Website%20Images/paystackLogoColoured.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div> */}
          <div className="flex justify-center items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <img
              alt="Airtrfx"
              src="https://assets.airtrfx.com/media-em/wb/logos/wb-large-default.png?width=170&quality=80&fit=crop&format=auto&opt=true"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <img
              alt="South African Airways"
              src="https://www.flysaa.com/saa-airways-theme/airways/images/logo.png"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
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
      icon: <span className="text-green-600">✈️</span>,
      title: "Fly Today",
      description:
        "Start your journey with our trusted airline partners and enjoy a sustainable travel experience that benefits local communities and conserves nature.",
    },
  ];

  return (
    <div className="bg-neutral-50 text-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-serif text-green-600 mb-16">
          3 Easy Steps
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center  p-8 rounded-lg shadow-x transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl text-green-600 mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 text-center font-serif">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    {
      id: 4,
      quote:
        "Exploring Europe with Ecotra was a dream come true! Their personalized tour plans, knowledgeable guides, and excellent accommodations made it a memorable adventure.",
      name: "Sophia Martinez",
      position: "Travel Enthusiast",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 5,
      quote:
        "Ecotra's service is simply top-notch! Their team is incredibly responsive, and they go the extra mile to make sure everything is perfect. I'm already planning my next trip with them.",
      name: "Daniel Clark",
      position: "Freelance Photographer",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=256&h=256&q=80",
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
    <section className="relative overflow-hidden bg-white text-black py-16">
      <h1 className="text-center text-4xl font-serif font-medium mb-12">
        Customer Testimonials
      </h1>

      <div className="max-w-2xl mx-auto text-center">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div className="p-8 bg-green-700 text-lg font-light relative">
            <svg
              className="absolute top-0 left-0 transform -translate-x-5 -translate-y-5 w-20 h-20 text-white opacity-30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M32 64c8.75 0 16-7.25 16-16 0-7.62-4.88-14.1-11.75-16.8C38.85 31.4 37.5 28.3 37.5 25 37.5 14.15 27.5 7.5 19 7.5 9.75 7.5 2 14.25 2 23s7.75 15.5 17 15.5c4.62 0 8.75-1.25 12.25-3.25C44.75 36.9 47 40.55 47 45c0 9.5-7.5 16-16 16zM32 42c5.5 0 10-4.5 10-10 0-3.2-2.4-5.9-5.5-7.5C34.3 26.5 32 24 32 20s2.3-6.5 4.5-7.5C39.6 10.9 42 8.2 42 5c0-5.5-4.5-10-10-10-5.5 0-10 4.5-10 10 0 3.2 2.4 5.9 5.5 7.5C29.7 18.5 32 21 32 25s-2.3 6.5-4.5 7.5C26.4 35.1 24 37.8 24 41c0 5.5 4.5 10 10 10z" />
            </svg>

            <p className="mb-4 italic">{testimonials[currentIndex].quote}</p>

            <div className="flex justify-center items-center space-x-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-4 border-white"
              />
              <div className="text-lg font-semibold">
                <p>{testimonials[currentIndex].name}</p>
                <p className="text-sm font-sans text-gray-200">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
            <button
              onClick={goToPreviousTestimonial}
              className="p-2 bg-black text-white rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaArrowLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4">
            <button
              onClick={goToNextTestimonial}
              className="p-2 bg-black text-white rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AirplaneCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-white p-8">
      <div className="w-full md:w-4/6 flex justify-center">
        <div className="relative w-full max-w-4xl aspect-video rounded-l-3xl overflow-hidden shadow-2xl">
          <Image
            src="/plane.jpg"
            alt="Airplane"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-l-3xl"
          />
        </div>
      </div>

      <div className="w-full md:w-2/6 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 px-6 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 leading-tight">
          Explore New Horizons
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-serif">
          Discover the joy of flying with unmatched comfort and luxury. Your
          journey to extraordinary destinations begins here. Let's create
          memories that will last a lifetime.
        </p>
        <button className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out">
          Book Your Flight
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      {/* <Navbar /> */}
      <HeroSection />
      <Services />
      <KeyFeaturesSection />
      <Cta />
      <PopularDestinations />
      <Partners />
      <Testimonials />
      <Steps />
      <InfoSection />
      <Newsletter />
      <AirplaneCard />
      {/* <Footer /> */}
    </div>
  );
}
