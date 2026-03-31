'use client';

import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className='py-6 sm:py-20 px-4 sm:px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='relative bg-gradient-to-br from-[var(--color-primary)] to-orange-600 rounded-2xl sm:rounded-3xl px-5 py-8 sm:px-14 sm:py-16 text-center text-white overflow-hidden'>
          {/* Decorative blurs */}
          <div className='absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3' />
          <div className='absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/3' />

          <div className='relative'>
            <h2 className='text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4'>
              Let&apos;s Work Together
            </h2>
            <p className='text-white/80 mb-5 sm:mb-8 text-sm sm:text-lg max-w-xl mx-auto'>
              Your brand deserves bold ideas and brilliant execution.
            </p>

            <div className='flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4 max-w-xs sm:max-w-none mx-auto'>
              <a
                href='/contact'
                className='inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-5 py-3 font-semibold rounded-xl active:scale-95 transition-all text-sm'
              >
                Book a Free Consultation
                <ArrowRight className='w-4 h-4' />
              </a>
              <a
                href='/portfolio'
                className='inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-5 py-3 font-semibold rounded-xl active:scale-95 transition-all text-sm hover:bg-white/10'
              >
                Explore Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
