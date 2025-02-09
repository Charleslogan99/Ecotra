import Image from "next/image";
import { Partners } from "../page";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Peter Okoro",
      role: "Founder & CEO",
      image: "/images/others/ecotra1.jpg",
      description:
        "With over a decade of experience in the travel industry, John is the visionary behind our platform. His passion for seamless travel experiences and customer satisfaction drives the innovation at our company.",
    },
    {
      name: "Jane Smith",
      role: "Chief Operating Officer",
      image: "/images/others/ecotra1.jpg",
      description:
        "Jane brings extensive expertise in operations and logistics, ensuring that every aspect of our services runs smoothly. Her strategic mindset and dedication to efficiency help streamline processes, making travel planning effortless for our customers.",
    },
    {
      name: "Michael Johnson",
      role: "Head of Customer Experience",
      image: "/images/others/ecotra1.jpg",
      description:
        "Michael is committed to providing world-class customer support. With a background in hospitality and travel services, he ensures that every traveler enjoys a seamless and memorable journey with us.",
    },
  ];

  return (
    <section className="py-16 bg-gray-0">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl font-serif text-gray-800 mb-12">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">{member.name}</h3>
              <p className="text-green-600 font-medium">{member.role}</p>
              <p className="text-gray-700 mt-3 max-w-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function CommunityLivelihood() {
  return (
    <section className="relative flex items-center justify-center min-h-full py-20 overflow-hidden w-full">
      <div className="absolute inset-0 bg-[url('/subtle-pattern.svg')] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-screen-xl mx-auto px-12 lg:px-20 gap-24 items-center justify-center text-center lg:text-left relative z-10">
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Community Livelihood
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full mx-auto lg:mx-0"></div>

          <div className="bg-white/80 backdrop-blur-lg p-10 lg:p-14 rounded-3xl shadow-2xl border border-gray-300">
            <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
            As much as we take environmental conservation seriously, we also consider the livelihood of the host communities you visit. By travelling with us, you are impacting positively in the lives of those who make your travel experience awesome. We address issues such as human-wildlife conflict, solid waste management, and ecosystem services that improve the health and wellbeing of local communities. To achieve this, we partner with community based and international organizations, as well as local governments in countries of our destinations.
 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export function WhyTravelWithUs() {
  const travelBenefits = [
    {
      title: "Environmental Conservation First",
      desc: "We are commited to protecting and preserving the beautiful environment visited by our ecotourists. For each trip with Ecotra, a certain percentage of revenue generated from our ecotourists is allocated to funding conservation projects in host communities. To achieve this, we partner with community based and international organizations across all our country destinations to fund these numerous conservation projects. Our conservation projects include anti-poaching, wetland restoration, habitat restoration, reforestation and afforestation. The beauty of nature is a treasure for everyone to protect jealously, and Ecotra champions this cause passionately. Like the famous Kenyan environmentalist Wangari Maathai said - We owe it to ourselves and to the next generation to conserve the environment so that we can bequeath our children a sustainable world that benefits all. '",
      images: ["/images/others/ecotra7.jpg", "/images/others/ecotra8.jpg"],
    },
    {
      title: "Unique Travel Experience",
      desc: "We believe in creating life time memories for our ecotourists. By travelling with us, you not only experience the beauty of nature, you also get to engage with local cultures. As much as environmental education is important to us for our tourists, cultural education is also part of our idea. Be it food, music, clothing, nightlife or dance, Ecotra got you.",
      images: ["/images/others/ecotra10.jpg", "/images/others/ecotra11.jpg"],
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-extrabold text-gray-950 mb-16">
          Why Travel With Us?
        </h2>

        {travelBenefits.map((item, index) => (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">

              {item.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg"
                >
                  <Image
                    src={img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-left bg-whit p-8  rounded-3xl shado-xl">
              <h3 className="text-4xl font-bold text- text-green-700 mb-8">
                {item.title}
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <CommunityLivelihood />
    </section>
  );
}



export default function About() {
  return (
    <div className="bg-white text-gray-900">
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/others/ecotra4.jpg"
          alt="Ecotra Travel"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-7xl font-extrabold drop-shadow-xl leading-tight">
            Explore Africa Sustainably
          </h1>
          <p className="text-gray-200 text-lg mt-4 max-w-2xl">
            Experience breathtaking destinations while preserving the planet for
            future generations.
          </p>
        </div>
      </div>

      <section className="relative py-32 bg-gray-50 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] bg-cover bg-center opacity-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-8 relative z-10 animate-fadeInSlow">
          <h2 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-8 tracking-tight">
            About Us
          </h2>

          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full animate-slideIn"></div>

          <blockquote className="mt-10 text-2xl lg:text-3xl font-serif italic text-gray-700 bg-white/70 backdrop-blur-lg px-6 py-5 rounded-xl shadow-lg inline-block animate-fadeInSlow border-l-4 border-green-600">
            “On Earth, there is no heaven, but there are pieces of it.”
            <span className="block text-lg font-medium mt-3">
              — Jules Renard
            </span>
          </blockquote>

          <p className="text-gray-800 text-xl leading-relaxed mt-10">
          At Ecotra, we recognize the abundant gifts of beauty that Mother Earth and Nature has blessed us with, and we seek to ensure that travelers and people from all over the world gain this experience in terms of exploration. We are a certified travel company with its corporate Headquarters in the United States of America and Nigeria. Known for its great expertise in ecotourism and environmental conservation, Ecotra is fully involved in travel and environmental consultancy, and the organization of multi-national travels and tourism between the world and several destinations in Africa.
          </p>

          <p className="text-gray-800 text-xl mt-6 leading-relaxed">
            Our mission is to promote{" "}
            <span className="font-semibold text-green-700">
              sustainable tourism
            </span>{" "}
            across Africa, immerse tourists in unique cultures, conserve natural
            habitats, and uplift local communities.
          </p>
        </div>
      </section>

      <section className="relative py-12 bg-gradient-to-b from-white to-[#f0f9ff] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 pointer-events-none"></div>

        <div className="absolute -top-10 right-0 w-32 h-32 bg-[url('/images/leaf.svg')] bg-contain bg-no-repeat opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative w-full h-80 lg:h-[550px] rounded-2xl shadow-2xl overflow-hidden group">
            <Image
              src="/images/others/ecotra3.jpg"
              alt="Sustainable Tourism"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>

          <div className="text-center animate-fadeIn">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              Our Mission
            </h2>
            <p className="text-lg lg:text-2xl text-gray-700 leading-relaxed lg:leading-loose">
            Our mission statement is simple: To widely promote sustainable tourism in several African destinations aimed at addressing tourist demands, exposing tourists to unique African cultures, conserving the environment of tourist destinations, and improving the livelihood of the host communities. Our Motto which is <span className="text-green-600 font-bold">"Explore, Enjoy, Conserve"</span> is not just a statement by us, but rather our environmental idealogy. Whether it’s exploring the lush rainforests of São Tomé and Príncipe, embarking on wildlife safaris in Tanzania, eating the jollof rice from Nigeria, or immersing yourself in various African traditions, we prioritize responsible tourism that leaves a positive footprint and creates unforgettable experiences.
 
            </p>
          </div>
        </div>
      </section>
    <section className="py-12 bg-gray-100">
      <WhyTravelWithUs />
    </section>

    
      <section className="bg-gray-100">
        <TeamSection />
      </section>
      <section className="py-12 bg-gray-100">
        <Partners />
      </section>
    </div>
  );
}
