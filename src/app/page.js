"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaPlaneDeparture, FaCalendarAlt, FaUser } from "react-icons/fa";
import Newsletter from "@/components/layout/Newsletter";
import Image from "next/image";
// import Link from "next/link";
import CountUp from "react-countup";



export function Stats() {
  const stats = [
    { id: 1, name: "Destinations", value: 20  },
    { id: 2, name: "Bookings Completed", value: 60 },
    { id: 3, name: "Clients Globally", value: 500 },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <CountUp start={0} end={stat.value} duration={3} />+
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}



const images = [
  "/images/others/ecotra1.jpg",
  "/images/others/ecotra2.jpg",
  "/images/others/ecotra9.jpg",
  "/images/others/ecotra14.jpg",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[65vh] md:h-[90vh] sm:h-[90vh] overflow-hidden">
      {/* Image Slider */}
      <div
        className="absolute inset-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={src}
              alt="Travel Destination"
              fill
              className="object-cover brightness-95"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>

      <div className="absolute left-0 lg:left-20 inset-0 flex flex-col justify-center items-start text-white z-10 px-6 sm:px-10 lg:px-24 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Explore the Best <br /> Destinations in Africa with Us
        </h1>
        <p className="text-lg sm:text-xl font-medium opacity-90 mt-4 leading-relaxed">
          We offer unique travel experiences that suit your interests and
          preferences. Discover Africa as an ecotourist—Explore, Enjoy, and
          Conserve.
        </p>
        <a
          href="/accounts/sign-up"
          className="mt-6 inline-block bg-green-600 text-black px-8 py-4 rounded-xl font-semibold text-lg sm:text-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-2xl"
        >
          Get Started
        </a>
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
    <section className="relative py-24 px-6  overflow-hidden">
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23047857' fill-opacity='0.15' d='M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,85.3C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div> */}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-serif text-green-800 mb-8">
          Our Services
        </h2>
        <p className="text-gray-600 text-xl mb-12 font-serif max-w-3xl mx-auto">
          At Ecotra Travel Agency, we offer a range of services to make your
          travel experience seamless and enjoyable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-whit shadow-l rounded-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
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




const destinations = [
  { name: "Algiers, Algeria", image: "/images/tourimages/tour1.jpg", price: 1100, rating: 4.5 },
  { name: "Luanda, Angola", image: "/images/tourimages/tour1.jpg", price: 1250, rating: 4.6 },
  { name: "Okavango Delta, Botswana", image: "/images/tourimages/tour2.jpg", price: 1400, rating: 4.8 },
  { name: "Praia, Cape Verde", image: "/images/tourimages/tour2.jpg", price: 1350, rating: 4.7 },
  { name: "Cairo, Egypt", image: "/images/tourimages/tour2.jpg", price: 1600, rating: 4.9 },
  { name: "Libreville, Gabon", image: "/images/tourimages/tour2.jpg", price: 1300, rating: 4.5 },
  { name: "Accra, Ghana", image: "/images/tourimages/tour3.jpg", price: 1250, rating: 4.7 },
  { name: "Maasai Mara, Kenya", image: "/images/tourimages/tour3.jpg", price: 1550, rating: 4.9 },
  { name: "Lake Malawi, Malawi", image: "/images/tourimages/tour3.jpg", price: 1400, rating: 4.8 },
  { name: "Port Louis, Mauritius", image: "/images/tourimages/tour3.jpg", price: 1700, rating: 4.7 },
  { name: "Marrakech, Morocco", image: "/images/tourimages/tour4.jpg", price: 1800, rating: 4.8 },
  { name: "Bazaruto Archipelago, Mozambique", image: "/images/tourimages/tour4.jpg", price: 1450, rating: 4.6 },
  { name: "Sossusvlei, Namibia", image: "/images/tourimages/tour4.jpg", price: 1500, rating: 4.7 },
  { name: "Lagos, Nigeria", image: "/images/tourimages/tour4.jpg", price: 1200, rating: 4.5 },
  { name: "Kigali, Rwanda", image: "/images/tourimages/tour4.jpg", price: 1350, rating: 4.7 },
  { name: "São Tomé, Sao Tome and Principe", image: "/images/tourimages/tour1.jpg", price: 1550, rating: 4.8 },
  { name: "Cape Town, South Africa", image: "/images/tourimages/tour1.jpg", price: 1650, rating: 4.9 },
  { name: "Serengeti, Tanzania", image: "/images/tourimages/tour3.jpg", price: 1750, rating: 4.9 },
  { name: "Tunis, Tunisia", image: "/images/tourimages/tour3.jpg", price: 1300, rating: 4.5 },
  { name: "Kampala, Uganda", image: "/images/tourimages/tour3.jpg", price: 1250, rating: 4.6 },
  { name: "Victoria Falls, Zambia", image: "/images/tourimages/tour2.jpg", price: 1850, rating: 4.9 },
  { name: "Hwange National Park, Zimbabwe", image: "/images/tourimages/tour2.jpg", price: 1500, rating: 4.7 },
];

export function PopularDestinations() {
  const scrollRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

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
    <div className="relative max-w-screen-xl mx-auto px-6 py-28">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Popular Destinations</h2>
        <div className="hidden lg:flex gap-4">
          <button
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            onClick={() => handleScroll("left")}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            onClick={() => handleScroll("right")}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
        {(showAll ? destinations : destinations.slice(0, 3)).map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>

      {!showAll && (
        <div className="lg:hidden text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition hover:bg-green-700"
          >
            See More
          </button>
        </div>
      )}

      <div className="hidden lg:block overflow-hidden relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {destinations.map((destination, index) => (
            <div key={index} className="min-w-[25%] flex-shrink-0">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DestinationCard({ destination }) {
  return (
    <div className="h-[380px] flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
     <Image
  src={destination.image}
  alt={destination.name}
  width={600}
  height={250} 
  className="object-cover w-full h-[250px]"
  priority={true}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
/>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-green-700 font-bold text-lg">${destination.price}</span>
          <span className="flex items-center text-yellow-500">
            <FaStar className="mr-1 text-lg" /> {destination.rating}
          </span>
        </div>
      </div>
    </div>
  );
}







export function Partners() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-5xl font-bold text-gray-900 mb-4 md:text-6xl">
          Our Partner Airlines
        </h2>
        <p className="text-center text-md mb-8">
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
    <section className="relative m-2 overflow-hidden bg-white text-black py-16">
      <h1 className="text-center text-4xl font-serif font-medium mb-3">
        Customer Testimonials
      </h1>
      <p className="text-center text-xl text-gray-600 font-serif mb-12">
        What are people saying about us
      </p>

      <div className="max-w-5xl  mx-auto text-center">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div className="p-8 sm:p-32 bg-gray-950 text-white text-lg font-light relative">
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
                <p className="text-sm font-sans text-green-700">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
            <button
              onClick={goToPreviousTestimonial}
              className="p-2 bg-green-700 text-white rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaArrowLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4">
            <button
              onClick={goToNextTestimonial}
              className="p-2 bg-green-700 text-white rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <Partners />
      <PopularDestinations />
      <Cta />
      <KeyFeaturesSection />
      <Services />
      <Stats />
      <Steps />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
