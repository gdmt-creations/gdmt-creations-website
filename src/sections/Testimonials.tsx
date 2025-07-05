'use client';

import { testimonials } from '../data/homeContent';

const Testimonials = () => {
  return (
    <section className='py-16 px-6 bg-[var(--color-background)] text-[var(--color-foreground)]'>
      <h2 className='text-3xl font-bold text-center mb-10 text-[var(--color-primary)]'>
        What Our Clients Say
      </h2>

      <div className='grid gap-8 md:grid-cols-2 max-w-5xl mx-auto'>
        {testimonials.map((quote, index) => (
          <blockquote
            key={index}
            className='bg-white p-6 rounded-xl shadow-md border-l-4 border-[var(--color-primary)] italic text-gray-700'
          >
            “{quote}”
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
