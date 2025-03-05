'use client';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';

const Header = ({ title, toggleSidebar }) => {
  return (
    <header className="p-4 flex items-center justify-between w-full">
      {/* Logo should always be on the left */}
      <Image src="/logo.png" alt="Ecotra Logo" width={100} height={40} className="w-24 md:w-32" />

      {/* Hamburger icon on the right for small screens */}
      <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
        <FaBars className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;
