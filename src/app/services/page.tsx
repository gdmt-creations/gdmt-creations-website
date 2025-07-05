'use client';

import { ArrowRightCircle, ArrowRightCircleIcon } from 'lucide-react';

import { servicesList } from '@/data/servicesData';

type Service = {
  title: string;
  subtitle: string;
  points: string[];
  cta: {
    label: string;
    link: string;
  };
  slug: string;
};

const ServicesPage = () => {
  return (
    <section className='px-6 py-20 bg-white text-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-4 text-[var(--color-primary)]'>
          Our Services
        </h1>
        <p className='text-center mb-14 text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Integrated. Insightful. Impact-Driven.
          <br />
          At <strong>GDMT Creations</strong>, we offer a full suite of creative
          and strategic services to elevate your brand and drive measurable
          growth.
        </p>

        <div className='flex flex-col gap-16'>
          {servicesList.map(
            ({ title, subtitle, points, cta, slug }: Service, idx: number) => {
              const isReversed = idx % 2 !== 0;

              return (
                <div
                  key={title}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isReversed ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className='w-full md:w-1/3 h-40 bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center rounded-xl'>
                    <span className='text-[var(--color-primary)] text-4xl font-bold'>
                      {title.split(' ')[0]}
                    </span>
                  </div>

                  <div className='w-full md:w-2/3 bg-gray-50 p-6 sm:p-8 rounded-xl border-l-4 border-[var(--color-primary)] shadow-md hover:shadow-lg transition-all'>
                    <h2 className='text-2xl font-semibold text-[var(--color-primary)] mb-2'>
                      {title}
                    </h2>
                    <p className='mb-4 text-gray-700'>{subtitle}</p>
                    <ul className='list-disc list-inside space-y-1 text-gray-700 text-sm'>
                      {points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className='mt-5 flex flex-wrap gap-4'>
                      <a
                        href={cta.link}
                        className='bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition flex gap-2 items-center'
                      >
                        {cta.label}
                        <ArrowRightCircleIcon size={20} />
                      </a>
                      <a
                        href={`/services/${slug}`}
                        className='border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-md font-medium hover:bg-[var(--color-primary)] hover:text-white transition flex gap-2 items-center'
                      >
                        View More <ArrowRightCircleIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
