'use client';

import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../data/homeContent';
import { useRef, useState, useEffect } from 'react';

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

        <div className='relative h-full rounded-2xl bg-white p-5 sm:p-8 flex flex-col'>
          {/* Icon container */}
          <div className='relative mb-3 sm:mb-6'>
            <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-light)] to-orange-50 flex items-center justify-center text-2xl sm:text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3'>
              {emoji}
            </div>
            <div
              className='absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-100 scale-0'
            />
          </div>

          {/* Content */}
          <h3 className='text-sm sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight'>
            {title}
          </h3>
          <p className='text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none'>
            {desc}
          </p>

          {/* CTA */}
          <div className='flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[var(--color-primary)] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300'>
            <span>Learn more</span>
            <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1' />
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const totalCards = services.length;

  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardWidth = el.scrollWidth / totalCards;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIdx(Math.min(idx, totalCards - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateActiveIndex, { passive: true });
    return () => el.removeEventListener('scroll', updateActiveIndex);
  });

  const scrollTo = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.scrollWidth / totalCards;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section className='relative py-8 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden'>
      {/* Subtle background decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)] opacity-[0.02] blur-[100px] pointer-events-none' />

      <div className='max-w-6xl mx-auto relative'>
        {/* Section header */}
        <div className='text-center mb-5 sm:mb-16'>
          <div className='inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-2 sm:mb-4'>
            <span className='w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse' />
            Our Services
          </div>
          <h2 className='text-xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4'>
            What We <span className='text-[var(--color-primary)]'>Do</span>
          </h2>
          <p className='text-gray-500 max-w-xl mx-auto text-xs sm:text-base px-2'>
            From stunning visuals to powerful technology — we craft end-to-end digital solutions that help your brand grow.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className='sm:hidden'>
          <div className='relative'>
            <div
              ref={scrollRef}
              className='flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-4 px-4'
            >
              {services.map(({ emoji, title, desc, slug }) => (
                <div key={title} className='snap-center flex-shrink-0 w-[70vw] max-w-[280px]'>
                  <ServiceCard emoji={emoji} title={title} desc={desc} slug={slug} />
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            <button
              onClick={() => scrollTo('left')}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center active:scale-90 transition'
              aria-label='Previous'
            >
              <ChevronLeft className='w-4 h-4 text-gray-700' />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center active:scale-90 transition'
              aria-label='Next'
            >
              <ChevronRight className='w-4 h-4 text-gray-700' />
            </button>
          </div>

          {/* Dot indicators */}
          <div className='flex justify-center gap-1.5 mt-4'>
            {services.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-6 bg-[var(--color-primary)]' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
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
        <div className='text-center mt-6 sm:mt-14'>
          <Link
            href='/services'
            className='inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[var(--color-primary)] text-white font-semibold text-xs sm:text-sm active:scale-95 hover:bg-[var(--color-primary-hover)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 hover:-translate-y-0.5'
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
