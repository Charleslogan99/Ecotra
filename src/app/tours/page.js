"use client";
import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useDeferredValue,
} from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  FaCloudArrowUp,
  FaLock,
  FaLeaf,
  FaPlaneDeparture,
} from "react-icons/fa6";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
export function AboutTours() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-green-600 sm:text-6xl">
                Environmental Scholar Trips
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                At Ecotra, we provide the right platform and services for
                students and scholars who carry out research in various
                enviornmental topics and travel across Africa. As an ecotraveler
                and environmental scholar, you would get amazing flight
                discounts, as well as other wonderful services from us. Ecotra
                prioritizes environmental conservation, hence your research
                project is of importance to us. In order to support the amazing
                work you do, you stand a chance to get funding from Ecotra for
                your research project. Details of funding application and
                winners would be announced on our website on an annual basis.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Environmental Scholars"
            src="/images/others/ecotra1.jpg"
            className="w-full max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] mx-auto sm:mx-0"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                Eligibility Requirements
              </h2>
              <ul role="list" className="mt-6 space-y-6 text-gray-600">
                <li className="flex gap-x-3">
                  <FaCloudArrowUp className="mt-1 size-5 flex-none text-green-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Full-Time University Enrollment:
                    </strong>{" "}
                    Must be enrolled full-time at a university in the United
                    States or Canada.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaLock className="mt-1 size-5 flex-none text-green-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Age Requirement:
                    </strong>{" "}
                    Must be at least 21 years old.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaLeaf className="mt-1 size-5 flex-none text-green-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Research Scope:
                    </strong>{" "}
                    Research must be environmentally related and conducted in an
                    African country.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaPlaneDeparture className="mt-1 size-5 flex-none text-green-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Travel Requirements:
                    </strong>{" "}
                    Scholars should be willing to travel with our partner
                    airlines.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-gray-700">
                Note: You may be asked to submit documents to prove your
                eligibility.
              </p>
              <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">
                Research Funding Opportunity
              </h2>
              <p className="mt-6">
                Ecotra prioritizes environmental conservation, and your research
                project is important to us. To support your work, you stand a
                chance to receive funding from Ecotra for your research project.
                Funding applications and winners will be announced on our
                website annually.
              </p>
              <p className="mt-8">
                Start your journey today and make an impact!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function MysteryTour() {
  return (
    <div className="bg-white py-16 px-6 sm:py-24 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-700">Mystery Tour</h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Confused about where to explore in Africa? We got you! Fill out a
          questionnaire about your travel fantasies, and we would recommend the
          perfect trip for you based on interests. Remember, Ecotra believes in
          giving you the best travel experiences.
          <br />
          <span className="font-medium text-green-700">
            For more details on how to book a Mystery Trip, visit our Ecotra
            App.
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {["ecotra1.jpg", "ecotra2.jpg", "ecotra3.jpg"].map((img, index) => (
          <img
            key={index}
            src={`/images/others/${img}`}
            alt="Mystery Destination"
            className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-12 flex justify-center">
        <a
          href="/questionnaire"
          className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
        >
          Take the Questionnaire
        </a>
      </div>
    </div>
  );
}

export function AfricanHistoryTours() {
  return (
    <div className="bg-white py-16 px-6 sm:py-24 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-700">
          African History Tours
        </h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          In addition to promoting environmental conservation through
          ecotourism, we also immerse our ecotravelers in Africa's vibrant
          history and culture. <br />
          <span className="font-medium text-green-700">
            Discover Africa’s rich heritage and gain unique knowledge on an
            unforgettable journey.
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          "/ecotra6.jpg",
          "images/others/ecotra6.jpg",
          "images/others/ecotra6.jpg",
        ].map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt="African Heritage"
            className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-12 flex justify-center">
        <a
          href="/book-trip"
          className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700 transition duration-300"
        >
          Book a Trip
        </a>
      </div>
    </div>
  );
}

const tours = [
  {
    id: 1,
    name: "Safari Adventure in Kenya",
    location: "Kenya",
    price: "$1200",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    image: "/images/tourimages/tour2.jpg",
  },
  {
    id: 2,
    name: "Bali Paradise Escape",
    location: "Indonesia",
    price: "$850",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    image: "/images/tourimages/tour3.jpg",
  },
  {
    id: 3,
    name: "Bali Paradise Escape",
    location: "Indonesia",
    price: "$850",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    image: "/images/tourimages/tour3.jpg",
  },
  {
    id: 4,
    name: "Bali Paradise Escape",
    location: "Indonesia",
    price: "$850",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    image: "/images/tourimages/tour3.jpg",
  },
  {
    id: 5,
    name: "Bali Paradise Escape",
    location: "Indonesia",
    price: "$850",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    image: "/images/tourimages/tour3.jpg",
  },
];
export function AllTours() {
  const [sortBy, setSortBy] = useState("price");
  const scrollRef = useRef(null);

  // Function to handle scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <h2 className="text-4xl font-bold text-gray-800">All Tours</h2>
      <select
        className="mt-4 md:mt-0 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
  
    <div className="relative mt-8">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition hidden md:flex"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
  
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="min-w-[280px] md:min-w-[390px] bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={tour.image}
              alt={tour.name}
              loading="lazy"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{tour.name}</h3>
              <p className="text-gray-600 text-sm">{tour.location}</p>
              <p className="text-gray-800 font-bold">{tour.price}</p>
              <p className="text-gray-500">{tour.duration}</p>
              <p className="text-yellow-500 font-semibold">
                ⭐ {tour.rating} / 5
              </p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
  
      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition hidden md:flex"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  </section>
  
  );
}

const heroImages = [
  "/images/others/ecotra17.jpg",
  "/images/others/ecotra18.jpg",
  "/images/others/ecotra19.jpg",
  "/images/others/ecotra20.jpg",
];

export default function Tours() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [currentImage, setCurrentImage] = useState(0);
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sortedTours = useMemo(() => {
    return [...tours]
      .filter((tour) =>
        tour.name.toLowerCase().includes(deferredSearch.toLowerCase())
      )
      .sort((a, b) =>
        sortBy === "price"
          ? parseFloat(a.price.replace(/[$,]/g, "")) -
            parseFloat(b.price.replace(/[$,]/g, ""))
          : b.rating - a.rating
      );
  }, [deferredSearch, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-[60vh] lg:h-[100vh] w-full">
        <Image
          src={heroImages[currentImage]}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
          <div className="mt-6 flex w-full max-w-lg bg-white rounded-full p-1 shadow-lg">
            <input
              type="text"
              placeholder="Search tours..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-l-full text-gray-800 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-5 py-3 rounded-r-full flex items-center hover:bg-green-700 transition">
              <FaSearch />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px- lg:px- bg-gray-100">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-900 mb-12">
          Explore Our Tours
        </h2>

        <section className="relative bg-gray-50 text-center overflow-hidden">
          <AboutTours />
        </section>
      </section>
      <section>
        <MysteryTour />
      </section>
      <section>
        <AfricanHistoryTours />
      </section>

      <section>
        <AllTours />
      </section>

      <section className="max-w-9xl mx-auto py-20 mt-20 px-6 bg-zinc-900 text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Special Offers & Discounts
        </h2>
        <p className="text-gray-400 text-lg">
          Save up to 30% on selected tours! Limited time offers available.
        </p>
        <button className="mt-6 bg-green-600 text-black px-6 py-3 rounded-lg hover:bg-green-700 transition">
          View Deals
        </button>
      </section>
    </div>
  );
}
