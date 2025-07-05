'use client';

const HeroSection = () => {
  return (
    <section className='min-h-[90vh] bg-white text-gray-900 flex flex-col justify-center items-center text-center px-6 py-20'>
      <h1 className='text-4xl md:text-6xl font-bold mb-4'>
        Welcome to <span className='text-[#F24E42]'>GDMT Creations</span>
      </h1>

      <p className='text-xl md:text-2xl mb-6 text-gray-700'>
        Digital Ideas. Designed to Deliver.
      </p>

      <p className='max-w-2xl text-lg text-gray-600 mb-8'>
        We are a full-spectrum creative agency empowering businesses to grow,
        connect, and thrive in the digital world. Whether you’re building a
        brand or scaling a business, our team transforms ideas into strategic,
        high-impact outcomes.
      </p>

      <a
        href='/contact'
        className='bg-[#F24E42] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-red-600 transition'
      >
        Let’s Collaborate
      </a>
    </section>
  );
};

export default HeroSection;
