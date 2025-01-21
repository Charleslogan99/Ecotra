import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black pt-20 pb-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Logo and Description */}
          <div className="flex flex-col items-start space-y-8">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png" // Replace with your actual logo path
                alt="Ecotra Travel Agency"
                width={200}
                height={100}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-50 text-lg md:text-xl leading-relaxed">
              Book your trip in minutes and get full control for much longer.
              Explore the world with us!
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-6">
            <div className="font-semibold text-2xl text-gray-50 mb-4">
              Company
            </div>
            <ul className="space-y-4 text-gray-50 text-lg">
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col space-y-6">
            <div className="font-semibold text-2xl text-gray-50 mb-4">
              Contact
            </div>
            <ul className="space-y-4 text-gray-50 text-lg">
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="flex flex-col space-y-6">
            <div className="font-semibold text-2xl text-gray-50 mb-4">More</div>
            <ul className="space-y-4 text-gray-50 text-lg">
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Airline Fees
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Airlines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-600 transition">
                  Low Fare Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col justify-start items-start space-y-8 md:items-center md:justify-center md:space-y-0 md:space-x-8">
            <div className="text-gray-50 text-lg font-semibold mb-6">
              Follow Us
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://facebook.com"
                className="text-gray-50 hover:text-green-600 transition"
              >
                <FaFacebookF className="w-8 h-8" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-50 hover:text-green-600 transition"
              >
                <FaInstagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-50 hover:text-green-600 transition"
              >
                <FaTwitter className="w-8 h-8" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-50 hover:text-green-600 transition"
              >
                <FaLinkedinIn className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-lg text-center text-gray-50 mt-12 md:mt-16">
        © Ecotra 2025 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
