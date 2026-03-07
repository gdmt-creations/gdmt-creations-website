// src/data/homeContent.ts

export const services = [
  {
    emoji: '🎨',
    title: 'Graphic Designing',
    desc: 'Captivating visuals that bring your brand to life — from logos and brochures to social creatives and ads.',
    slug: 'graphic-designing',
  },
  {
    emoji: '🎬',
    title: 'Video Editing & Post Production',
    desc: 'Transform raw footage into cinematic, scroll-stopping content — reels, ad films, 2D/3D animations, and more.',
    slug: 'video-editing-post-production',
  },
  {
    emoji: '🎧',
    title: 'Audio Editing & Post Production',
    desc: 'Crystal-clear sound for podcasts, ads, and voiceovers. We handle noise reduction, mixing, and mastering.',
    slug: 'audio-editing-post-production',
  },
  {
    emoji: '💻',
    title: 'Website Design & Development',
    desc: 'Custom-built, high-performance websites that are responsive, fast, and built to convert.',
    slug: 'website-design-development',
  },
  {
    emoji: '📱',
    title: 'App Design & Development',
    desc: 'User-focused mobile apps tailored to your goals — built for iOS, Android, and cross-platform frameworks.',
    slug: 'app-design-development',
  },
  {
    emoji: '🏡',
    title: '2D & 3D Interior Design',
    desc: 'From layout planning to photorealistic renders, we turn concepts into styled, functional spaces.',
    slug: 'interior-design',
  },
  {
    emoji: '📣',
    title: 'Social Media Management',
    desc: 'End-to-end content creation, engagement, and strategy to grow your online presence and community.',
    slug: 'social-media-management',
  },
  {
    emoji: '🧠',
    title: 'Agentic AI Design & Development',
    desc: 'Designing autonomous AI agents that think, decide, and act—purpose-built for smart business automation.',
    slug: 'agentic-ai-design-development',
  },
];

export const reasons = [
  [
    'Integrated Expertise',
    'One team with multiple specializations — design, development, strategy, and marketing under one roof.',
  ],
  [
    'Tailored Solutions',
    'We don\'t do cookie-cutter. Every project is built from scratch to align with your unique goals.',
  ],
  [
    'Creativity Meets Strategy',
    'We combine stunning visuals with results-driven thinking to deliver meaningful impact.',
  ],
  [
    'Agile & Transparent',
    'Flexible workflows, fast turnarounds, and direct communication at every step.',
  ],
  [
    'Results That Matter',
    'We focus on metrics that move the needle — clicks, conversions, engagement, and growth.',
  ],
];

export interface Testimonial {
  name: string;
  designation: string;
  photo: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Mehta',
    designation: 'Founder, 10x Income',
    photo: 'https://ui-avatars.com/api/?name=Rahul+Mehta&background=6c63ff&color=fff&size=128&bold=true',
    quote:
      'Working with Saarva on our rebranding project was a game-changer. Their design team captured our brand essence perfectly — modern, clean, and impactful.',
  },
  {
    name: 'Ankit Sharma',
    designation: 'CEO, Okinawa Autotech',
    photo: 'https://ui-avatars.com/api/?name=Ankit+Sharma&background=e63946&color=fff&size=128&bold=true',
    quote:
      'We sent over hours of raw footage and got back a polished, high-energy brand film with seamless transitions and dynamic motion graphics.',
  },
  {
    name: 'Priya Nair',
    designation: 'Director, Woodlance Interiors',
    photo: 'https://ui-avatars.com/api/?name=Priya+Nair&background=2a9d8f&color=fff&size=128&bold=true',
    quote:
      'Saarva built our entire website from scratch. It\'s responsive, fast, and reflects our identity beautifully — both visually and functionally.',
  },
  {
    name: 'Deepak Verma',
    designation: 'Social Media Head, AstroTalk',
    photo: 'https://ui-avatars.com/api/?name=Deepak+Verma&background=f4a261&color=fff&size=128&bold=true',
    quote:
      'Since we partnered with Saarva, our social media presence has grown significantly. Content quality and engagement have both improved noticeably.',
  },
];
