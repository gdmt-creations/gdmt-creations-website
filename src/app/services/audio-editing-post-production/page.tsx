'use client';

import DetailPageWrapper from '@/components/DetailPageWrapper';
import audioEditingData from '@/data/services/audioEditingData';

const AudioEditingPage = () => {
  return (
    <DetailPageWrapper title={audioEditingData.title} backHref='/services'>
      <p className='text-center text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed'>
        {audioEditingData.description}
      </p>

      <div className='space-y-10'>
        {audioEditingData.offerings.map(({ title, desc }) => (
          <div
            key={title}
            className='bg-gray-50 p-6 sm:p-8 rounded-xl border-l-4 border-[var(--color-primary)] shadow-sm hover:shadow-md transition'
          >
            <h2 className='text-xl font-semibold text-[var(--color-primary)] mb-1'>
              {title}
            </h2>
            <p className='text-gray-700 text-sm'>{desc}</p>
          </div>
        ))}
      </div>

      <div className='mt-16 grid gap-6 md:grid-cols-2 text-sm text-gray-800'>
        <div>
          <h3 className='text-lg font-semibold text-[var(--color-primary)] mb-2'>
            Why Choose GDMT Creations?
          </h3>
          <ul className='list-disc list-inside space-y-1'>
            {audioEditingData.benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold text-[var(--color-primary)] mb-2'>
            Our Process
          </h3>
          <ol className='list-decimal list-inside space-y-1'>
            {audioEditingData.process.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <blockquote className='mt-12 text-center italic text-gray-600 max-w-2xl mx-auto'>
        {audioEditingData.testimonial}
      </blockquote>

      <div className='mt-12 flex justify-center gap-4 flex-wrap'>
        {audioEditingData.ctaButtons.map(({ label, link }) => (
          <a
            key={label}
            href={link}
            className='bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition'
          >
            {label}
          </a>
        ))}
      </div>
    </DetailPageWrapper>
  );
};

export default AudioEditingPage;
