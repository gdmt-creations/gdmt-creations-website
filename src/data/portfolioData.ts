// src/data/portfolioData.ts

export type ServiceFilter =
  | 'All'
  | 'Video Editing'
  | 'Graphic Designing'
  | 'Social Media'
  | 'Web Development'
  | 'App Development'
  | 'Interior Design'
  | 'Audio Editing'
  | 'Agentic AI';

export const serviceFilters: ServiceFilter[] = [
  'All',
  'Video Editing',
  'Graphic Designing',
  'Social Media',
  'Web Development',
  'App Development',
  'Interior Design',
  'Audio Editing',
  'Agentic AI',
];

export type VideoCategory =
  | 'Short Form'
  | 'Long Form'
  | '2D Animation'
  | '3D Animation'
  | 'Live Action';

export const videoCategories: VideoCategory[] = [
  'Short Form',
  'Long Form',
  '2D Animation',
  '3D Animation',
  'Live Action',
];

export interface VideoPortfolioItem {
  id: string;
  title: string;
  category: VideoCategory;
  // youtubeId: specific video ID for embed + thumbnail (fill in when you have the URL)
  // channelUrl: links out to the client's channel/video
  // channelThumb: any custom thumbnail image path or external URL to show on the card
  youtubeId?: string;
  channelUrl: string;
  channelThumb?: string; // optional branded card image
  client?: string;
}

// Helper: get YouTube thumbnail from video ID
export const ytThumb = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// Helper: get YouTube embed URL
export const ytEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

export const videoPortfolio: VideoPortfolioItem[] = [
  // ── SHORT FORM ──────────────────────────────────────────────────────────────
  {
    id: 'sf-1',
    title: '10x Income – Wealth Short',
    category: 'Short Form',
    youtubeId: 'PtLz0ZSKmBM',
    channelUrl: 'https://www.youtube.com/@10xincome',
    client: '10x Income',
  },
  {
    id: 'sf-2',
    title: 'DJ Fitness – Training Reel',
    category: 'Short Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=DJ+Fitness&background=e63946&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@d_j_fitness',
    client: 'DJ Fitness',
  },
  {
    id: 'sf-3',
    title: 'Psymanis – Motivational Short',
    category: 'Short Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Psymanis&background=7209b7&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@psymanis',
    client: 'Psymanis',
  },
  {
    id: 'sf-4',
    title: 'Internshala – Career Short',
    category: 'Short Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Internshala&background=f77f00&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@InternshalaOfficial/shorts',
    client: 'Internshala',
  },
  {
    id: 'sf-5',
    title: 'House & Home – Interior Short',
    category: 'Short Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=House+Home&background=4cc9f0&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@houseandhome/shorts',
    client: 'House & Home',
  },
  {
    id: 'sf-6',
    title: 'Mr Nightmare – Horror Short',
    category: 'Short Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Mr+Nightmare&background=1a1a2e&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@mrnightmare/shorts',
    client: 'Mr Nightmare',
  },
  {
    id: 'sf-7',
    title: 'Anime Balls Deep – Anime Short',
    category: 'Short Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Anime+Balls+Deep&background=560bad&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@animeballsdeep/shorts',
    client: 'Anime Balls Deep',
  },

  // ── LONG FORM ────────────────────────────────────────────────────────────────
  {
    id: 'lf-1',
    title: 'Okinawa Autotech – Brand Film',
    category: 'Long Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Okinawa+Autotech&background=0d1b2a&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@OkinawaAutotech',
    client: 'Okinawa Autotech',
  },
  {
    id: 'lf-2',
    title: 'ComicVerse – Review Video',
    category: 'Long Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=ComicVerse&background=d62828&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@comicverseog',
    client: 'ComicVerse OG',
  },
  {
    id: 'lf-3',
    title: 'Share.Market – Explainer',
    category: 'Long Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Share+Market&background=2dc653&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@SharedotMarket',
    client: 'Share.Market',
  },
  {
    id: 'lf-4',
    title: 'AstroTalk – Feature Video',
    category: 'Long Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=AstroTalk&background=3a0ca3&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@astrotalk_app',
    client: 'AstroTalk',
  },
  {
    id: 'lf-5',
    title: 'Caroline Winkler – Lifestyle Vlog',
    category: 'Long Form',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Caroline+Winkler&background=f4a261&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@CarolineWinkler_',
    client: 'Caroline Winkler',
  },

  // ── 3D ANIMATION ─────────────────────────────────────────────────────────────
  {
    id: '3d-1',
    title: 'Woodlance – 3D Walkthrough',
    category: '3D Animation',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Woodlance&background=4a4e69&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/c/WoodlanceInteriors',
    client: 'Woodlance Interiors',
  },
  {
    id: '3d-2',
    title: 'Ali Interior – 3D Render',
    category: '3D Animation',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Ali+Interior&background=b5838d&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@Aliinterior05531/videos',
    client: 'Ali Interior',
  },

  // ── LIVE ACTION ───────────────────────────────────────────────────────────────
  {
    id: 'la-1',
    title: 'Khooni Monday – Horror Film',
    category: 'Live Action',
    youtubeId: '',
    channelThumb: 'https://ui-avatars.com/api/?name=Khooni+Monday&background=370617&color=fff&size=400&font-size=0.35&bold=true',
    channelUrl: 'https://www.youtube.com/@KhooniMondayfreak/',
    client: 'Khooni Monday',
  },
];

// ── Instagram clients (for Social Media section) ──────────────────────────────
export interface InstagramClient {
  handle: string;
  url: string;
  name: string;
  category: string;
}

export const instagramClients: InstagramClient[] = [
  { handle: '@psymanis', url: 'https://www.instagram.com/psymanis/', name: 'Psymanis', category: 'Motivation' },
  { handle: '@dj_fitness_', url: 'https://www.instagram.com/dj_fitness_', name: 'DJ Fitness', category: 'Fitness' },
  { handle: '@interiorsbyutkrisht', url: 'https://www.instagram.com/interiorsbyutkrisht/', name: 'Interiors by Utkrisht', category: 'Interior Design' },
  { handle: '@realtalkdiary24', url: 'https://www.instagram.com/realtalkdiary24/reels/', name: 'Real Talk Diary', category: 'Lifestyle' },
  { handle: '@calmlings', url: 'https://www.instagram.com/calmlings/reels/', name: 'Calmlings', category: 'Wellness' },
  { handle: '@callmegrand', url: 'https://www.instagram.com/callmegrand/reels/', name: 'CallMeGrand', category: 'Entertainment' },
  { handle: '@10repsmax', url: 'https://www.instagram.com/10repsmax/', name: '10 Reps Max', category: 'Fitness' },
  { handle: '@3dinteriorstudio', url: 'https://www.instagram.com/3dinteriorstudio/', name: '3D Interior Studio', category: 'Interior Design' },
  { handle: '@oruvillas', url: 'https://www.instagram.com/oruvillas/reels/', name: 'Oru Villas', category: 'Real Estate' },
  { handle: '@woodlance.in', url: 'https://www.instagram.com/woodlance.in/', name: 'Woodlance', category: 'Interior Design' },
  { handle: '@home.designer.studio', url: 'https://www.instagram.com/home.designer.studio/', name: 'Home Designer Studio', category: 'Interior Design' },
  { handle: '@wedecorggn', url: 'https://www.instagram.com/wedecorggn/', name: 'WeDecor GGN', category: 'Interior Design' },
  { handle: '@beeliciousworld', url: 'https://www.instagram.com/beeliciousworld/', name: 'Beelicious World', category: 'Food' },
  { handle: '@homestudioacademy', url: 'https://www.instagram.com/homestudioacademy/', name: 'Home Studio Academy', category: 'Education' },
  { handle: '@minimalist.interiors_', url: 'https://www.instagram.com/minimalist.interiors_/', name: 'Minimalist Interiors', category: 'Interior Design' },
  { handle: '@scandinavianhomes', url: 'https://www.instagram.com/scandinavianhomes/', name: 'Scandinavian Homes', category: 'Interior Design' },
  { handle: '@frontendmentor', url: 'https://www.instagram.com/frontendmentor/', name: 'Frontend Mentor', category: 'Tech' },
  { handle: '@savingwithben', url: 'https://www.instagram.com/savingwithben/', name: 'Saving With Ben', category: 'Finance' },
];

// ── Portfolio Testimonials ────────────────────────────────────────────────────
export interface PortfolioTestimonial {
  name: string;
  designation: string;
  photo: string;
  quote: string;
  service: string;
}

export const portfolioTestimonials: PortfolioTestimonial[] = [
  {
    name: 'Utkrisht Sharma',
    designation: 'Founder, Interiors by Utkrisht',
    photo: 'https://ui-avatars.com/api/?name=Utkrisht+Sharma&background=264653&color=fff&size=128&bold=true',
    quote:
      'The 3D renders Saarva produced for our interior projects were absolutely photorealistic. Clients could visualize the space before construction even began.',
    service: 'Interior Design',
  },
  {
    name: 'Psymanis',
    designation: 'Content Creator',
    photo: 'https://ui-avatars.com/api/?name=Psymanis&background=7209b7&color=fff&size=128&bold=true',
    quote:
      'My short-form content saw a 3x improvement in watch time after Saarva edited them. The hooks, pacing, and sound design are top-notch.',
    service: 'Video Editing',
  },
  {
    name: 'Ben Williams',
    designation: 'Creator, Saving with Ben',
    photo: 'https://ui-avatars.com/api/?name=Ben+Williams&background=1d3557&color=fff&size=128&bold=true',
    quote:
      'Saarva handled our social media graphics and posting schedule seamlessly. Engagement went up by 40% in just two months.',
    service: 'Social Media',
  },
  {
    name: 'Grand Team',
    designation: 'Creative Director, CallMeGrand',
    photo: 'https://ui-avatars.com/api/?name=Grand+Team&background=c1121f&color=fff&size=128&bold=true',
    quote:
      'The reels they crafted for our brand were cinematic and scroll-stopping. Our follower count doubled after the campaign.',
    service: 'Video Editing',
  },
];
