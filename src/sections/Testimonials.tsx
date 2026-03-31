'use client';

import Image from 'next/image';
import { testimonials } from '../data/homeContent';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => (
  <div className='bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 sm:gap-4 h-full'>
    {/* Quote text */}
    <p className='text-gray-600 italic leading-relaxed text-sm sm:text-base flex-grow'>
      &ldquo;{t.quote}&rdquo;
    </p>

    {/* Client info */}
    <div className='flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2'>
      <div className='relative w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0'>
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
);

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const totalCards = testimonials.length;

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
    <section className='py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-background)] text-[var(--color-foreground)]'>
      <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-[var(--color-primary)]'>
        What Our Clients Say
      </h2>

      {/* Mobile Carousel */}
      <div className='sm:hidden max-w-5xl mx-auto'>
        <div className='relative'>
          <div
            ref={scrollRef}
            className='flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-4 px-4'
          >
            {testimonials.map((t, index) => (
              <div key={index} className='snap-center flex-shrink-0 w-[80vw] max-w-[320px]'>
                <TestimonialCard t={t} />
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
          {testimonials.map((_, i) => (
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
      <div className='hidden sm:grid gap-8 md:grid-cols-2 max-w-5xl mx-auto'>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} t={t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
