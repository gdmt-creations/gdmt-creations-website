'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className='bg-white/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/assets/images/logo.svg'
              alt='Saarva Logo'
              width={130}
              height={42}
              priority
              className='w-[110px] sm:w-[130px] h-auto'
            />
          </Link>

          {/* Desktop nav */}
          <nav className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-gray-600 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 active:bg-gray-100 transition-colors'
            aria-label='Toggle Menu'
          >
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className='h-16 flex items-center justify-between px-5 border-b border-gray-100'>
          <span className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className='w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 active:bg-gray-100'
            aria-label='Close Menu'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Drawer links */}
        <nav className='flex flex-col py-4 px-3'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                  : 'text-gray-700 active:bg-gray-50'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className='ml-auto w-2 h-2 rounded-full bg-[var(--color-primary)]' />
              )}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className='absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100'>
          <Link
            href='/contact'
            onClick={() => setIsOpen(false)}
            className='block w-full text-center py-3.5 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm active:bg-[var(--color-primary-hover)] transition-colors'
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
