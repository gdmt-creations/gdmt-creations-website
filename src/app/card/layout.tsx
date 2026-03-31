import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saarva – Digital Business Card',
  description:
    'Saarva IT & Digital Services LLP – Design. Develop. Deliver. Contact us for creative & digital solutions.',
  openGraph: {
    title: 'Saarva – Digital Business Card',
    description:
      'Full-spectrum creative studio crafting digital experiences that drive real-world growth.',
    url: 'https://saarva.co.in/card',
    siteName: 'Saarva',
    type: 'website',
  },
};

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
