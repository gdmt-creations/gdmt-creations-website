import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Saarva – Creative & Tech Studio',
  description:
    'We design, develop, and deliver impact-driven creative & digital experiences.',
  icons: {
    icon: '/assets/images/logo2.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <div className='overflow-x-clip'>
          <Toaster position='top-center' />
          <Navbar />
          <main className='pt-16'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
