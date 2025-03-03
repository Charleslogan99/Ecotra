"use client";

import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <h1 className="text-6xl font-bold text-green-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page <span className="font-semibold text-red-500">{pathname}</span> does not exist.
      </p>
      <button
        onClick={() => router.back()}
        className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-lg text-white shadow-md transition hover:bg-green-700"
      >
        Go Back
      </button>
    </div>
  );
}
