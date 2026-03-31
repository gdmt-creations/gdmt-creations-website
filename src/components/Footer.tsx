'use client';

import Link from 'next/link';
import Image from 'next/image';
import { contactInfo, legalLinks, quickLinks, socialLinks } from '../data/footerContent';

// Minimal SVG icon set
const SocialIcon = ({ icon }: { icon: string }) => {
  const cls = 'w-5 h-5 fill-current';
  switch (icon) {
    case 'yt':
      return (
        <svg className={cls} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z' />
        </svg>
      );
    case 'ig':
      return (
        <svg className={cls} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      );
    case 'x':
      return (
        <svg className={cls} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
        </svg>
      );
    case 'li':
      return (
        <svg className={cls} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      );
    case 'dc':
      return (
        <svg className={cls} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z' />
        </svg>
      );
    case 'fb':
      return (
        <svg className={cls} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className='bg-[#0d0d0d] text-white px-4 sm:px-6 py-10 sm:py-14'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10'>

        {/* Column 1: Brand */}
        <div className='space-y-3 sm:space-y-4 col-span-2 sm:col-span-2 lg:col-span-1'>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/images/logo.svg'
              alt='Saarva Logo'
              width={120}
              height={40}
              priority
              className='w-[100px] sm:w-[120px]'
            />
          </div>
          <p className='text-xs sm:text-sm text-gray-400 leading-relaxed'>
            Saarva IT &amp; Digital Services LLP — a full-spectrum creative
            studio crafting digital experiences that drive real-world growth.
            Design. Develop. Deliver.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4'>
            Navigation
          </h3>
          <ul className='space-y-2 text-sm'>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-gray-400 hover:text-[var(--color-primary)] transition duration-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4'>
            Legal
          </h3>
          <ul className='space-y-2 text-sm'>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-gray-400 hover:text-[var(--color-primary)] transition duration-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact + Social */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4'>
            Contact
          </h3>
          <ul className='space-y-2 text-sm text-gray-400 mb-6'>
            <li>
              <span className='mr-2'>📞</span>
              <a href={`tel:${contactInfo.phone}`} className='hover:text-[var(--color-primary)] transition'>
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <span className='mr-2'>📧</span>
              <a href={`mailto:${contactInfo.email}`} className='hover:text-[var(--color-primary)] transition'>
                {contactInfo.email}
              </a>
            </li>
            <li>
              <span className='mr-2'>📍</span>
              {contactInfo.address}
            </li>
          </ul>

          <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3'>
            Follow Us
          </h3>
          <div className='flex flex-wrap gap-4'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-[var(--color-primary)] active:scale-90 transition-all duration-200 p-1'
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='mt-8 sm:mt-12 border-t border-white/10 pt-5 sm:pt-6 text-center text-[10px] sm:text-xs text-gray-500 pb-safe'>
        &copy; 2026 Saarva IT &amp; Digital Services LLP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
