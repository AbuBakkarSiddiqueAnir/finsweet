
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface NavbarProps {
  brand: string;
}

const Navbar: React.FC<NavbarProps> = ({ brand }) => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href='/'>
            <Image width={130} height={26} alt='logo' src={brand} />
            </Link>

          </div>
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/about" className="text-base text-lg font-base">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;