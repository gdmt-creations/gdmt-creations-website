'use client';

import SectionTitle from '../components/SectionTitle';
import { reasons } from '../data/homeContent';

const WhyChooseUs = () => {
  return (
    <section className='py-16 px-6 bg-[var(--color-background)] text-[var(--color-foreground)]'>
      <div className='max-w-6xl mx-auto'>
        <SectionTitle
          title='Why Choose GDMT Creations?'
          subtitle='Strategic thinking meets creative execution.'
        />

        <div className='grid gap-8 md:grid-cols-2'>
          {reasons.map(([title, desc]) => (
            <div
              key={title}
              className='flex flex-col gap-2 border-l-4 border-[var(--color-primary)] pl-4'
            >
              <h3 className='text-xl font-semibold'>{title}</h3>
              <p className='text-gray-600'>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
