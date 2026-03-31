'use client';

import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/20 mb-6'>
            <Shield className='w-8 h-8 text-[var(--color-primary)]' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Privacy Policy</h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Saarva IT and Digital Services LLP (&quot;Saarva,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data.
          </p>
          <p className='text-sm text-gray-500 mt-4'>
            Effective Date: 31 March 2026 &nbsp;|&nbsp; Last Updated: 31 March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className='py-16 px-6'>
        <div className='max-w-3xl mx-auto prose prose-gray prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600'>
          <p className='lead text-lg text-gray-600 mb-8'>
            This Privacy Policy explains how we collect, use, store, disclose, and protect information when you visit saarva.co.in, contact us, submit an inquiry, request our services, or otherwise interact with us online.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li><strong>Personal information you provide directly:</strong> full name, email address, phone number, company name, project requirements, inquiry details, billing information, and contractual information.</li>
            <li><strong>Information collected automatically:</strong> IP address, browser type and version, device type, operating system, referral source, pages visited, and time spent on the website.</li>
            <li><strong>Business and project-related materials:</strong> creative briefs, brand assets, media files, feedback, and other materials needed to perform the agreed scope of work.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We may use your information to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Evaluate business opportunities</li>
            <li>Provide and improve services</li>
            <li>Create proposals and invoices</li>
            <li>Operate and secure the website</li>
            <li>Maintain internal records</li>
            <li>Comply with legal obligations</li>
            <li>Protect our legal rights</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies, analytics tools, and similar technologies to understand website traffic, improve user experience, measure marketing performance, and maintain website functionality.
          </p>
          <p>
            You may choose to disable cookies through your browser settings, although some parts of the website may not function properly if cookies are disabled.
          </p>

          <h2>4. Legal Basis / Consent</h2>
          <p>Where required, we process personal data based on:</p>
          <ul>
            <li>Your consent</li>
            <li>Your voluntary submission of information</li>
            <li>Performance of a contract or pre-contractual request</li>
            <li>Compliance with law</li>
            <li>Other lawful uses permitted under applicable law</li>
          </ul>

          <h2>5. Sharing of Information</h2>
          <p>We do not sell your personal data.</p>
          <p>
            We may share information only when reasonably necessary with employees, consultants, authorized team members, service providers, legal or compliance advisors, government or regulatory authorities where required by law, and successors in the event of a restructuring, merger, or transfer.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal data only for as long as reasonably necessary for responding to inquiries, fulfilling contractual obligations, maintaining records, resolving disputes, enforcing agreements, or meeting legal, tax, and regulatory obligations.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We use reasonable technical, organizational, and administrative safeguards to protect information against unauthorized access, disclosure, alteration, misuse, or destruction. However, no website, database, server, transmission method, or storage system can be guaranteed to be fully secure.
          </p>

          <h2>8. Your Rights</h2>
          <p>Subject to applicable law, you may have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction or erasure where appropriate</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Contact us with concerns relating to the processing of your data</li>
          </ul>

          <h2>9. Third-Party Links and Platforms</h2>
          <p>
            Our website may contain links to third-party platforms, social media pages, embedded content, or external websites. We are not responsible for the privacy practices, terms, security, or content of such third parties.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our website and services are not intended for children, and we do not knowingly collect personal data from children through the website without lawful authorization where required.
          </p>

          <h2>11. International Transfers</h2>
          <p>
            If our vendors, tools, collaborators, or cloud systems process data outside India, your information may be transferred and stored in jurisdictions other than your own, subject to reasonable contractual and security safeguards and applicable law.
          </p>

          <h2>12. Grievance / Contact</h2>
          <p>For questions, requests, or privacy concerns, please contact:</p>
          <div className='bg-gray-50 rounded-xl p-6 not-prose mb-6'>
            <p className='font-semibold text-gray-900 mb-2'>Saarva IT and Digital Services LLP</p>
            <ul className='space-y-1 text-sm text-gray-600'>
              <li>📧 Email: <a href='mailto:Saarva.info@gmail.com' className='text-[var(--color-primary)] hover:underline'>Saarva.info@gmail.com</a></li>
              <li>📞 Phone: <a href='tel:+918851055230' className='text-[var(--color-primary)] hover:underline'>8851055230</a></li>
              <li>📍 Address: First Floor, Plot 737, Sector 9A, Gurugram, Haryana, 122001</li>
            </ul>
          </div>

          <h2>13. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any revised version will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of the website after changes may constitute acceptance of the revised policy.
          </p>
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
