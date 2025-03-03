"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const countryData = {
    algeria: {
      name: "Algeria",
      description: "Discover the vast Sahara, ancient Roman ruins, and bustling markets in Algiers.",
      image: "/images/destinations/Algeria.avif",
      locations: [
        { name: "Sahara Desert", image: "/images/algeria/sahara.jpg", link: "/locations/sahara" },
        { name: "Timgad Ruins", image: "/images/algeria/timgad.jpg", link: "/locations/timgad" },
        { name: "Algiers Kasbah", image: "/images/algeria/kasbah.jpg", link: "/locations/kasbah" },
      ],
    },
    angola: {
      name: "Angola",
      description: "Experience Angola’s vibrant culture, stunning beaches, and rich history in Luanda.",
      image: "/images/destinations/Angola.avif",
      locations: [
        { name: "Luanda Waterfront", image: "/images/angola/luanda.jpg", link: "/locations/luanda" },
        { name: "Kalandula Falls", image: "/images/angola/kalandula.jpg", link: "/locations/kalandula" },
        { name: "Quiçama National Park", image: "/images/angola/quicama.jpg", link: "/locations/quicama" },
      ],
    },
    botswana: {
      name: "Botswana",
      description: "A unique inland delta teeming with wildlife, perfect for safari adventures.",
      image: "/images/destinations/Botswana.avif",
      locations: [
        { name: "Okavango Delta", image: "/images/botswana/okavango.jpg", link: "/locations/okavango" },
        { name: "Chobe National Park", image: "/images/botswana/chobe.jpg", link: "/locations/chobe" },
        { name: "Makgadikgadi Pans", image: "/images/botswana/makgadikgadi.jpg", link: "/locations/makgadikgadi" },
      ],
    },
    cape_verde: {
      name: "Cape Verde",
      description: "Enjoy Cape Verde’s capital with its beautiful beaches, Creole culture, and music.",
      image: "/images/destinations/Capeverde.avif",
      locations: [
        { name: "Praia", image: "/images/capeverde/praia.jpg", link: "/locations/praia" },
        { name: "Sal Island", image: "/images/capeverde/sal.jpg", link: "/locations/sal" },
        { name: "Fogo Volcano", image: "/images/capeverde/fogo.jpg", link: "/locations/fogo" },
      ],
    },
    egypt: {
      name: "Egypt",
      description: "Explore the Great Pyramids, Sphinx, and the rich history of ancient Egypt.",
      image: "/images/destinations/Egypt.avif",
      locations: [
        { name: "Pyramids of Giza", image: "/images/egypt/giza.jpg", link: "/locations/giza" },
        { name: "Valley of the Kings", image: "/images/egypt/valley.jpg", link: "/locations/valley" },
        { name: "Red Sea Resorts", image: "/images/egypt/redsea.jpg", link: "/locations/redsea" },
      ],
    },
    gabon: {
        name: "Gabon",
        description: "Discover Gabon’s rainforests, national parks, and beautiful Atlantic coastline.",
        image: "/images/destinations/Gabon.avif",
        locations: [
          { name: "Loango National Park", image: "/images/gabon/loango.jpg", link: "/locations/loango" },
          { name: "Pongara National Park", image: "/images/gabon/pongara.jpg", link: "/locations/pongara" },
          { name: "Libreville", image: "/images/gabon/libreville.jpg", link: "/locations/libreville" },
        ],
      },
    ghana: {
      name: "Ghana",
      description: "Experience Ghana’s warm hospitality, cultural heritage, and vibrant nightlife.",
      image: "/images/destinations/Ghana.avif",
      locations: [
        { name: "Cape Coast Castle", image: "/images/ghana/cape-coast.jpg", link: "/locations/cape-coast" },
        { name: "Kakum National Park", image: "/images/ghana/kakum.jpg", link: "/locations/kakum" },
        { name: "Accra", image: "/images/ghana/accra.jpg", link: "/locations/accra" },
      ],
    },
    kenya: {
      name: "Kenya",
      description: "A world-renowned safari destination with breathtaking wildlife migrations.",
      image: "/images/destinations/Kenya.avif",
      locations: [
        { name: "Maasai Mara", image: "/images/kenya/maasai.jpg", link: "/locations/maasai" },
        { name: "Mount Kenya", image: "/images/kenya/mount.jpg", link: "/locations/mount" },
        { name: "Diani Beach", image: "/images/kenya/diani.jpg", link: "/locations/diani" },
      ],
    },
    malawi: {
        name: "Malawi",
        description: "A tropical paradise with crystal-clear waters and diverse aquatic life.",
        image: "/images/destinations/Malawi.avif",
        locations: [
          { name: "Lake Malawi", image: "/images/malawi/lake.jpg", link: "/locations/lake-malawi" },
          { name: "Liwonde National Park", image: "/images/malawi/liwonde.jpg", link: "/locations/liwonde" },
          { name: "Mount Mulanje", image: "/images/malawi/mulanje.jpg", link: "/locations/mulanje" },
        ],
      },
      mauritius: {
        name: "Mauritius",
        description: "A beautiful island nation known for its beaches, lagoons, and diverse culture.",
        image: "/images/destinations/Mauritius.avif",
        locations: [
          { name: "Le Morne Brabant", image: "/images/mauritius/lemorne.jpg", link: "/locations/le-morne" },
          { name: "Black River Gorges", image: "/images/mauritius/blackriver.jpg", link: "/locations/black-river" },
          { name: "Grand Baie", image: "/images/mauritius/grandbaie.jpg", link: "/locations/grand-baie" },
        ],
      },
      morocco: {
        name: "Morocco",
        description: "Explore colorful souks, palaces, and gardens in Morocco’s enchanting cities.",
        image: "/images/destinations/Morocco.avif",
        locations: [
          { name: "Marrakech Medina", image: "/images/morocco/marrakech.jpg", link: "/locations/marrakech" },
          { name: "Chefchaouen", image: "/images/morocco/chefchaouen.jpg", link: "/locations/chefchaouen" },
          { name: "Sahara Desert", image: "/images/morocco/sahara.jpg", link: "/locations/sahara" },
        ],
      },
      mozambique: {
        name: "Mozambique",
        description: "A paradise of white sandy beaches and marine biodiversity.",
        image: "/images/destinations/Mozambique.avif",
        locations: [
          { name: "Bazaruto Archipelago", image: "/images/mozambique/bazaruto.jpg", link: "/locations/bazaruto" },
          { name: "Tofo Beach", image: "/images/mozambique/tofo.jpg", link: "/locations/tofo" },
          { name: "Gorongosa National Park", image: "/images/mozambique/gorongosa.jpg", link: "/locations/gorongosa" },
        ],
      },
      namibia: {
        name: "Namibia",
        description: "Discover the striking red dunes of the Namib Desert.",
        image: "/images/destinations/Namibia.jpg",
        locations: [
          { name: "Sossusvlei", image: "/images/namibia/sossusvlei.jpg", link: "/locations/sossusvlei" },
          { name: "Etosha National Park", image: "/images/namibia/etosha.jpg", link: "/locations/etosha" },
          { name: "Swakopmund", image: "/images/namibia/swakopmund.jpg", link: "/locations/swakopmund" },
        ],
      },    
    nigeria: {
      name: "Nigeria",
      description: "Experience Nigeria’s bustling metropolis with its rich culture and nightlife.",
      image: "/images/destinations/Nigeria.jpg",
      locations: [
        { name: "Lagos", image: "/images/nigeria/lagos.jpg", link: "/locations/lagos" },
        { name: "Obudu Mountain Resort", image: "/images/nigeria/obudu.jpg", link: "/locations/obudu" },
        { name: "Yankari National Park", image: "/images/nigeria/yankari.jpg", link: "/locations/yankari" },
      ],
    },
    rwanda: {
        name: "Rwanda",
        description: "A clean and green city, known for its history, nature, and gorilla trekking.",
        image: "/images/destinations/Rwanda.avif",
        locations: [
          { name: "Volcanoes National Park", image: "/images/rwanda/volcanoes.jpg", link: "/locations/volcanoes" },
          { name: "Kigali Genocide Memorial", image: "/images/rwanda/kigali.jpg", link: "/locations/kigali" },
          { name: "Lake Kivu", image: "/images/rwanda/kivu.jpg", link: "/locations/kivu" },
        ],
      },
      sao_tome: {
        name: "São Tomé and Príncipe",
        description: "A hidden gem with stunning beaches, forests, and cocoa plantations.",
        image: "/images/destinations/Saotome.avif",
        locations: [
          { name: "Obo National Park", image: "/images/saotome/obo.jpg", link: "/locations/obo" },
          { name: "Praia Banana", image: "/images/saotome/banana.jpg", link: "/locations/banana" },
          { name: "Sao Tome City", image: "/images/saotome/city.jpg", link: "/locations/city" },
        ],
      },
      south_africa: {
        name: "South Africa",
        description: "A breathtaking coastal city with Table Mountain and vibrant culture.",
        image: "/images/destinations/Southafrica.avif",
        locations: [
          { name: "Table Mountain", image: "/images/southafrica/table.jpg", link: "/locations/table" },
          { name: "Kruger National Park", image: "/images/southafrica/kruger.jpg", link: "/locations/kruger" },
          { name: "Cape Winelands", image: "/images/southafrica/winelands.jpg", link: "/locations/winelands" },
        ],
      },
      tanzania: {
        name: "Tanzania",
        description: "One of Africa’s greatest wildlife conservation areas.",
        image: "/images/destinations/Tanzania.avif",
        locations: [
          { name: "Serengeti National Park", image: "/images/tanzania/serengeti.jpg", link: "/locations/serengeti" },
          { name: "Mount Kilimanjaro", image: "/images/tanzania/kilimanjaro.jpg", link: "/locations/kilimanjaro" },
          { name: "Zanzibar Beaches", image: "/images/tanzania/zanzibar.jpg", link: "/locations/zanzibar" },
        ],
      },
      uganda: {
        name: "Uganda",
        description: "The heart of Uganda’s cultural and natural attractions.",
        image: "/images/destinations/Uganda.avif",
        locations: [
          { name: "Bwindi Impenetrable Forest", image: "/images/uganda/bwindi.jpg", link: "/locations/bwindi" },
          { name: "Murchison Falls", image: "/images/uganda/murchison.jpg", link: "/locations/murchison" },
          { name: "Lake Victoria", image: "/images/uganda/victoria.jpg", link: "/locations/victoria" },
        ],
      },
      zambia: {
        name: "Zambia",
        description: "One of the world’s largest and most spectacular waterfalls.",
        image: "/images/destinations/Zambia.avif",
        locations: [
          { name: "Victoria Falls", image: "/images/zambia/victoria.jpg", link: "/locations/victoria" },
          { name: "South Luangwa National Park", image: "/images/zambia/luangwa.jpg", link: "/locations/luangwa" },
          { name: "Lower Zambezi National Park", image: "/images/zambia/zambezi.jpg", link: "/locations/zambezi" },
        ],
      },
      zimbabwe: {
        name: "Zimbabwe",
        description: "Zimbabwe’s largest national park, home to diverse wildlife.",
        image: "/images/destinations/Zimbabwe.avif",
        locations: [
          { name: "Hwange National Park", image: "/images/zimbabwe/hwange.jpg", link: "/locations/hwange" },
          { name: "Victoria Falls", image: "/images/zimbabwe/victoria.jpg", link: "/locations/victoria" },
          { name: "Great Zimbabwe Ruins", image: "/images/zimbabwe/ruins.jpg", link: "/locations/ruins" },
        ],
      },    
  };
  

export default function CountryPage() {
  const params = useParams();
  const country = params?.country?.toLowerCase(); // Extract country from URL

  const data = countryData[country];

  if (!data) {
    return <div className="text-center py-20">Country not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="relative">
        <Image src={data.image} width={1200} height={500} alt={data.name} className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-5xl font-extrabold drop-shadow-md">{data.name}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="text-lg text-gray-700">{data.description}</p>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Popular Locations in {data.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.locations.map((location, index) => (
            <Link key={index} href={location.link} passHref>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105">
                <Image src={location.image} width={300} height={200} alt={location.name} className="w-full h-[200px] object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{location.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
