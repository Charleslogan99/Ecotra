"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnvironmentalScholarTours() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen flex flex-col items-center px-4">
      <div className="max-w-4xl w-full rounded-lg overflow-hidden">
        <div className="relative h-96 w-full">
          <Image
            src="/images/tourimages/tour5.jpg"
            alt="Environmental Scholar Tours"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-10">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            Environmental Scholar Trips
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Ecotra, we provide the right platform and services for students and
            scholars who carry out research in various environmental topics and
            travel across Africa. As an ecotraveler and environmental scholar, you
            would get amazing flight discounts, as well as other wonderful services
            from us. Ecotra prioritizes environmental conservation, hence your
            research project is of importance to us. In order to support the amazing
            work you do, you stand a chance to get funding from Ecotra for your
            research project. Details of funding application and winners would be
            announced on our website on an annual basis.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            <span className="font-bold">Eligibility requirements to access our Environmental Scholar Trip Package:</span>
          </p>
          <ul className="list-disc ml-6 text-gray-700 text-lg mb-6 space-y-1">
            <li>Must be enrolled Full-Time at a University in the United States or Canada.</li>
            <li>Must be at least 21 years old.</li>
            <li>Research must be environmentally-related.</li>
            <li>Research must be in an African country.</li>
            <li>Scholar should be willing to travel with our partner airlines.</li>
          </ul>
          <p className="text-gray-700 text-lg mb-8">
            <span className="font-bold">Note:</span> You may be asked to submit documents to prove your eligibility.
          </p>
          <div className="flex justify-center">
            <Link href="/about" legacyBehavior>
              <a className="inline-block bg-green-600 text-white font-semibold text-lg py-3 px-8 rounded-md shadow-md hover:bg-green-700 transition">
                Fill Questionnaire
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
