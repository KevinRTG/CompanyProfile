import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProdukSection from '../components/ProdukSection';
import TestimoniSection from '../components/TestimoniSection';
import CTASection from '../components/CTASection';
import Webchat from '../components/Webchat';

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
      <Webchat />
      <Footer />
    </>
  );
}
