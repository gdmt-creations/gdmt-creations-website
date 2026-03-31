'use client';

import Image from 'next/image';
import { testimonials } from '../data/homeContent';

const Testimonials = () => {
  return (
    <section className='py-16 px-6 bg-[var(--color-background)] text-[var(--color-foreground)]'>
      <h2 className='text-3xl font-bold text-center mb-10 text-[var(--color-primary)]'>
        What Our Clients Say
      </h2>

      <div className='grid gap-8 md:grid-cols-2 max-w-5xl mx-auto'>
        {testimonials.map((t, index) => (
          <div
            key={index}
            className='bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col gap-4'
          >
            {/* Quote text */}
            <p className='text-gray-600 italic leading-relaxed'>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Client info */}
            <div className='flex items-center gap-4 mt-2'>
              <div className='relative w-14 h-14 flex-shrink-0'>
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  unoptimized
                  className='rounded-full object-cover border-2 border-[var(--color-primary)]'
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://ui-avatars.com/api/?name=' +
                      encodeURIComponent(t.name) +
                      '&background=random&color=fff&size=128';
                  }}
                />
              </div>
              <div>
                <p className='font-semibold text-gray-900 text-sm'>{t.name}</p>
                <p className='text-xs text-[var(--color-primary)]'>
                  {t.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
