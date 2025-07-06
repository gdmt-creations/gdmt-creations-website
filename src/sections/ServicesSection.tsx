'use client';

import Link from 'next/link';
import { services } from '../data/homeContent';

const ServicesSection = () => {
  return (
    <section className='py-20 px-6 bg-[var(--color-background)] text-[var(--color-foreground)]'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-14 text-[var(--color-primary)]'>
          What We Do
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map(({ emoji, title, desc, slug }) => (
            <Link key={title} href={`/services/${slug}`} className='group'>
              <div className='bg-white rounded-xl border-t-4 border-[var(--color-primary)] shadow-md group-hover:shadow-lg transition-all p-8 text-center hover:scale-[1.02]'>
                <div className='text-5xl mb-4'>{emoji}</div>
                <h3 className='text-xl font-semibold mb-3 text-[var(--color-primary)] group-hover:underline'>
                  {title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
