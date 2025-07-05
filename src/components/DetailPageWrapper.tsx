'use client';

import { ArrowLeft, ArrowLeftCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

interface DetailPageWrapperProps {
  title: string;
  backHref: string;
  children: React.ReactNode;
}

const DetailPageWrapper = ({
  title,
  backHref,
  children,
}: DetailPageWrapperProps) => {
  const router = useRouter();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='bg-white text-gray-900'>
      {/* Sticky Back Button */}
      <div
        className={`sticky top-0 z-50 bg-white px-6 py-4 border-b border-gray-100 shadow-sm transition-all duration-300 ${
          showSticky
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className='max-w-6xl mx-auto'>
          <button
            onClick={() => router.push(backHref)}
            className='w-full bg-[var(--color-primary)] text-white  py-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-md hover:bg-red-600 transition-all'
          >
            <ArrowLeftCircleIcon className='w-4 h-4' />
            Explore Other Services
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className='px-6 py-20 max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8 text-[var(--color-primary)]'>
          {title}
        </h1>

        {children}
      </div>
    </section>
  );
};

export default DetailPageWrapper;
