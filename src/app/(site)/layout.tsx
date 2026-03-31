import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='overflow-x-clip'>
      <Navbar />
      <main className='pt-16'>{children}</main>
      <Footer />
    </div>
  );
}
