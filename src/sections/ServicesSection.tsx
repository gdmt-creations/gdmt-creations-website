'use client';

import { services } from '../data/homeContent';

const ServicesSection = () => {
  return (
    <section className='py-20 px-6 bg-gray-50 text-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-14 text-primary'>
          What We Do
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map(({ emoji, title, desc }) => (
            <div
              key={title}
              className='bg-white rounded-xl border-t-4 border-primary shadow-md hover:shadow-lg transition-shadow p-8 text-center'
            >
              <div className='text-5xl mb-4'>{emoji}</div>
              <h3 className='text-xl font-semibold mb-3'>{title}</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
