'use client';

import { useEffect, useRef } from 'react';

interface Props {
  isVisible: boolean;
}

const HeroVideoBackground = ({ isVisible }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className='absolute inset-0 z-0 overflow-hidden'>
      <iframe
        className='w-full h-full pointer-events-none'
        src='https://www.youtube.com/embed/PtLz0ZSKmBM?autoplay=1&mute=1&loop=1&playlist=PtLz0ZSKmBM&controls=0&showinfo=0&modestbranding=1'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HeroVideoBackground;
