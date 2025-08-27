import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/ui/HeroSection';
import ProdukSection from '../components/ui/ProdukSection';
import TestimoniSection from '../components/ui/TestimoniSection';
import CTASection from '../components/ui/CTASection';
import BotChat from '../components/ui/BotChat';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProdukSection />
      <TestimoniSection />
      <CTASection />
      <BotChat />
      <Footer />
    </>
  );
}
