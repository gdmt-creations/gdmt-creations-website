interface Props {
  isVisible: boolean;
}

const HeroContent = ({ isVisible }: Props) => {
  return (
    <div
      className={`absolute z-10 transition-all duration-700 ease-in-out ${
        isVisible
          ? // Video IS playing - compact, bottom-left
            'bottom-3 left-3 sm:bottom-10 sm:left-10 w-[80%] sm:max-w-sm backdrop-blur-md bg-white/5 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-left scale-90 origin-bottom-left'
          : // Video NOT playing - large, centered
            'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:max-w-2xl text-center scale-100'
      }`}
    >
      <h1
        className={`font-bold mb-1.5 sm:mb-4 transition-all duration-700 ${
          isVisible
            ? 'text-base sm:text-2xl md:text-3xl'
            : 'text-xl sm:text-4xl md:text-6xl'
        }`}
      >
        Welcome to{' '}
        <span className='text-[var(--color-primary)]'>Saarva</span>
      </h1>

      <p
        className={`mb-2 sm:mb-4 text-gray-200 transition-all duration-700 ${
          isVisible ? 'text-xs sm:text-base' : 'text-base sm:text-xl md:text-2xl'
        }`}
      >
        Digital Ideas. Designed to Deliver.
      </p>

      {!isVisible && (
        <p className='text-sm sm:text-lg text-gray-300 mb-5 sm:mb-8 leading-relaxed'>
          We are a full-spectrum creative agency empowering businesses to grow,
          connect, and thrive in the digital world. Whether you&apos;re building
          a brand or scaling a business, our team transforms ideas into
          strategic, high-impact outcomes.
        </p>
      )}

      <a
        href='/contact'
        className={`inline-block bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:brightness-110 active:scale-95 transition-all ${
          isVisible
            ? 'px-4 py-2 text-xs sm:text-sm'
            : 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-lg'
        }`}
      >
        Let&apos;s Collaborate
      </a>
    </div>
  );
};

export default HeroContent;
