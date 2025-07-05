'use client';

import { contactInfo, quickLinks, socialLinks } from '../data/footerContent';

const Footer = () => {
  return (
    <footer className='bg-dark text-white px-6 py-12'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-10'>
        {/* Brand */}
        <div>
          <h2 className='text-2xl font-bold text-primary mb-2'>
            GDMT Creations
          </h2>
          <p className='text-sm text-gray-400'>
            &quot;Creating Online Presence For Professionals&quot;
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='hover:text-primary transition duration-200'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Contact</h3>
          <p className='text-sm text-gray-400'>📞 {contactInfo.phone}</p>
          <p className='text-sm text-gray-400'>📧 {contactInfo.email}</p>
          <p className='text-sm text-gray-400'>📍 {contactInfo.address}</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>
          <ul className='space-y-2 text-sm'>
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className='hover:text-primary transition duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {/* Uncomment when you add icons:
                  <span className="inline-block mr-2">{social.icon}</span> */}
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-12 text-center text-xs text-gray-500'>
        © {new Date().getFullYear()} GDMT Creations (OPC) Pvt. Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
