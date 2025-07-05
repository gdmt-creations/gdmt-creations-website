'use client';

const CallToAction = () => {
  return (
    <section className='py-20 px-6 bg-indigo-600 text-white text-center'>
      <h2 className='text-3xl font-bold mb-4'>Let’s Work Together</h2>
      <p className='mb-8 text-lg max-w-xl mx-auto'>
        Your brand deserves bold ideas and brilliant execution. Let’s make it
        happen.
      </p>

      <div className='flex justify-center flex-wrap gap-4'>
        <a
          href='/contact'
          className='bg-white text-indigo-600 px-6 py-3 font-semibold rounded-lg hover:bg-gray-100 transition'
        >
          Book a Free Consultation
        </a>
        <a
          href='/portfolio'
          className='border border-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition'
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
