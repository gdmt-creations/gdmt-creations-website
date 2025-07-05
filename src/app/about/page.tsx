'use client';

import { aboutData } from '@/data/aboutData';

const AboutPage = () => {
  return (
    <section className='px-6 py-20 text-gray-900 bg-white'>
      <div className='max-w-5xl mx-auto space-y-16'>
        {/* Page Header */}
        <header className='text-center'>
          <h1 className='text-4xl font-bold mb-4 text-[var(--color-primary)]'>
            About Us
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Who we are, what we believe, and why we exist.
          </p>
        </header>

        {/* Founder's Note */}
        <section className='bg-gray-50 p-6 md:p-8 rounded-xl shadow-md'>
          <h2 className='text-2xl font-semibold mb-3 text-primary'>
            {`Founder's Note`}
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            {aboutData.foundersNote}
          </p>
        </section>

        {/* Company Overview */}
        <section className='bg-gray-50 p-6 md:p-8 rounded-xl shadow-md'>
          <h2 className='text-2xl font-semibold mb-3 text-primary'>
            Company Overview
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            {aboutData.companyOverview}
          </p>
        </section>

        {/* Our Story */}
        <section className='bg-gray-50 p-6 md:p-8 rounded-xl shadow-md'>
          <h2 className='text-2xl font-semibold mb-3 text-primary'>
            Our Story
          </h2>
          <p className='text-gray-700 leading-relaxed'>{aboutData.ourStory}</p>
        </section>

        {/* Our Values */}
        <section className='bg-gray-50 p-6 md:p-8 rounded-xl shadow-md'>
          <h2 className='text-2xl font-semibold mb-3 text-primary'>
            Our Values
          </h2>
          <ul className='grid md:grid-cols-2 gap-6'>
            {aboutData.values.map(({ title, description }) => (
              <li
                key={title}
                className='border-l-4 border-[var(--color-primary)] pl-4'
              >
                <h3 className='font-semibold text-lg mb-1'>{title}</h3>
                <p className='text-gray-600'>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Remote Culture */}
        <section className='bg-gray-50 p-6 md:p-8 rounded-xl shadow-md'>
          <h2 className='text-2xl font-semibold mb-3 text-primary'>
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
