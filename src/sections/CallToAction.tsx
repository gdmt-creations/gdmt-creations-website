'use client';

const CallToAction = () => {
  return (
    <section className='py-14 sm:py-20 px-4 sm:px-6 bg-[var(--color-primary)] text-white text-center'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Let&apos;s Work Together</h2>
      <p className='mb-6 sm:mb-8 text-base sm:text-lg max-w-xl mx-auto opacity-90'>
        Your brand deserves bold ideas and brilliant execution. Let&apos;s make it
        happen.
      </p>

      <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto'>
        <a
          href='/contact'
          className='bg-white text-[var(--color-primary)] px-6 py-3.5 font-semibold rounded-xl hover:bg-gray-100 active:scale-95 transition-all text-sm sm:text-base'
        >
          Book a Free Consultation
        </a>
        <a
          href='/portfolio'
          className='border-2 border-white px-6 py-3.5 font-semibold rounded-xl hover:bg-white hover:text-[var(--color-primary)] active:scale-95 transition-all text-sm sm:text-base'
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
