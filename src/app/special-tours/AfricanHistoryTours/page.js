"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AfricanHistoryTours() {
  const [activeTab, setActiveTab] = useState("Biafra War Museum");

  const tabs = ["Biafra War Museum", "Ancient Kingdom Ruins"];

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex flex-col items-center px-4">
      <div className="max-w-4xl w-full rounded-lg overflow-hidden">
      <div className="relative h-96 w-full">
  <Image
    src="/images/tourimages/AfricanHistory.avif"
    alt="African History Tours"
    fill
    className="object-cover rounded-lg shadow-lg"
  />
</div>

        <div className="p-10">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            African History Tours
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            In addition to promoting environmental conservation through
            ecotourism, we also engage our ecotravelers with unique African
            history and culture. Book a trip with us today and learn about
            Africa and acquire unique knowledge.
          </p>
          <div className="mb-6">
            <div className="flex space-x-4 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600  font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-4 text-gray-700">
              {activeTab === "Biafra War Museum" && (
                <div className="space-y-4">
                  <p>
                    Explore exhibits and learn about the historical impact of
                    the Biafra War. This museum provides in-depth insights into
                    the events, struggles, and legacy of the conflict.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <img
                      src="/images/tourimages/warmuseum1.jpg"
                      alt="Biafra exhibit 1"
                      className="w-full md:w-1/2 object-cover rounded-lg"
                    />
                    <img
                      src="/images/tourimages/warmuseum2.jpg"
                      alt="Biafra exhibit 2"
                      className="w-full md:w-1/2 object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}
              {activeTab === "Ancient Kingdom Ruins" && (
                <div className="space-y-4">
                  <p>
                    Discover the remnants of ancient kingdoms that once
                    flourished in Africa. Marvel at the ruins and artifacts that
                    tell the story of lost civilizations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <img
                      src="/images/tourimages/kingdom1.avif"
                      alt="Kingdom ruins 1"
                      className="w-full md:w-1/2 object-cover rounded-lg"
                    />
                    <img
                      src="/images/tourimages/kingdom2.avif"
                      alt="Kingdom ruins 2"
                      className="w-full md:w-1/2 object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
