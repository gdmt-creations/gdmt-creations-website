'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface Props {
  isVisible: boolean;
}

const HERO_VIDEO_URL =
  'https://res.cloudinary.com/dijmbqxux/video/upload/v1777999335/web_hero_video_p6xldk.mp4';

const HeroVideoBackground = ({ isVisible }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  const toggleSound = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;

    setIsMuted(nextMuted);

    if (video) {
      video.muted = nextMuted;
      video.play().catch(() => {});
    }
  };

  return (
    <div className='absolute inset-0 z-0 overflow-hidden'>
      <video
        key={HERO_VIDEO_URL}
        ref={videoRef}
        className='h-full w-full object-cover pointer-events-none'
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload='auto'
        aria-hidden='true'
      >
        <source src={HERO_VIDEO_URL} type='video/mp4' />
      </video>
      <button
        type='button'
        onClick={toggleSound}
        className='absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-lg backdrop-blur transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white/80'
        aria-label={isMuted ? 'Enable video sound' : 'Mute video sound'}
        title={isMuted ? 'Enable sound' : 'Mute sound'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default HeroVideoBackground;
