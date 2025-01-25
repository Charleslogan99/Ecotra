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
      setStatus("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-zinc-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Join Our Newsletter
        </h2>
        <p className="mt-4 text-lg sm:text-xl opacity-80">
          Get the latest updates, tips, and exclusive offers straight to your
          inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mt-10 flex flex-wrap justify-center items-center space-x-4"
        >
          <div className="flex w-full sm:w-2/3 rounded-lg shadow-lg overflow-hidden bg-white">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 text-gray-700 placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-green-500 rounded-l-lg"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded-r-lg"
            >
              Subscribe
            </button>
          </div>
        </form>

        {status && (
          <p
            className={`mt-6 text-sm ${
              status.includes("success") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
