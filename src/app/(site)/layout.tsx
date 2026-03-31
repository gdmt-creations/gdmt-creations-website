import BottomTabBar from '@/components/BottomTabBar';
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
      <main className='main-content pt-14 md:pt-16 pb-[72px] md:pb-0'>{children}</main>
      <Footer />
      <BottomTabBar />
    </div>
  );
}
