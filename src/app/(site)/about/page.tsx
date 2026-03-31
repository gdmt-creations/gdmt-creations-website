'use client';

import Image from 'next/image';
import { aboutData } from '@/data/aboutData';

const AboutPage = () => {
  return (
    <section className='px-4 sm:px-6 py-8 sm:py-20 text-gray-900 bg-white'>
      <div className='max-w-5xl mx-auto space-y-6 sm:space-y-20'>

        {/* Page Header */}
        <header className='text-center'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-[var(--color-primary)]'>
            About Us
          </h1>
          <p className='text-gray-500 max-w-2xl mx-auto text-xs sm:text-base'>
            Who we are, what we believe, and why we exist.
          </p>
        </header>

        {/* Founder's Note — horizontal layout */}
        <section className='bg-gray-50 rounded-2xl overflow-hidden'>
          <div className='flex flex-col md:flex-row gap-0'>
            {/* Founder Photo */}
            <div className='md:w-2/5 relative min-h-[200px] md:min-h-[400px] bg-[var(--color-primary)]/10'>
              <Image
                src='/assets/images/founderImage.jpeg'
                alt='Gaurav Dutt Misra — Founder, Saarva'
                fill
                className='object-cover object-top'
              />
            </div>

            {/* Founder Note Text */}
            <div className='md:w-3/5 p-4 sm:p-8 md:p-10 flex flex-col justify-center'>
              <h2 className='text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[var(--color-primary)]'>
                Founder&apos;s Note
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-2.5 sm:space-y-4 text-xs sm:text-base'>
                {aboutData.foundersNote.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {aboutData.founderSignature && (
                <div className='mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200'>
                  <p className='text-gray-900 font-semibold text-sm sm:text-base'>— {aboutData.founderSignature.name}</p>
                  <p className='text-gray-500 text-xs sm:text-sm'>{aboutData.founderSignature.title}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Company Overview — text + Saarva "S" logo block */}
        <section className='bg-gray-50 rounded-2xl overflow-hidden'>
          <div className='flex flex-col md:flex-row-reverse gap-0'>
            {/* Saarva Logo / Brand Block */}
            <div className='md:w-2/5 bg-[var(--color-primary)] flex items-center justify-center p-6 sm:p-10 min-h-[160px] sm:min-h-[240px]'>
              <div className='text-white text-center space-y-3 sm:space-y-4'>
                <div className='relative w-20 h-20 sm:w-32 sm:h-32 mx-auto'>
                  <Image
                    src='/assets/images/logo2.svg'
                    alt='Saarva Logo'
                    fill
                    className='object-contain drop-shadow-lg'
                  />
                </div>
                <div>
                  <p className='text-base sm:text-lg font-semibold tracking-widest uppercase opacity-90'>
                    Saarva
                  </p>
                  <p className='text-[10px] sm:text-xs opacity-70 tracking-wide'>
                    IT &amp; Digital Services LLP
                  </p>
                </div>
              </div>
            </div>

            {/* Company Overview Text */}
            <div className='md:w-3/5 p-4 sm:p-8 md:p-10 flex flex-col justify-center'>
              <h2 className='text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[var(--color-primary)]'>
                Company Overview
              </h2>
              <p className='text-gray-700 leading-relaxed text-xs sm:text-base'>
                {aboutData.companyOverview}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className='bg-gray-50 p-4 sm:p-8 md:p-10 rounded-2xl'>
          <h2 className='text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[var(--color-primary)]'>
            Our Story
          </h2>
          <p className='text-gray-700 leading-relaxed text-xs sm:text-base'>{aboutData.ourStory}</p>
        </section>

        {/* Our Values */}
        <section className='bg-gray-50 p-4 sm:p-8 md:p-10 rounded-2xl'>
          <h2 className='text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-[var(--color-primary)]'>
            Our Values
          </h2>
          <ul className='grid gap-3 sm:gap-6 md:grid-cols-2'>
            {aboutData.values.map(({ title, description }) => (
              <li
                key={title}
                className='border-l-4 border-[var(--color-primary)] pl-3 sm:pl-5 py-0.5 sm:py-1'
              >
                <h3 className='font-semibold text-sm sm:text-lg mb-0.5 sm:mb-1'>{title}</h3>
                <p className='text-gray-600 text-xs sm:text-base'>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Remote Culture */}
        <section className='bg-gray-50 p-4 sm:p-8 md:p-10 rounded-2xl'>
          <h2 className='text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[var(--color-primary)]'>
            Remote-First Culture
          </h2>
          <p className='text-gray-700 leading-relaxed text-xs sm:text-base'>
            {aboutData.remoteCulture}
          </p>
        </section>

      </div>
    </section>
  );
};

export default AboutPage;
