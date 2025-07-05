'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-2xl font-bold text-[var(--color-primary)]'
        >
          GDMT Creations
        </Link>

        {/* Desktop nav */}
        <nav className='hidden md:flex space-x-6 text-sm font-medium text-gray-700'>
          <Link href='/'>Home</Link>
          <Link href='/services'>Services</Link>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-gray-700 focus:outline-none'
          aria-label='Toggle Menu'
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t px-6 pb-4 space-y-3 text-sm text-gray-700'>
          <Link href='/' onClick={toggleMenu}>
            Home
          </Link>
          <Link href='/services' onClick={toggleMenu}>
            Services
          </Link>
          <Link href='/portfolio' onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link href='/about' onClick={toggleMenu}>
            About
          </Link>
          <Link href='/contact' onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
