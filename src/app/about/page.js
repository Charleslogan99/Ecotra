import Image from "next/image";
import { FaLeaf, FaUsers, FaShieldAlt, FaTag, FaHeadset, FaUserCheck, FaGlobe } from "react-icons/fa";
import { Partners } from "../page";

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full">
        <Image 
          src="/hero3.jpg" 
          alt="Ecotra Travel"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Discover the World with Ecotra
          </h1>
        </div>
      </div>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto py-28 px-8 bg-green-50 m-10 text-center md:text-left rounded-xl shadow-xl">
  <h2 className="text-5xl font-extrabold text-green-900 tracking-wide leading-tight mb-6">
    Who We Are
  </h2>
  <p className="mt-6 text-lg text-gray-700 md:max-w-3xl mx-auto md:mx-0">
    At <span className="text-green-800 font-semibold">Ecotra</span>, we are a premier travel agency passionate about delivering personalized travel experiences that exceed your expectations. 
    Whether you’re seeking a tranquil getaway or an adventure-filled journey, our expert team curates every detail to ensure your trip is unforgettable.
  </p>
  <div className="mt-10 max-w-xl mx-auto md:mx-0">
    <p className="text-xl text-gray-600 font-medium">
      With years of experience in the travel industry, we specialize in:
    </p>
    <ul className="list-disc text-lg text-gray-700 mt-6 space-y-3 ml-6 md:ml-12">
      <li>Custom itineraries tailored for every type of traveler</li>
      <li>Exclusive access to one-of-a-kind destinations and luxury hotels</li>
      <li>Expert travel guides offering local insights</li>
      <li>Personalized concierge services to cater to your every need</li>
    </ul>
  </div>
  <div className="mt-12">
    <a
      href="/accounts/sign-up"
      className="inline-block bg-green-700 text-white py-4 px-12 rounded-md text-lg font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-600 hover:scale-110 hover:shadow-xl"
    >
      Start Your Journey Today
    </a>
  </div>
</section>



      {/* Our Values */}
      <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-800">
          Our Values
        </h2>
        <p className="text-lg text-center text-gray-700 mt-4">
          We are committed to making travel sustainable, seamless, and customer-focused.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {[
            {
              title: "Sustainability",
              desc: "We promote eco-friendly travel to preserve the beauty of our planet.",
              icon: <FaLeaf className="text-green-600 text-6xl" />,
            },
            {
              title: "Customer Focus",
              desc: "Your satisfaction is our priority. We tailor every journey to you.",
              icon: <FaUsers className="text-green-600 text-6xl" />,
            },
            {
              title: "Reliability",
              desc: "We ensure safe, seamless, and unforgettable travel experiences.",
              icon: <FaShieldAlt className="text-green-600 text-6xl" />,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-green-700">{value.title}</h3>
              <p className="text-gray-600 mt-3 text-lg">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-green-700">
        Why Choose Ecotra?
      </h2>
      <p className="text-lg text-center text-gray-700 mt-4">
        Experience travel like never before with our exclusive deals, personalized services, and 24/7 support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {[
          {
            title: "Exclusive Deals",
            desc: "Enjoy unbeatable discounts on flights, hotels, and vacation packages.",
            icon: <FaTag className="text-green-600 text-5xl" />,
          },
          {
            title: "24/7 Support",
            desc: "Our team is always ready to assist you, no matter where you are.",
            icon: <FaHeadset className="text-green-600 text-5xl" />,
          },
          {
            title: "Tailored Experiences",
            desc: "We customize travel plans to suit your unique needs and budget.",
            icon: <FaUserCheck className="text-green-600 text-5xl" />,
          },
          {
            title: "Global Partnerships",
            desc: "We collaborate with top airlines and hotels to ensure premium services.",
            icon: <FaGlobe className="text-green-600 text-5xl" />,
          },
        ].map((reason, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="flex-shrink-0">{reason.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-green-700">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Meet Our Team */}
      <section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-green-900 tracking-wide">
      Meet Our Team
    </h2>
    <p className="text-center text-gray-600 text-lg mt-4">
      A team of passionate professionals dedicated to innovation and sustainability.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
      {[
        { name: "Peter Okoro", role: "Founder & CEO", img: "/hero4.jpg" },
        { name: "Jane Doe", role: "Sustainability Expert", img: "/hero4.jpg" },
        { name: "John Smith", role: "Technology Lead", img: "/hero5.jpg" },
      ].map((member, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-sm text-center transform transition duration-300 hover:scale-105"
        >
          <div className="w-32 h-32 mx-auto border-4 border-green-600 rounded-full overflow-hidden">
            <Image
              src={member.img}
              alt={member.name}
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mt-6">{member.name}</h3>
          <p className="text-gray-600 text-lg mt-2">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Partners */}
      <section>
<Partners />
      </section>
    </div>
  );
}
