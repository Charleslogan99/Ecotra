"use client";

import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

export function Stats() {
  const stats = [
    { id: 1, name: "Countries", value: 20 },
    { id: 2, name: "Bookings Completed", value: 60 },
    { id: 3, name: "Clients Globally", value: 500 },
  ];

  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStartCounting(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div ref={statsRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {startCounting ? (
                  <CountUp start={0} end={stat.value} duration={3} key={stat.id + startCounting} />
                ) : (
                  0
                )}
                +
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
