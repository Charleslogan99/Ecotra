import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-16 text-gray-50">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Ecotra Travel Agency"
                width={200}
                height={100}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Company Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-semibold text-2xl mb-4">Company</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/about" className="hover:text-green-600 transition">
                  About Ecotra
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <p className="hover:text-green-500 transition">
                202 N Cedar Ave Ste 1 <br />
                <span className="block">Owatonna MN 55060 USA</span>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-green-600 text-xl" />
              <Link
                href="mailto:support@ecotra.org"
                className="hover:text-green-500 transition"
              >
                support@ecotra.org
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-semibold text-2xl mb-4">Navigation</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/" className="hover:text-green-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-600 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/accounts/login"
                  className="hover:text-green-600 transition"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/accounts/sign-up"
                  className="hover:text-green-600 transition"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-green-600 transition">
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-green-600 transition"
                >
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

          {/* Legal */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-semibold text-2xl mb-4">Legal</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-green-600 transition"
                >
                  Terms &amp; Conditions
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

        {/* Divider */}
        <hr className="my-12 border-green-600" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Column */}
          <div className="text-lg text-center lg:text-left">
            &copy; Ecotra 2025. All rights reserved.
          </div>

          {/* Middle Column: Follow Us */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-2xl mb-2">Follow Us</h3>
            <div className="flex space-x-8">
              <Link
                href="https://facebook.com"
                className="hover:text-green-600 transition"
              >
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-green-600 transition"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                className="hover:text-green-600 transition"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="hover:text-green-600 transition"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Right Column: Download Our App */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-2xl mb-2">Download Our App</h3>
            <div className="flex space-x-8">
              <Link
                href="/accounts/dashboard"
                className="hover:text-green-600 transition"
              >
                <FaGooglePlay className="w-6 h-6 text-green-600" />
              </Link>
              <Link
                href="/admin"
                className="hover:text-green-600 transition"
              >
                <FaApple className="w-6 h-6 text-green-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
