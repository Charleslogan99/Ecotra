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
        <h2 className="text-6xl font-semibold text-green-600">
          Join Our Newsletter
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Get the latest updates, tips, and exclusive offers straight to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center"
        >
          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-3 rounded-l-md border border-gray-300 text-gray-800 sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full sm:w-auto sm:mt-0 sm:ml-0 px-4 py-3 bg-green-700 hover:bg-green-800 text-white rounded-r-md border border-gray-300 font-medium text-base transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Subscribe
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-sm text-gray-500">
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
