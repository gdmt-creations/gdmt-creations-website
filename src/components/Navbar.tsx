'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (href: string) =>
    `transition-colors px-2 py-1 rounded-md ${
      pathname === href
        ? 'text-[var(--color-primary)] font-semibold underline'
        : 'hover:text-[var(--color-primary)]'
    }`;

  return (
    <header className='bg-white fixed top-0 left-0 right-0 z-50 h-16'>
      <div className='max-w-7xl mx-auto px-6 h-full flex justify-between items-center'>
        {/* Logo with image */}
        <Link href='/' className='flex items-center'>
          <Image
            src='/assets/images/logo.svg'
            alt='Saarva Logo'
            width={160}
            height={50}
            priority
          />
          
        </Link>

        {/* Desktop nav */}
        <nav className='hidden md:flex space-x-6 text-sm font-medium text-gray-700'>
          <Link href='/' className={linkClass('/')}>
            Home
          </Link>
          <Link href='/services' className={linkClass('/services')}>
            Services
          </Link>
          <Link href='/about' className={linkClass('/about')}>
            About
          </Link>
          <Link href='/portfolio' className={linkClass('/portfolio')}>
            Portfolio
          </Link>
          <Link href='/contact' className={linkClass('/contact')}>
            Contact
          </Link>
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
        <div className='md:hidden bg-white border-t px-6 pb-4 space-y-3 text-sm text-gray-700 flex flex-col py-4'>
          <Link href='/' onClick={toggleMenu} className={linkClass('/')}>
            Home
          </Link>
          <Link
            href='/services'
            onClick={toggleMenu}
            className={linkClass('/services')}
          >
            Services
          </Link>
          <Link
            href='/about'
            onClick={toggleMenu}
            className={linkClass('/about')}
          >
            About
          </Link>
          <Link
            href='/portfolio'
            onClick={toggleMenu}
            className={linkClass('/portfolio')}
          >
            Portfolio
          </Link>
          <Link
            href='/contact'
            onClick={toggleMenu}
            className={linkClass('/contact')}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
