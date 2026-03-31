'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Download,
  Share2,
  ExternalLink,
  Check,
  Briefcase,
} from 'lucide-react';

// ─── Business Data ──────────────────────────────────────────────────────────────
const business = {
  name: 'Saarva',
  legalName: 'Saarva IT & Digital Services LLP',
  tagline: 'Design. Develop. Deliver.',
  description:
    'A full-spectrum creative studio crafting digital experiences that drive real-world growth.',
  founder: {
    name: 'Gaurav Dutt Misra',
    title: 'Founder & Creative Director',
  },
  phone: '+918851055230',
  phoneDisplay: '+91-88510 55230',
  email: 'saarva.info@gmail.com',
  website: 'https://saarva.co.in',
  address: 'First Floor, Plot 737, Sector 9A, Gurugram, Haryana 122001',
  services: [
    { icon: '🎨', label: 'Graphic Design' },
    { icon: '🎬', label: 'Video Editing' },
    { icon: '🎧', label: 'Audio Editing' },
    { icon: '💻', label: 'Web Development' },
    { icon: '📱', label: 'App Development' },
    { icon: '🤖', label: 'Agentic AI' },
    { icon: '🏡', label: 'Interior Design' },
    { icon: '📣', label: 'Social Media' },
  ],
  social: [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@Saarva.foryou',
      icon: 'yt',
      color: 'bg-red-600',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/saarva.01',
      icon: 'ig',
      color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/saarvaofficial/',
      icon: 'li',
      color: 'bg-blue-600',
    },
    {
      label: 'X',
      href: 'https://x.com/Saarva_Official',
      icon: 'x',
      color: 'bg-black',
    },
  ],
};

// ─── Social Icon SVGs ───────────────────────────────────────────────────────────
const SocialSvg = ({ icon }: { icon: string }) => {
  const cls = 'w-4 h-4 fill-current text-white';
  switch (icon) {
    case 'yt':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
        </svg>
      );
    case 'ig':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'x':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'li':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return null;
  }
};

// ─── vCard Generator ────────────────────────────────────────────────────────────
const downloadVCard = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${business.founder.name}
ORG:${business.legalName}
TITLE:${business.founder.title}
TEL;TYPE=WORK,VOICE:${business.phone}
EMAIL;TYPE=WORK:${business.email}
ADR;TYPE=WORK:;;${business.address};;;;
URL:${business.website}
NOTE:${business.description}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Saarva-Contact.vcf';
  a.click();
  URL.revokeObjectURL(url);
};

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function DigitalCardPage() {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${business.name} – ${business.tagline}`,
      text: `${business.founder.name} | ${business.founder.title} at ${business.legalName}`,
      url: business.website + '/card',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(shareData.url);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4 sm:p-8">
      {/* Card Container */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* ── Header ── */}
          <div className="relative bg-gradient-to-br from-[var(--color-primary)] to-orange-600 px-6 pt-8 pb-14 text-center">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />

            {/* Logo */}
            <div className="relative mx-auto w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4">
              <Image
                src="/assets/images/logo2.svg"
                alt="Saarva"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>

            <h1 className="text-white font-black text-2xl tracking-tight">
              {business.name}
            </h1>
            <p className="text-white/70 text-sm font-medium mt-1">
              {business.tagline}
            </p>
          </div>

          {/* ── Founder badge (overlaps header) ── */}
          <div className="relative -mt-8 px-6">
            <div className="bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 border-[var(--color-primary)]/20">
                <Image
                  src="/assets/images/founderImage.jpeg"
                  alt={business.founder.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  {business.founder.name}
                </p>
                <p className="text-xs text-[var(--color-primary)] font-medium">
                  {business.founder.title}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  {business.legalName}
                </p>
              </div>
            </div>
          </div>

          {/* ── Quick Actions ── */}
          <div className="px-6 mt-5">
            <div className="grid grid-cols-3 gap-2.5">
              <a
                href={`tel:${business.phone}`}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-green-50 hover:bg-green-100 active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 text-green-600" />
                <span className="text-[10px] font-semibold text-green-700">
                  Call
                </span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 active:scale-95 transition-all"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] font-semibold text-blue-700">
                  Email
                </span>
              </a>
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-purple-50 hover:bg-purple-100 active:scale-95 transition-all"
              >
                <Globe className="w-5 h-5 text-purple-600" />
                <span className="text-[10px] font-semibold text-purple-700">
                  Website
                </span>
              </a>
            </div>
          </div>

          {/* ── Contact Details ── */}
          <div className="px-6 mt-5">
            <div className="space-y-2.5">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Phone</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {business.phoneDisplay}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 ml-auto" />
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {business.email}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 ml-auto" />
              </a>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Office</p>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    {business.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Services ── */}
          <div className="px-6 mt-5">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-[var(--color-primary)]" />
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Our Services
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {business.services.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <span className="text-base">{s.icon}</span>
                  <span className="text-xs font-medium text-gray-700">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Social Links ── */}
          <div className="px-6 mt-5">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Connect With Us
            </h3>
            <div className="flex gap-2.5">
              {business.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center shadow-sm hover:shadow-md active:scale-90 transition-all`}
                >
                  <SocialSvg icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Action Buttons ── */}
          <div className="px-6 pt-6 pb-6 mt-4 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={downloadVCard}
                className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-hover)] active:scale-95 transition-all shadow-lg shadow-[var(--color-primary)]/20"
              >
                <Download className="w-4 h-4" />
                Save Contact
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 active:scale-95 transition-all"
              >
                {shared ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    Share Card
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── Powered By footer ── */}
        <p className="text-center text-[10px] text-gray-600 mt-4 opacity-60">
          saarva.co.in/card
        </p>
      </div>
    </main>
  );
}
