'use client';

import { useEffect, useRef, useState } from 'react';

import HeroContent from '@/components/HeroContent';
import HeroVideoBackground from '@/components/HeroVideoBackground';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative min-h-[90vh] w-full overflow-hidden bg-black text-white'
    >
      <HeroVideoBackground isVisible={isVisible} />
      <HeroContent isVisible={isVisible} />
    </section>
  );
};

export default HeroSection;
