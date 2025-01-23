import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      // Simulate a subscription API call
      setStatus("Subscribed successfully!");
      setEmail(""); // Clear the email field
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-neutral-800 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-green-600">
          Join Our Newsletter
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg">
          Get the latest updates, tips, and exclusive offers straight to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-wrap justify-center items-center"
        >
          {/* Input Field */}
          <div className="flex w-full sm:w-2/3 rounded-md shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-base transition focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-sm text-gray-400">
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
