import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos'; // ✨ Tambahan
import 'aos/dist/aos.css'; // ✨ Tambahan

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ✨ Inisialisasi AOS

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.botpress) {
        window.botpress.on('webchat:ready', () => {
          window.botpress.open();
        });

        window.botpress.init({
          botId: '1ae0eadd-0bab-4110-8c5f-75fce3601d21',
          configuration: {
            website: {},
            email: {},
            phone: {},
            termsOfService: {},
            privacyPolicy: {},
          },
          clientId: '229b8bcf-17ab-4867-bde9-55540a8b6bb4',
          selector: '#webchat',
        });
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="bg-black/90 py-20 text-center" data-aos="fade-up"> {/* ✨ */}
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Solusi Digital untuk Bisnis Masa Depan</h1>
          <p className="text-lg text-white mb-6">
            Kami membantu perusahaan berkembang melalui teknologi modern dan layanan terbaik.
          </p>
          <a href="#produk" className="border border-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition">
            Lihat Produk Kami
          </a>
        </div>
      </section>

      {/* PRODUK SECTION */}
      <section id="produk" className="py-20 bg-white text-center" data-aos="fade-up"> {/* ✨ */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Produk Kami</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg w-64 shadow hover:shadow-lg transition">
            <img src="/produk1.png" alt="Produk 1" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-2">Mazda 3</h3>
            <p className="text-gray-600 text-sm mb-4">
              New Mazda3 embodies two characters. Sporty curves elicit a sense of excitement and freedom in the Hatch...
            </p>
            <a href="https://www.mazda.co.id/product/mazda3-hatchback/" target="_blank" className="text-blue-600 font-semibold hover:underline">
              Lihat di Offical Website Mazda
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg w-64 shadow hover:shadow-lg transition">
            <img src="/produk2.png" alt="Produk 2" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-2">Mazda CX5</h3>
            <p className="text-gray-600 text-sm mb-4">
              GVC Plus is Mazda's human-centric engineering approach that makes vehicle movement more responsive...
            </p>
            <a href="https://www.mazda.co.id/product/mazda-cx-5/" target="_blank" className="text-orange-500 font-semibold hover:underline">
              Lihat di Offical Website Mazda
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONI SECTION */}
      <section className="bg-gray-50 py-20" data-aos="zoom-in"> {/* ✨ */}
        <h2 className="text-3xl font-semibold text-center mb-12">Apa Kata Klien Kami</h2>
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <blockquote className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 italic">"Pelayanan cepat dan profesional. Kami sangat puas!"</p>
            <footer className="mt-4 text-right font-semibold text-black">— Bapak Andi, CEO PT. Maju Jaya</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 italic">"Solusi IT yang sangat membantu bisnis kami berkembang."</p>
            <footer className="mt-4 text-right font-semibold text-black">— Ibu Sari, Owner Toko Kita</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="chatbot" className="bg-black/90 text-white py-16 text-center" data-aos="fade-up"> {/* ✨ */}
        <h2 className="text-3xl font-bold mb-4">Butuh Konsultasi atau Penawaran?</h2>
        <p className="mb-6 text-lg">Klik tombol di bawah untuk terhubung dengan kami melalui chatbot!</p>
        <a href="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/21/08/20250621084259-I3M98JTN.json" className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-white/50 transition">
          Mulai Chat
        </a>
      </section>

      {/* Webchat Embed Container */}
      <section id="webchat" style={{ width: '100%', height: '100px' }}/> 

      <Footer />
    </>
  );
}
