'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import {
  ServiceFilter,
  VideoCategory,
  VideoPortfolioItem,
  portfolioTestimonials,
  serviceFilters,
  videoCategories,
  videoPortfolio,
  ytEmbed,
  ytThumb,
} from '@/data/portfolioData';

// ─── YouTube Icon SVG ──────────────────────────────────────────────────────────
const YouTubeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ─── Extract channel handle from URL ──────────────────────────────────────────
const getChannelHandle = (url: string) => {
  const match = url.match(/@([^/]+)/);
  return match ? `@${match[1]}` : '';
};

// ─── Color palette for cards without thumbnails ───────────────────────────────
const cardGradients = [
  'from-rose-600 to-pink-500',
  'from-violet-600 to-purple-500',
  'from-blue-600 to-cyan-500',
  'from-emerald-600 to-teal-500',
  'from-amber-600 to-orange-500',
  'from-indigo-600 to-blue-500',
  'from-fuchsia-600 to-pink-500',
  'from-sky-600 to-blue-400',
];

const getGradient = (id: string) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
  return cardGradients[Math.abs(hash) % cardGradients.length];
};

// ─── Video Card ────────────────────────────────────────────────────────────────
const VideoCard = ({
  item,
  onPlay,
}: {
  item: VideoPortfolioItem;
  onPlay: (item: VideoPortfolioItem) => void;
}) => {
  const hasId = !!item.youtubeId;
  const thumb = hasId ? ytThumb(item.youtubeId!) : null;
  const channelHandle = getChannelHandle(item.channelUrl);

  const handleClick = () => {
    if (hasId) {
      onPlay(item);
    } else {
      window.open(item.channelUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="relative flex-shrink-0 w-48 sm:w-56 md:w-64 aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-md"
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div className="absolute inset-0 bg-gray-800">
        {thumb ? (
          <Image
            src={thumb}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getGradient(item.id)} flex flex-col items-center justify-center gap-2 p-3`}>
            {item.channelLogo ? (
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                <Image
                  src={item.channelLogo}
                  alt={item.client || 'Channel'}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <YouTubeIcon className="w-6 h-6 text-white" />
              </div>
            )}
            <span className="text-white font-bold text-sm text-center leading-tight drop-shadow-sm">
              {item.client}
            </span>
            {channelHandle && (
              <span className="text-white/70 text-[10px] font-medium">{channelHandle}</span>
            )}
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        {hasId ? (
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
              <YouTubeIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-[10px] font-semibold bg-black/50 px-2 py-0.5 rounded-full">
              Visit Channel ↗
            </span>
          </div>
        )}
      </div>

      {/* Title bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-2">
        <div className="flex items-center gap-2">
          {item.channelLogo && (
            <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30 flex-shrink-0">
              <Image
                src={item.channelLogo}
                alt={item.client || 'Channel'}
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
          )}
          <div className="min-w-0">
            <p className="text-white text-xs font-medium truncate">{item.title}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              {item.client && (
                <p className="text-gray-300 text-[10px] truncate">{item.client}</p>
              )}
              {channelHandle && (
                <>
                  <span className="text-gray-500 text-[10px]">·</span>
                  <span className="text-red-400 text-[10px] flex items-center gap-0.5">
                    <YouTubeIcon className="w-2.5 h-2.5" />
                    {channelHandle}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Horizontal Scroll Row (Short Form) ────────────────────────────────────────
const HorizontalRow = ({
  items,
  onPlay,
}: {
  items: VideoPortfolioItem[];
  onPlay: (item: VideoPortfolioItem) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <div className="relative group/row">
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100 transition text-lg font-bold text-gray-600"
        aria-label="Scroll left"
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div key={item.id} className="snap-start">
            <VideoCard item={item} onPlay={onPlay} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100 transition text-lg font-bold text-gray-600"
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
};

// ─── Grid Row (all other categories) ───────────────────────────────────────────
const GridRow = ({
  items,
  onPlay,
}: {
  items: VideoPortfolioItem[];
  onPlay: (item: VideoPortfolioItem) => void;
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {items.map((item) => (
      <VideoCard key={item.id} item={item} onPlay={onPlay} />
    ))}
  </div>
);

// ─── Video Modal ────────────────────────────────────────────────────────────────
const VideoModal = ({
  item,
  onClose,
}: {
  item: VideoPortfolioItem | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!item) return null;

  const hasId = !!item.youtubeId;

  return (
    <div
      className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-white/10">
          <div>
            <p className="text-white font-semibold text-sm">{item.title}</p>
            {item.client && <p className="text-gray-400 text-xs">{item.client}</p>}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold leading-none transition w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Video content */}
        {hasId ? (
          <div className="aspect-video">
            <iframe
              src={ytEmbed(item.youtubeId!)}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className={`aspect-video flex items-center justify-center bg-gradient-to-br ${getGradient(item.id)} p-8 text-center relative overflow-hidden`}>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
            
            <div className="space-y-5 relative z-10">
              {item.channelLogo ? (
                <div className="mx-auto w-20 h-20 rounded-full overflow-hidden border-3 border-white/30 shadow-xl">
                  <Image
                    src={item.channelLogo}
                    alt={item.client || 'Channel'}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mx-auto w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <YouTubeIcon className="w-8 h-8 text-white" />
                </div>
              )}
              <div>
                <p className="text-white font-bold text-lg">{item.client}</p>
                {getChannelHandle(item.channelUrl) && (
                  <p className="text-white/60 text-sm mt-0.5">{getChannelHandle(item.channelUrl)}</p>
                )}
              </div>
              <p className="text-white/80 text-sm max-w-xs mx-auto">
                Watch our work for <strong>{item.client}</strong> on their YouTube channel
              </p>
              <a
                href={item.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                <YouTubeIcon className="w-4 h-4 text-red-600" />
                Watch on YouTube
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Portfolio Page ─────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceFilter>('All');
  const [activeVideo, setActiveVideo] = useState<VideoPortfolioItem | null>(null);

  const itemsForCategory = (cat: VideoCategory) =>
    videoPortfolio.filter((v) => v.category === cat);

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#1a1a2e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Our Portfolio</h1>
        <p className="text-gray-200 max-w-xl mx-auto text-lg">
          A curated showcase of creative work across video, design, web, and more.
        </p>
      </section>

      {/* ── Sticky Filter Tabs ── */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-1.5 py-3 min-w-max">
            {serviceFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[var(--color-primary)] text-white shadow'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO PRODUCTION Section ── */}
      {(activeFilter === 'All' || activeFilter === 'Video Editing') && (
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--color-primary)]">
              Video Production
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Scroll-stopping content across all formats — short form, long form, animation &amp; more.
            </p>
          </div>

          <div className="space-y-14">
            {videoCategories.map((cat) => {
              const items = itemsForCategory(cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h3 className="text-lg font-bold mb-5 text-gray-800 flex items-center gap-3">
                    <span className="w-1 h-6 bg-[var(--color-primary)] rounded-full inline-block" />
                    {cat}
                    <span className="text-xs font-normal text-gray-400 ml-1">
                      ({items.length} project{items.length > 1 ? 's' : ''})
                    </span>
                  </h3>
                  {cat === 'Short Form' ? (
                    <HorizontalRow items={items} onPlay={setActiveVideo} />
                  ) : (
                    <GridRow items={items} onPlay={setActiveVideo} />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Coming Soon for other filters ── */}
      {activeFilter !== 'All' && activeFilter !== 'Video Editing' && (
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="text-6xl mb-5">🚧</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-3">
            {activeFilter} Portfolio
          </h2>
          <p className="text-gray-500 max-w-sm mx-auto">
            Projects for this category are being uploaded. Check back soon!
          </p>
        </section>
      )}

      {/* ── Testimonials Strip ── */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-[var(--color-primary)]">
            What Our Clients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4"
              >
                <p className="text-gray-600 italic leading-relaxed text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      unoptimized
                      className="rounded-full object-cover border-2 border-[var(--color-primary)]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://ui-avatars.com/api/?name=' +
                          encodeURIComponent(t.name) +
                          '&background=6c63ff&color=fff&size=128';
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-[var(--color-primary)]">{t.designation}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  );
}
