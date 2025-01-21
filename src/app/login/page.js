'use client'
import Link from 'next/link';
import Image from 'next/image';
import Translator from '@/components/layout/Translator';
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ecotra Travel Agency Logo"
              width={100}
              height={40}
             
            />
          </Link>
          {/* Translator */}
          <Translator />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-sm text-center mt-2">
          Log in to access your account.
        </p>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}