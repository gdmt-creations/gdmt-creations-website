'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { contactInfo, legalLinks, quickLinks, socialLinks } from '@/data/footerContent';

// ── Minimal social SVG icons ──────────────────────────────────────────────────
const SocialIcon = ({ icon }: { icon: string }) => {
  const cls = 'w-4 h-4 fill-current';
  switch (icon) {
    case 'yt': return <svg className={cls} viewBox='0 0 24 24'><path d='M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z'/></svg>;
    case 'ig': return <svg className={cls} viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/></svg>;
    case 'x':  return <svg className={cls} viewBox='0 0 24 24'><path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z'/></svg>;
    case 'li': return <svg className={cls} viewBox='0 0 24 24'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>;
    default: return null;
  }
};

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
      <header
        className='bg-white/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100 navbar-fixed'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex justify-between items-center'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/assets/images/logo.svg'
              alt='Saarva Logo'
              width={130}
              height={42}
              priority
              className='w-[100px] md:w-[130px] h-auto'
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

          {/* Mobile "Know More" text button — visible on mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-xs font-medium text-[var(--color-primary)] active:opacity-70 transition'
            aria-label='Know More'
          >
            Know more
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

      {/* Mobile info drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className='flex items-center justify-between px-4 py-3 border-b border-gray-100'>
          <div className='flex items-center gap-2'>
            <Image
              src='/assets/images/logo2.svg'
              alt='Saarva'
              width={24}
              height={24}
            />
            <div>
              <p className='text-sm font-bold text-gray-900 leading-tight'>Saarva</p>
              <p className='text-[9px] text-gray-400 leading-tight'>IT &amp; Digital Services LLP</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 active:bg-gray-200'
            aria-label='Close'
          >
            <X className='w-3.5 h-3.5' />
          </button>
        </div>

        {/* Address bar */}
        <div className='px-4 py-2.5 bg-gray-50 border-b border-gray-100 flex items-center gap-2 text-xs text-gray-500'>
          <span>📍</span>
          <span>{contactInfo.address}</span>
        </div>

        {/* Scrollable body */}
        <div className='flex-1 overflow-y-auto px-4 py-4 space-y-5'>

          {/* Contact Actions */}
          <div className='flex gap-2'>
            <a 
              href={`tel:${contactInfo.phone}`} 
              className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green-50 text-green-700 text-xs font-medium active:bg-green-100'
            >
              <span>📞</span> Call Us
            </a>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-medium active:bg-blue-100'
            >
              <span>📧</span> Email Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2'>Quick Links</p>
            <div className='grid grid-cols-2 gap-1.5'>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-xs text-gray-700 px-3 py-2 rounded-lg bg-gray-50 active:bg-[var(--color-primary-light)] active:text-[var(--color-primary)] transition'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <p className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2'>Follow Us</p>
            <div className='flex gap-2'>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.label}
                  className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 active:bg-[var(--color-primary)] active:text-white transition-all'
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2'>Legal</p>
            <div className='space-y-0.5'>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='flex items-center justify-between text-xs text-gray-500 py-2 active:text-[var(--color-primary)]'
                >
                  {link.label}
                  <ChevronRight className='w-3.5 h-3.5 text-gray-300' />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className='px-4 pb-safe pt-3 border-t border-gray-100 bg-white'>
          <Link
            href='/contact'
            onClick={() => setIsOpen(false)}
            className='block w-full text-center py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm active:bg-[var(--color-primary-hover)] transition-colors'
          >
            Get in Touch
          </Link>
          <p className='text-[9px] text-center text-gray-400 mt-2 pb-1'>
            © 2026 Saarva IT &amp; Digital Services LLP
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
