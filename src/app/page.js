// import HeroSection, { Cta, DestinationHighlight, KeyFeaturesSection, Partners, SecondSection, Steps } from "@/components/layout/HeroSection";

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-7xl font-serif leading-tight tracking-tight sm:leading-tight">
            Explore Your Dream Destinations with Us
          </h1>
          <p className="text-lg sm:text-xl font-medium">
            We offer customized travel experiences that cater to your
            preferences. Discover unforgettable destinations with ease and
            luxury.
          </p>
          <Link
            href="/accounts/sign-up"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

     
    </section>
  );
}

export function SecondSection() {
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

          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Expert Guides
            </h3>
            <p className="text-gray-600 mb-6">
              Our local guides know the hidden gems and will ensure you have the
              best experience possible, every step of the way.
            </p>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300">
              Learn More
            </div>
          </div>

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
    <section className="bg-gray-200 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-serif text-green-800 mb-10">
          Why Travel with Ecotra?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-600 mb-4">
              Sustainable Tourism
            </h4>
            <p className="text-gray-600">
              A portion of our revenue directly supports conservation projects,
              ensuring that your travel positively impacts the environment and
              local communities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-600 mb-4">
              Diverse Destinations
            </h4>
            <p className="text-gray-600">
              From the savannahs of Kenya to the beaches of Cape Verde, explore
              Africa’s hidden treasures with guided tours and customized
              itineraries.
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
  );
}

export function Cta() {
    return (
        <section className="bg-gray-950 py-16 text-center text-white">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl font-bold mb-6">
      Ready to Explore Africa Responsibly?
    </h3>
    <p className="text-lg mb-8">
      Join us in promoting sustainable tourism while enjoying the beauty of
      Africa. Let’s conserve nature and uplift communities together.
    </p>
    <a
      href="/sign-up"
      className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
    >
      Get Started
    </a>
  </div>
</section>

    )
}

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Flight Bookings',
      description:
        'Book domestic and international flights at the best prices with Ecotra Travel Agency.',
      icon: '✈️',
    },
    {
      id: 2,
      title: 'Hotel Reservations',
      description:
        'Find and reserve the perfect hotel for your travel destination worldwide.',
      icon: '🏨',
    },
    {
      id: 3,
      title: 'Tour Packages',
      description:
        'Explore our customized tour packages designed to give you an unforgettable experience.',
      icon: '🌍',
    },
    {
      id: 4,
      title: 'Visa Assistance',
      description:
        'Get reliable assistance for processing travel visas to various countries.',
      icon: '🛂',
    },
    {
      id: 5,
      title: 'Travel Insurance',
      description:
        'Stay safe with our comprehensive travel insurance plans tailored for travelers.',
      icon: '🛡️',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-green-800 mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 mb-10 font-serif">
          At Ecotra Travel Agency, we offer a range of services to make your travel experience seamless and enjoyable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              {/* Green Icon */}
              <div className="text-5xl mb-4 text-gray-900">{service.icon}</div>
              <h3 className="text-xl font-serif text-green-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-900 font-sans">{service.description}</p>
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
        "https://source.unsplash.com/featured/?botswana",
        "https://source.unsplash.com/featured/?gaborone",
        "https://source.unsplash.com/featured/?wildlife,botswana",
        "https://source.unsplash.com/featured/?africa,botswana",
        "https://source.unsplash.com/featured/?nature,botswana",
      ],
    },
    {
      id: 2,
      name: "Praia, Cape Verde",
      description:
        "Enjoy the serene beaches and vibrant culture of Praia, the capital of Cape Verde.",
      images: [
        "https://source.unsplash.com/featured/?capeverde",
        "https://source.unsplash.com/featured/?praia",
        "https://source.unsplash.com/featured/?beach,capeverde",
        "https://source.unsplash.com/featured/?ocean,capeverde",
        "https://source.unsplash.com/featured/?island,capeverde",
      ],
    },
    {
      id: 3,
      name: "Accra, Ghana",
      description:
        "Discover the heart of Ghana with its historic forts, lively art scene, and welcoming culture.",
      images: [
        "https://source.unsplash.com/featured/?ghana",
        "https://source.unsplash.com/featured/?accra",
        "https://source.unsplash.com/featured/?culture,ghana",
        "https://source.unsplash.com/featured/?landscape,ghana",
        "https://source.unsplash.com/featured/?history,ghana",
      ],
    },
    {
      id: 4,
      name: "Lagos, Nigeria",
      description:
        "Explore the vibrant city of Lagos with its bustling markets, stunning beaches, and rich cultural heritage.",
      images: [
        "https://source.unsplash.com/featured/?nigeria",
        "https://source.unsplash.com/featured/?lagos",
        "https://source.unsplash.com/featured/?market,nigeria",
        "https://source.unsplash.com/featured/?beach,nigeria",
        "https://source.unsplash.com/featured/?culture,nigeria",
      ],
    },
    {
      id: 5,
      name: "Nairobi, Kenya",
      description:
        "Experience the charm of Nairobi with its unique blend of wildlife, culture, and modernity.",
      images: [
        "https://source.unsplash.com/featured/?kenya",
        "https://source.unsplash.com/featured/?nairobi",
        "https://source.unsplash.com/featured/?wildlife,kenya",
        "https://source.unsplash.com/featured/?safari,kenya",
        "https://source.unsplash.com/featured/?nature,kenya",
      ],
    },
    {
      id: 6,
      name: "Dar es Salaam, Tanzania",
      description:
        "Unwind in Dar es Salaam, a city offering stunning beaches, vibrant markets, and rich history.",
      images: [
        "https://source.unsplash.com/featured/?tanzania",
        "https://source.unsplash.com/featured/?daressalaam",
        "https://source.unsplash.com/featured/?beach,tanzania",
        "https://source.unsplash.com/featured/?market,tanzania",
        "https://source.unsplash.com/featured/?culture,tanzania",
      ],
    },
    {
      id: 7,
      name: "Kigali, Rwanda",
      description:
        "Witness the beauty and transformation of Kigali, a city known for its cleanliness and resilience.",
      images: [
        "https://source.unsplash.com/featured/?rwanda",
        "https://source.unsplash.com/featured/?kigali",
        "https://source.unsplash.com/featured/?nature,rwanda",
        "https://source.unsplash.com/featured/?culture,rwanda",
        "https://source.unsplash.com/featured/?city,rwanda",
      ],
    },
    {
      id: 8,
      name: "Kampala, Uganda",
      description:
        "Discover Kampala, a city full of life, culture, and breathtaking landscapes in Uganda.",
      images: [
        "https://source.unsplash.com/featured/?uganda",
        "https://source.unsplash.com/featured/?kampala",
        "https://source.unsplash.com/featured/?landscape,uganda",
        "https://source.unsplash.com/featured/?culture,uganda",
        "https://source.unsplash.com/featured/?city,uganda",
      ],
    },
    {
      id: 9,
      name: "Lusaka, Zambia",
      description:
        "Explore Lusaka, a growing city with vibrant markets and a gateway to Zambia's natural wonders.",
      images: [
        "https://source.unsplash.com/featured/?zambia",
        "https://source.unsplash.com/featured/?lusaka",
        "https://source.unsplash.com/featured/?culture,zambia",
        "https://source.unsplash.com/featured/?market,zambia",
        "https://source.unsplash.com/featured/?landscape,zambia",
      ],
    },
    {
      id: 10,
      name: "Harare, Zimbabwe",
      description:
        "Discover the cultural richness and vibrant art scene of Harare, Zimbabwe's capital city.",
      images: [
        "https://source.unsplash.com/featured/?zimbabwe",
        "https://source.unsplash.com/featured/?harare",
        "https://source.unsplash.com/featured/?culture,zimbabwe",
        "https://source.unsplash.com/featured/?art,zimbabwe",
        "https://source.unsplash.com/featured/?city,zimbabwe",
      ],
    },
    {
      id: 11,
      name: "Cape Town, South Africa",
      description:
        "Enjoy the breathtaking landscapes and vibrant culture of Cape Town, South Africa's jewel.",
      images: [
        "https://source.unsplash.com/featured/?southafrica",
        "https://source.unsplash.com/featured/?capetown",
        "https://source.unsplash.com/featured/?landscape,southafrica",
        "https://source.unsplash.com/featured/?nature,southafrica",
        "https://source.unsplash.com/featured/?beach,southafrica",
      ],
    },
    {
      id: 12,
      name: "Windhoek, Namibia",
      description:
        "Discover the unique blend of German heritage and African traditions in Windhoek.",
      images: [
        "https://source.unsplash.com/featured/?namibia",
        "https://source.unsplash.com/featured/?windhoek",
        "https://source.unsplash.com/featured/?culture,namibia",
        "https://source.unsplash.com/featured/?landscape,namibia",
        "https://source.unsplash.com/featured/?city,namibia",
      ],
    },
    {
      id: 13,
      name: "Libreville, Gabon",
      description:
        "Relax in Libreville, a city offering beautiful beaches and a laid-back atmosphere.",
      images: [
        "https://source.unsplash.com/featured/?gabon",
        "https://source.unsplash.com/featured/?libreville",
        "https://source.unsplash.com/featured/?beach,gabon",
        "https://source.unsplash.com/featured/?ocean,gabon",
        "https://source.unsplash.com/featured/?city,gabon",
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const destinationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
      setCurrentImageIndex(0);
    }, 10000);

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
    setCurrentImageIndex(0);
  };

  const currentDestination = destinations[currentIndex];
  const currentImage =
    currentDestination.images[currentImageIndex] || currentDestination.images[0];

  return (
    <div className="bg-gradient-to-b from-white to-green-200">
      <div className="mx-auto max-w-screen-2xl py-16 px-8 text-center">
        <h1 className="text-6xl font-serif tracking-tight text-green-800">Our Top Destinations</h1>
        <p className="mt-4 text-lg text-gray-700 font-serif">
          Explore the beauty and diversity of these amazing destinations across Africa.
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 px-12 pt-20 shadow-2xl sm:rounded-3xl sm:px-20 lg:flex lg:gap-x-20 lg:px-32 lg:pt-0">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              {currentDestination.name}
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-gray-300">
              {currentDestination.description}
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-8 lg:justify-start">
              <button
                onClick={goToPrevious}
                className="rounded-lg bg-white px-5 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-100 transition duration-200"
              >
                Previous
              </button>
              <button
                onClick={goToNext}
                className="rounded-lg bg-white px-5 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-100 transition duration-200"
              >
                Next
              </button>
            </div>
          </div>
          <div className="relative mt-10 h-80 w-full max-w-lg mx-auto lg:mt-0 lg:max-w-xl lg:flex-shrink-0">
            <img
              src={currentImage}
              alt={currentDestination.name}
              className="h-full w-full object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}





export function Partners() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl/8 font-serif text-green-700">
          Trusted by Africa’s Leading Airlines
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }


  export function Steps() {
    const steps = [
      {
        icon: '🌍', // Replace this emoji with an actual icon if needed
        title: 'Choose A Destination',
        description:
          'Explore Africa’s most breathtaking destinations with Ecotra. Whether it’s wildlife safaris, serene beaches, or cultural landmarks, we help you discover the perfect experience.',
      },
      {
        icon: '💳', // Replace this emoji with an actual icon if needed
        title: 'Pay Online',
        description:
          'Book your adventure seamlessly with our secure online payment system. At Ecotra, we ensure a hassle-free process so you can focus on your journey.',
      },
      {
        icon: '✈️', // Replace this emoji with an actual icon if needed
        title: 'Fly Today',
        description:
          'Start your journey with our trusted airline partners and enjoy a sustainable travel experience that benefits local communities and conserves nature.',
      },
    ];
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-serif text-gray-900 mb-8">
            3 Easy Steps
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Ecotra Travel Agency planned the perfect getaway for my family! From seamless booking to an amazing itinerary, everything was exceptional. We can't wait to travel with them again.",
      name: "Samantha Lee",
      position: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1603415526960-3f210acd312f?crop=faces&fit=crop&w=256&h=256&q=80",
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
        "https://images.unsplash.com/photo-1502767089025-6572583495e4?crop=faces&fit=crop&w=256&h=256&q=80",
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
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
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
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-center text-5xl text-green-800 font-serif">Testimonials</h1>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src="https://yourlogo.com/ecotra-travel-logo.svg"
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>{testimonials[currentIndex].quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={testimonials[currentIndex].image}
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{testimonials[currentIndex].position}</div>
            </div>
          </figcaption>
        </figure>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={goToPreviousTestimonial}
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-gray-900 transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={goToNextTestimonial}
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-gray-900 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}


  

export default function Home() {
  return (
    <div className="font-sans">
    <Navbar />
    <HeroSection />
    <Services />
    <KeyFeaturesSection />
    <Cta />
    <PopularDestinations />
    <Partners />
    <Testimonials />
    <Steps />
    <SecondSection />
    <Footer />
    </div>
  );
}
