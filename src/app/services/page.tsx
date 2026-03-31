'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesList } from '@/data/servicesData';

// ─── Emoji icons per service (matched by slug) ─────────────────────────────────
const serviceIcons: Record<string, string> = {
  'graphic-designing': '🎨',
  'video-editing-post-production': '🎬',
  'audio-editing-post-production': '🎧',
  'website-design-development': '💻',
  'app-design-development': '📱',
  'agentic-ai-design-development': '🤖',
  'interior-design': '🏡',
  'social-media-management': '📣',
};

// ─── Gradient pairs for each card ───────────────────────────────────────────────
const cardGradients = [
  'from-rose-500/10 to-orange-400/10',
  'from-violet-500/10 to-fuchsia-400/10',
  'from-cyan-500/10 to-blue-400/10',
  'from-emerald-500/10 to-teal-400/10',
  'from-amber-500/10 to-yellow-400/10',
  'from-indigo-500/10 to-purple-400/10',
  'from-pink-500/10 to-rose-400/10',
  'from-sky-500/10 to-cyan-400/10',
];

const accentColors = [
  'bg-rose-500',
  'bg-violet-500',
  'bg-cyan-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-sky-500',
];

// ─── Scroll-triggered animation hook ────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ─── Individual Service Card ────────────────────────────────────────────────────
const ServiceCard = ({
  title,
  subtitle,
  points,
  cta,
  slug,
  image,
  idx,
}: {
  title: string;
  subtitle: string;
  points: string[];
  cta: { label: string; link: string };
  slug: string;
  image: string;
  idx: number;
}) => {
  const { ref, isVisible } = useInView();
  const isReversed = idx % 2 !== 0;
  const gradient = cardGradients[idx % cardGradients.length];
  const accent = accentColors[idx % accentColors.length];
  const icon = serviceIcons[slug] || '✨';

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
    >
      <div
        className={`
          group relative flex flex-col lg:flex-row items-stretch gap-0 
          rounded-2xl overflow-hidden bg-white
          shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]
          transition-all duration-500
          ${isReversed ? 'lg:flex-row-reverse' : ''}
        `}
      >
        {/* ── Image Side ── */}
        <div className='relative w-full lg:w-[45%] min-h-[240px] lg:min-h-[360px] overflow-hidden'>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          <Image
            src={image}
            alt={`${title} illustration`}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
          />
          {/* Floating icon badge */}
          <div className='absolute top-4 left-4 z-10'>
            <div className='w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl'>
              {icon}
            </div>
          </div>
          {/* Index number */}
          <div className='absolute bottom-4 right-4 z-10'>
            <span className='text-white/30 font-black text-6xl leading-none select-none'>
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>
          {/* Gradient overlay for text legibility on mobile */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden' />
        </div>

        {/* ── Content Side ── */}
        <div className='relative w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center'>
          {/* Accent bar */}
          <div className={`w-10 h-1 ${accent} rounded-full mb-5`} />

          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight'>
            {title}
          </h2>
          <p className='text-gray-500 text-base mb-6 leading-relaxed'>
            {subtitle}
          </p>

          {/* Feature pills */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {points.map((point, i) => (
              <span
                key={i}
                className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-xs font-medium border border-gray-100 hover:border-gray-200 transition-colors'
              >
                <CheckCircle2 className='w-3 h-3 text-[var(--color-primary)] flex-shrink-0' />
                {point}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-3 mt-auto'>
            <Link
              href={cta.link}
              className='group/btn inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300'
            >
              {cta.label}
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform' />
            </Link>
            <Link
              href={`/services/${slug}`}
              className='group/btn inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-medium text-sm hover:border-orange-500 hover:text-orange-500 transition-all duration-300'
            >
              Learn More
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ──────────────────────────────────────────────────────────────────
const ServicesPage = () => {
  return (
    <div className='bg-white min-h-screen'>
      {/* ── Hero Section ── */}
      <section className='relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'>
        {/* Background pattern */}
        <div className='absolute inset-0 opacity-[0.03]'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        {/* Gradient orbs */}
        <div className='absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4' />

        <div className='relative max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-6'>
            <Sparkles className='w-4 h-4 text-[var(--color-primary)]' />
            Integrated · Insightful · Impact-Driven
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]'>
            Creative Services That{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-orange-400'>
              Elevate Your Brand
            </span>
          </h1>

          <p className='text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10'>
            At <strong className='text-white/90'>Saarva</strong>, we offer a full suite of creative
            and strategic services to drive measurable growth for your business.
          </p>

          {/* Quick-nav service pills */}
          <div className='flex flex-wrap justify-center gap-2 max-w-3xl mx-auto'>
            {servicesList.map(({ title, slug }) => (
              <a
                key={slug}
                href={`#${slug}`}
                className='inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-orange-500/15 hover:bg-orange-500/25 border border-orange-400/30 hover:border-orange-400/50 text-orange-100 hover:text-white text-xs font-medium transition-all duration-300'
              >
                <span>{serviceIcons[slug]}</span>
                {title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className='px-6 py-12 sm:py-16'>
        <div className='max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16'>
          {servicesList.map((service, idx) => (
            <div key={service.slug} id={service.slug}>
              <ServiceCard {...service} idx={idx} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className='px-6 pb-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl px-8 py-14 sm:px-14 sm:py-16 relative overflow-hidden'>
            {/* Decorative orb */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3' />
            <div className='relative'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
                Ready to bring your vision to life?
              </h2>
              <p className='text-white/60 mb-8 max-w-xl mx-auto'>
                Let&apos;s discuss how we can help your brand stand out with creative
                solutions tailored to your goals.
              </p>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300'
              >
                Get in Touch
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
