import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black pt-20 pb-16">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-16">
          <div className="flex justify-center items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Ecotra Travel Agency"
                width={200}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="font-semibold text-2xl text-gray-50 mb-4">
              Company
            </div>
            <ul className="space-y-4 text-gray-50 text-lg">
              <li>
                <Link href="/about" className="hover:text-green-600 transition">
                  About Ecotra
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <p className="text-gray-50 text-lg hover:text-green-500">
                123 Main St, Anytown, USA 12345
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-green-600 text-xl" />
              <a
                href="mailto:support@ecotra.com"
                className="text-gray-50 hover:text-green-500 text-lg"
              >
                support@ecotra.com
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="font-semibold text-2xl text-gray-50 mb-4">
              Navigation
            </div>
            <ul className="space-y-4 text-gray-50 text-lg">
              <li>
                <Link href="/" className="hover:text-green-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-600 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/accounts/login" className="hover:text-green-600 transition">
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/accounts/sign-up" className="hover:text-green-600 transition">
                  Sign up
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-green-600 transition">
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-green-600 transition">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-green-600 transition">
                  Tours
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="font-semibold text-2xl text-gray-50 mb-4">
              Legal
            </div>
            <ul className="space-y-4 text-gray-50 text-lg">
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-green-600 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy-policy"
                  className="hover:text-green-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-gray-50" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-lg text-gray-50 mb-4 sm:mb-0">
            &copy; Ecotra 2025 All rights reserved
          </div>
          <div className="flex space-x-6 justify-center">
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
  );
};

export default Footer;
