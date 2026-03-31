'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/homeContent';

const ServiceCard = ({
  emoji,
  title,
  desc,
  slug,
}: {
  emoji: string;
  title: string;
  desc: string;
  slug: string;
}) => {
  return (
    <Link href={`/services/${slug}`} className='group block'>
      <div className='relative h-full overflow-hidden rounded-2xl bg-white border border-gray-100 p-[1px] transition-all duration-500 hover:border-transparent hover:shadow-[0_8px_40px_rgba(241,101,65,0.15)]'>
        {/* Animated gradient border on hover */}
        <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--color-primary)] via-orange-400 to-amber-400' />

        <div className='relative h-full rounded-2xl bg-white p-8 flex flex-col'>
          {/* Icon container */}
          <div className='relative mb-6'>
            <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-light)] to-orange-50 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3'>
              {emoji}
            </div>
            {/* Decorative dot */}
            <div
              className='absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-100 scale-0'
            />
          </div>

          {/* Content */}
          <h3 className='text-lg font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-gray-500 text-sm leading-relaxed flex-grow mb-5'>
            {desc}
          </p>

          {/* CTA */}
          <div className='flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
            <span>Learn more</span>
            <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  return (
    <section className='relative py-24 px-6 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden'>
      {/* Subtle background decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)] opacity-[0.02] blur-[100px] pointer-events-none' />

      <div className='max-w-6xl mx-auto relative'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold tracking-wide uppercase mb-4'>
            <span className='w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse' />
            Our Services
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            What We <span className='text-[var(--color-primary)]'>Do</span>
          </h2>
          <p className='text-gray-500 max-w-xl mx-auto text-base'>
            From stunning visuals to powerful technology — we craft end-to-end digital solutions that help your brand grow.
          </p>
        </div>

        {/* Cards grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map(({ emoji, title, desc, slug }) => (
            <ServiceCard
              key={title}
              emoji={emoji}
              title={title}
              desc={desc}
              slug={slug}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-14'>
          <Link
            href='/services'
            className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-hover)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 hover:-translate-y-0.5'
          >
            View All Services
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
