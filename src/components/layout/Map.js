import React from "react";
import { useRouter } from "next/navigation";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";

const africaCoordinates = [
  { lat: 37.118, lng: -25.361 }, // Top-left corner
  { lat: 37.118, lng: 51.361 },  // Top-right corner
  { lat: -35.118, lng: 51.361 }, // Bottom-right corner
  { lat: -35.118, lng: -25.361 }, // Bottom-left corner
];

const highlightedCountries = [
  {
    name: "Nigeria",
    id: "NGA",
    section: "nigeria-section",
    coordinates: [
      { lat: 9.082, lng: 7.495 },
      { lat: 9.150, lng: 7.520 },
      { lat: 9.100, lng: 7.600 },
      { lat: 9.082, lng: 7.495 },
    ],
  },
  {
    name: "South Africa",
    id: "ZAF",
    section: "south-africa-section",
    coordinates: [
      { lat: -30.559, lng: 22.937 },
      { lat: -30.500, lng: 23.000 },
      { lat: -31.000, lng: 23.100 },
      { lat: -30.559, lng: 22.937 },
    ],
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 0,
  lng: 20,
};

const AfricaMap = () => {
  const router = useRouter();

  const handleCountryClick = (countryId) => {
    const country = highlightedCountries.find((c) => c.id === countryId);
    if (country) {
      router.push(`/destination#${country.section}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={3}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {highlightedCountries.map((country) => (
            <Polygon
              key={country.id}
              paths={country.coordinates}
              options={{
                fillColor: "#1E90FF",
                fillOpacity: 0.5,
                strokeColor: "#1E90FF",
                strokeOpacity: 1,
                strokeWeight: 2,
              }}
              onClick={() => handleCountryClick(country.id)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default AfricaMap;
