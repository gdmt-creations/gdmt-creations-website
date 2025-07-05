'use client';

import { testimonials } from '../data/homeContent';

const Testimonials = () => {
  return (
    <section className='py-16 px-6 bg-gray-100 text-gray-900'>
      <h2 className='text-3xl font-bold text-center mb-10'>
        What Our Clients Say
      </h2>

      <div className='grid gap-8 md:grid-cols-2 max-w-5xl mx-auto'>
        {testimonials.map((quote, index) => (
          <blockquote
            key={index}
            className='bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 italic'
          >
            “{quote}”
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
