"use client";

import Image from "next/image";
import Link from "next/link";

export default function MysteryTours() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen flex flex-col items-center px-4">
      <div className="max-w-4xl w-full rounded-lg overflow-hidden">
         <div className="flex justify-center">
                  <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-80 sm:h-96">
                    <Image
                      src="/images/tourimages/mysterytours.avif"
                      alt="Environmental Scholar Tours"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
        
        <div className="p-2">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            Mystery Tours
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Confused about where to explore in Africa? We got you! Fill out a questionnaire
            about your travel fantasies, and we would recommend the perfect trip for you based on interests.
            Remember, Ecotra believes in giving you the best travel experiences.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            For more details on how to book a Mystery Trip, visit our Ecotra App.
          </p>
          <div className="flex justify-cente">
            <Link href="/contact" legacyBehavior>
              <a className="inline-block bg-green-600 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition">
                Fill Questionnaire
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
