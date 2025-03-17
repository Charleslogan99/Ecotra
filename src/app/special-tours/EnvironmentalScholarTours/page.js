"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnvironmentalScholarTours() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen flex flex-col items-center px-4">
      <div className="max-w-4xl w-full rounded-lg overflow-hidden">
        {/* Centered Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-80 sm:h-96">
            <Image
              src="/images/tourimages/environmental.jpg"
              alt="Environmental Scholar Tours"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Content Directly Under the Image */}
        <div className="p-2 sm:p-10  sm:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6">
            Environmental Scholar Trips
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            At Ecotra, we provide the right platform and services for students and
            scholars who carry out research in various environmental topics and
            travel across Africa. As an ecotraveler and environmental scholar, you
            would get amazing flight discounts, as well as other wonderful services
            from us. Ecotra prioritizes environmental conservation, hence your
            research project is of importance to us. 
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            <span className="font-bold">Eligibility requirements:</span>
          </p>
          <ul className="list-disc ml-6 text-gray-700 text-base sm:text-lg mb-6 space-y-1 text-left">
            <li>Must be enrolled Full-Time at a University in the United States or Canada.</li>
            <li>Must be at least 21 years old.</li>
            <li>Research must be environmentally-related.</li>
            <li>Research must be in an African country.</li>
            <li>Scholar should be willing to travel with our partner airlines.</li>
          </ul>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            <span className="font-bold">Note:</span> You may be asked to submit documents to prove your eligibility.
          </p>
          <div className="flex  sm:justify-start">
            <Link href="/about">
              <span className="inline-block bg-green-600 text-white font-semibold text-lg py-3 px-6 sm:px-8 rounded-md shadow-md hover:bg-green-700 transition cursor-pointer">
                Fill Questionnaire
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
