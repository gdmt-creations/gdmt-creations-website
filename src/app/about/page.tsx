'use client';

import Image from 'next/image';
import { aboutData } from '@/data/aboutData';

const AboutPage = () => {
  return (
    <section className='px-6 py-20 text-gray-900 bg-white'>
      <div className='max-w-5xl mx-auto space-y-20'>

        {/* Page Header */}
        <header className='text-center'>
          <h1 className='text-4xl font-bold mb-4 text-[var(--color-primary)]'>
            About Us
          </h1>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            Who we are, what we believe, and why we exist.
          </p>
        </header>

        {/* Founder's Note — horizontal layout */}
        <section className='bg-gray-50 rounded-2xl shadow-md overflow-hidden'>
          <div className='flex flex-col md:flex-row gap-0'>
            {/* Founder Photo */}
            <div className='md:w-2/5 relative min-h-[280px] bg-[var(--color-primary)]/10 flex items-center justify-center'>
              <Image
                src='/assets/images/founderImage.jpeg'
                alt='Gaurav Dutt Misra — Founder, Saarva'
                fill
                className='object-fill'
              />
            </div>

            {/* Founder Note Text */}
            <div className='md:w-3/5 p-8 md:p-10 flex flex-col justify-center'>
              <h2 className='text-2xl font-bold mb-4 text-[var(--color-primary)]'>
                Founder&apos;s Note
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-4'>
                {aboutData.foundersNote.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {aboutData.founderSignature && (
                <div className='mt-6 pt-4 border-t border-gray-200'>
                  <p className='text-gray-900 font-semibold'>— {aboutData.founderSignature.name}</p>
                  <p className='text-gray-500 text-sm'>{aboutData.founderSignature.title}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Company Overview — text + Saarva "S" logo block */}
        <section className='bg-gray-50 rounded-2xl shadow-md overflow-hidden'>
          <div className='flex flex-col md:flex-row-reverse gap-0'>
            {/* Saarva Logo / Brand Block */}
            <div className='md:w-2/5 bg-[var(--color-primary)] flex items-center justify-center p-10 min-h-[240px]'>
              <div className='text-white text-center space-y-3'>
                <div className='text-[7rem] font-black leading-none tracking-tighter select-none'>
                  S
                </div>
                <p className='text-lg font-semibold tracking-widest uppercase opacity-90'>
                  Saarva
                </p>
                <p className='text-xs opacity-70 tracking-wide'>
                  IT &amp; Digital Services LLP
                </p>
              </div>
            </div>

            {/* Company Overview Text */}
            <div className='md:w-3/5 p-8 md:p-10 flex flex-col justify-center'>
              <h2 className='text-2xl font-bold mb-4 text-[var(--color-primary)]'>
                Company Overview
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                {aboutData.companyOverview}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className='bg-gray-50 p-8 md:p-10 rounded-2xl shadow-md'>
          <h2 className='text-2xl font-bold mb-4 text-[var(--color-primary)]'>
            Our Story
          </h2>
          <p className='text-gray-700 leading-relaxed'>{aboutData.ourStory}</p>
        </section>

        {/* Our Values */}
        <section className='bg-gray-50 p-8 md:p-10 rounded-2xl shadow-md'>
          <h2 className='text-2xl font-bold mb-6 text-[var(--color-primary)]'>
            Our Values
          </h2>
          <ul className='grid md:grid-cols-2 gap-6'>
            {aboutData.values.map(({ title, description }) => (
              <li
                key={title}
                className='border-l-4 border-[var(--color-primary)] pl-5 py-1'
              >
                <h3 className='font-semibold text-lg mb-1'>{title}</h3>
                <p className='text-gray-600'>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Remote Culture */}
        <section className='bg-gray-50 p-8 md:p-10 rounded-2xl shadow-md'>
          <h2 className='text-2xl font-bold mb-4 text-[var(--color-primary)]'>
            Remote-First Culture
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            {aboutData.remoteCulture}
          </p>
        </section>

      </div>
    </section>
  );
};

export default AboutPage;
