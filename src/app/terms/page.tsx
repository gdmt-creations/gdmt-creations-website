'use client';

import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/20 mb-6'>
            <FileText className='w-8 h-8 text-[var(--color-primary)]' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Terms &amp; Conditions</h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            These Terms and Conditions govern your access to and use of saarva.co.in and any related services, content, communications, proposals, and interactions provided by Saarva IT and Digital Services LLP.
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
            By using this website, you agree to be bound by these Terms. If you do not agree, please do not use the website.
          </p>

          <h2>1. About Us</h2>
          <p>
            Saarva IT and Digital Services LLP is a digital services business offering services that may include video production and editing, audio production, graphic design, social media development and management, web development, app development, 2D and 3D interior design-related digital services, and related creative, marketing, and technology services.
          </p>

          <h2>2. Website Use</h2>
          <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Violate any applicable law or regulation</li>
            <li>Infringe the rights of any person or entity</li>
            <li>Interfere with website operation or security</li>
            <li>Introduce malicious code</li>
            <li>Misuse contact forms and inquiry channels</li>
          </ul>

          <h2>3. No Automatic Service Contract</h2>
          <p>
            Use of this website, submission of an inquiry form, or exchange of preliminary communication does not by itself create a binding service agreement. A binding commercial relationship begins only when both parties agree to the relevant scope, pricing, deliverables, timelines, and payment terms.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            Unless otherwise stated, all website content, including text, branding, graphics, logos, layouts, icons, design elements, and original website materials are owned by or licensed to Saarva and are protected by applicable intellectual property laws.
          </p>

          <h2>5. Client Materials</h2>
          <p>
            If you submit content, media, logos, documents, creative assets, or other materials to us, you represent that you own them or have the right to share them, that their intended use will not infringe third-party rights, and that they do not violate any law or contractual obligation.
          </p>

          <h2>6. Proposals, Pricing, and Scope</h2>
          <p>
            Any proposal, quote, estimate, timeline, or service description on the website is indicative unless expressly confirmed in writing. Final pricing and scope may vary based on project complexity, revisions, asset readiness, turnaround timelines, platform requirements, third-party costs, or additional requests.
          </p>

          <h2>7. Payments</h2>
          <p>
            Where services are purchased, payment terms will be governed by the specific contract, invoice, or proposal. Delayed payments may affect project timelines, delivery schedules, or ongoing service access. Applicable taxes, levies, platform charges, or transaction charges may be added where relevant.
          </p>

          <h2>8. Revisions and Deliverables</h2>
          <p>
            Revision limits, delivery timelines, file formats, approval cycles, and handover terms will be governed by the applicable proposal or contract. Unless otherwise agreed, Saarva reserves the right to define reasonable workflow structures to manage project efficiency.
          </p>

          <h2>9. Third-Party Tools and Platforms</h2>
          <p>
            Our work may involve third-party tools, software, APIs, hosting environments, advertising platforms, or publishing platforms. We are not liable for outages, policy changes, suspensions, algorithmic shifts, pricing changes, or technical limitations imposed by such third parties.
          </p>

          <h2>10. Portfolio Rights</h2>
          <p>
            Unless otherwise agreed in writing, Saarva may display completed or published work, brand names, project excerpts, previews, thumbnails, case study summaries, or publicly available outcomes in its portfolio, social media, pitch decks, or promotional materials solely for showcasing its work.
          </p>

          <h2>11. Disclaimer</h2>
          <p>
            This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we make reasonable efforts to keep information accurate and current, we do not guarantee completeness, accuracy, uninterrupted access, or fitness for a particular purpose.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Saarva shall not be liable for any indirect, incidental, special, consequential, reputational, or loss-of-profit damages arising out of or related to your use of the website, reliance on website information, downtime or performance issues, third-party platform interruptions, or unauthorized access despite reasonable safeguards.
          </p>

          <h2>13. Indemnity</h2>
          <p>
            You agree to indemnify and hold harmless Saarva, its partners, team members, contractors, and affiliates against claims, liabilities, damages, losses, and expenses arising from your misuse of the website, breach of these Terms, submitted materials, or violation of third-party rights or applicable law.
          </p>

          <h2>14. Suspension or Restriction</h2>
          <p>
            We reserve the right to suspend, restrict, or block access to the website or any inquiry or service channel at our discretion where necessary for security, maintenance, abuse prevention, legal compliance, or operational reasons.
          </p>

          <h2>15. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by the laws of India. Any disputes arising from or relating to the website or these Terms shall be subject to the courts having jurisdiction at Gurugram, Haryana, India, 122001, unless otherwise agreed in a specific client contract.
          </p>

          <h2>16. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Updated Terms will be posted on this page with the revised date. Continued use of the website after changes may constitute acceptance of the updated Terms.
          </p>

          <h2>17. Contact</h2>
          <p>For questions regarding these Terms, contact:</p>
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
