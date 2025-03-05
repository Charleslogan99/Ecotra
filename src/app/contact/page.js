import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-gray-800">
      <h2 className="text-5xl font-extrabold text-green-800 text-center mb-12">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <FaPhoneAlt className="text-3xl text-green-700" />
            <div>
              <p className="text-xl font-semibold text-gray-800">Call Us</p>
              <a href="tel:+18001234567" className="text-lg text-gray-600">
                +1 (800) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <FaEnvelope className="text-3xl text-green-700" />
            <div>
              <p className="text-xl font-semibold text-gray-800">Email Us</p>
              <a
                href="mailto:contact@ecotra.com"
                className="text-lg text-gray-600"
              >
                support@ecotra.org
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <FaMapMarkerAlt className="text-3xl text-green-700" />
            <div>
              <p className="text-xl font-semibold text-gray-800">Visit Us</p>
              <p className="hover:text-green-500 transition">
                202 N Cedar Ave Ste 1 <br />
                <span className="block">Owatonna MN 55060 USA</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <FaWhatsapp className="text-3xl text-green-700" />
            <div>
              <p className="text-xl font-semibold text-gray-800">Chat Us</p>
              <a
                href="https://wa.me/19328362738"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-600"
              >
                +1 (932) 836-2738
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="bg-white p-6 sm:p-10 rounded-lg shadow-md space-y-8">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="name"
                    className="text-lg font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="email"
                    className="text-lg font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white py-4 px-8 rounded-md text-lg font-semibold transition-all hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="mt-16">
        <h3 className="text-4xl text-center font-extrabold text-green-800 mb-6">
          Follow Us
        </h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Stay connected with us on our social media channels for updates, news,
          and special offers. Join the Ecotra community and be part of the
          travel revolution!
        </p>

        <div className="flex justify-center space-x-12">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-800 transform hover:scale-110 transition-transform duration-200"
          >
            <FaFacebookF className="text-4xl sm:text-5xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-800 transform hover:scale-110 transition-transform duration-200"
          >
            <FaTwitter className="text-4xl sm:text-5xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-800 transform hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram className="text-4xl sm:text-5xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-800 transform hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedinIn className="text-4xl sm:text-5xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
