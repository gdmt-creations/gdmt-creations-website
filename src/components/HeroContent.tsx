interface Props {
  isVisible: boolean;
}

const HeroContent = ({ isVisible }: Props) => {
  return (
    <div
      className={`absolute z-10 w-[90%] sm:max-w-2xl transition-all duration-700 ${
        isVisible
          ? 'bottom-6 left-4 sm:bottom-10 sm:left-10 backdrop-blur-md bg-white/2 border border-white/20 rounded-xl p-4 sm:p-6 text-left'
          : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
      }`}
    >
      <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4'>
        Welcome to{' '}
        <span className='text-[var(--color-primary)]'>GDMT Creations</span>
      </h1>

      <p className='text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-200'>
        Digital Ideas. Designed to Deliver.
      </p>

      <p className='text-base sm:text-lg text-gray-300 mb-6 sm:mb-8'>
        We are a full-spectrum creative agency empowering businesses to grow,
        connect, and thrive in the digital world. Whether you’re building a
        brand or scaling a business, our team transforms ideas into strategic,
        high-impact outcomes.
      </p>

      <a
        href='/contact'
        className='inline-block bg-[var(--color-primary)] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg hover:brightness-110 transition'
      >
        Let’s Collaborate
      </a>
    </div>
  );
};

export default HeroContent;
