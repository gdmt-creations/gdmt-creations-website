'use client';

import Link from 'next/link';
import { Scale, ArrowLeft } from 'lucide-react';

export default function LicensesPage() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/20 mb-6'>
            <Scale className='w-8 h-8 text-[var(--color-primary)]' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Licenses &amp; Legal Disclosures</h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Saarva IT and Digital Services LLP is committed to lawful, ethical, and transparent business operations. This page provides general legal and compliance disclosures relating to our website and business operations.
          </p>
          <p className='text-sm text-gray-500 mt-4'>
            Effective Date: 31 March 2026 &nbsp;|&nbsp; Last Updated: 31 March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className='py-16 px-6'>
        <div className='max-w-3xl mx-auto prose prose-gray prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600'>

          <h2>1. Business Details</h2>
          <div className='bg-gray-50 rounded-xl p-6 not-prose mb-6'>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li><strong className='text-gray-900'>Legal Name:</strong> Saarva IT and Digital Services LLP</li>
              <li><strong className='text-gray-900'>Website:</strong> <a href='https://saarva.co.in' className='text-[var(--color-primary)] hover:underline'>saarva.co.in</a></li>
              <li><strong className='text-gray-900'>Email:</strong> <a href='mailto:Saarva.info@gmail.com' className='text-[var(--color-primary)] hover:underline'>Saarva.info@gmail.com</a></li>
              <li><strong className='text-gray-900'>Phone:</strong> <a href='tel:+918851055230' className='text-[var(--color-primary)] hover:underline'>8851055230</a></li>
              <li><strong className='text-gray-900'>Registered Address:</strong> First Floor, Plot 737, Sector 9A, Gurugram, Haryana, 122001</li>
              <li><strong className='text-gray-900'>Jurisdiction:</strong> Gurugram, Haryana, India, 122001</li>
              <li><strong className='text-gray-900'>LLPIN / Registration Number:</strong> ACS-1419</li>
              <li><strong className='text-gray-900'>GSTIN:</strong> Not Acquired</li>
            </ul>
          </div>

          <h2>2. Nature of Services</h2>
          <p>
            Saarva provides digital, creative, marketing, production, design, and technology-related services. Service details shown on this website are for general informational purposes and may be refined through specific contracts, scopes, and proposals.
          </p>

          <h2>3. Intellectual Property Notice</h2>
          <p>
            All original website content, branding, design elements, written material, and proprietary creative assets displayed on this website are owned by or licensed to Saarva unless otherwise stated.
          </p>
          <p>
            Third-party logos, trademarks, software names, platform names, and brand references remain the property of their respective owners and are used, where applicable, for identification, compatibility, portfolio reference, or informational purposes only.
          </p>

          <h2>4. Third-Party Tools and Services</h2>
          <p>Our website and workflows may rely on third-party services such as:</p>
          <ul>
            <li>Hosting providers</li>
            <li>Analytics platforms</li>
            <li>Video or media embeds</li>
            <li>Payment or invoicing tools</li>
            <li>Email or form processing tools</li>
            <li>Cloud storage providers</li>
            <li>Social media integrations</li>
          </ul>
          <p>
            We do not claim ownership over third-party software, trademarks, or systems.
          </p>

          <h2>5. Regulatory and Legal Compliance</h2>
          <p>
            Where applicable, Saarva seeks to operate in alignment with relevant Indian legal requirements governing digital operations, including privacy, data handling, electronic records, and commercial conduct.
          </p>

          <h2>6. No Misrepresentation of Licenses</h2>
          <p>
            Unless expressly stated on this page, Saarva does not claim any government approval, certification, registration, accreditation, or sector-specific license beyond what it actually holds. Any statutory registrations, tax registrations, or business identifiers should be listed only after verification.
          </p>

          <h2>7. Client and Portfolio References</h2>
          <p>
            Any client names, brand references, sample works, testimonials, or portfolio items displayed on the website are shown subject to applicable permission, contract terms, public availability, or fair business use. If any rightful owner believes a reference has been used incorrectly, they may contact us for review.
          </p>

          <h2>8. Reporting Concerns</h2>
          <p>For concerns regarding legal notices, copyright, trademarks, privacy, or compliance matters, contact:</p>
          <div className='bg-gray-50 rounded-xl p-6 not-prose mb-6'>
            <p className='font-semibold text-gray-900 mb-2'>Saarva IT and Digital Services LLP</p>
            <ul className='space-y-1 text-sm text-gray-600'>
              <li>📧 Email: <a href='mailto:Saarva.info@gmail.com' className='text-[var(--color-primary)] hover:underline'>Saarva.info@gmail.com</a></li>
              <li>📞 Phone: <a href='tel:+918851055230' className='text-[var(--color-primary)] hover:underline'>8851055230</a></li>
              <li>📍 Address: First Floor, Plot 737, Sector 9A, Gurugram, Haryana, 122001</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className='pb-16 px-6'>
        <div className='max-w-3xl mx-auto'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm text-[var(--color-primary)] font-semibold hover:underline'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
