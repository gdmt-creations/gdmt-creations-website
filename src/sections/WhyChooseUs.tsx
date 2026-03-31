'use client';

import SectionTitle from '../components/SectionTitle';
import { reasons } from '../data/homeContent';

const WhyChooseUs = () => {
  return (
    <section className='py-8 sm:py-16 px-4 sm:px-6 bg-[var(--color-background)] text-[var(--color-foreground)]'>
      <div className='max-w-6xl mx-auto'>
        <SectionTitle
          title='Why Choose Saarva?'
          subtitle='Strategic thinking meets creative execution.'
        />

        <div className='flex flex-col gap-3 sm:gap-8 md:grid md:grid-cols-2'>
          {reasons.map(([title, desc]) => (
            <div
              key={title}
              className='flex flex-col gap-1 sm:gap-2 bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 border-l-4 border-[var(--color-primary)] sm:pl-4'
            >
              <h3 className='text-base sm:text-xl font-semibold'>{title}</h3>
              <p className='text-gray-600 text-xs sm:text-base leading-relaxed'>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
