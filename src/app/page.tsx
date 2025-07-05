import CallToAction from '../sections/CallToAction';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import Testimonials from '../sections/Testimonials';
import WhyChooseUs from '../sections/WhyChooseUs';

export default function HomePage() {
  return (
    <main className='flex flex-col'>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
