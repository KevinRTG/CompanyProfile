import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.botpress) {
        window.botpress.on('webchat:ready', () => {
          window.botpress.close();
        });

        window.botpress.init({
          botId: '1ae0eadd-0bab-4110-8c5f-75fce3601d21',
          configuration: {},
          clientId: '229b8bcf-17ab-4867-bde9-55540a8b6bb4',
          selector: '#botchat',
        });
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Tentang Kami, Visi & Misi */}
      <section className="bg-red-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6" data-aos="fade-down">
            Tentang Kami
          </h2>
          <p
            className="text-lg text-center mb-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Selamat datang di situs resmi <strong>Alfiyan Nuruzzaman</strong>, Sales Resmi Daihatsu yang siap menjadi teman perjalanan Anda dalam menemukan mobil impian. 
            Dengan pelayanan yang ramah, proses yang transparan, dan komitmen penuh untuk kepuasan pelanggan, kami hadir untuk memudahkan Anda memiliki kendaraan Daihatsu terbaik sesuai kebutuhan dan anggaran.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right" data-aos-delay="300">
              <h3 className="text-2xl font-semibold mb-4">Visi</h3>
              <p>
                Menjadi mitra terpercaya bagi setiap pelanggan dalam mewujudkan impian memiliki mobil Daihatsu, 
                dengan pelayanan profesional, cepat, dan penuh rasa tanggung jawab.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-2xl font-semibold mb-4">Misi</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Memberikan konsultasi personal yang jujur dan tepat sasaran.</li>
                <li>Menyediakan informasi promo dan simulasi kredit terbaru.</li>
                <li>Mendampingi pelanggan dari awal hingga setelah pembelian.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h3
            className="text-2xl font-semibold mb-4 text-gray-800 text-center"
            data-aos="fade-up"
          >
            Kenapa Memilih Alfiyan?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Berpengalaman',
                desc: 'Menguasai seluk-beluk produk Daihatsu serta proses penjualan yang cepat dan aman.',
              },
              {
                title: 'Pelayanan Personal',
                desc: 'Melayani setiap pelanggan layaknya sahabat, dengan solusi yang sesuai kebutuhan.',
              },
              {
                title: 'Promo & Penawaran Menarik',
                desc: 'Memberikan berbagai pilihan promo resmi dan program cicilan ringan.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition"
                data-aos="zoom-in"
                data-aos-delay={100 + idx * 150}
              >
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Profil Sales</h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src="/profileAlfiyan.png"
                alt="Alfiyan Nuruzzamman"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold">Alfiyan Nuruzzaman</h4>
              <p className="text-gray-600 text-sm">Sales Executive Daihatsu</p>
              <p className="mt-3 text-sm text-gray-700">
                Siap membantu Anda memilih kendaraan yang tepat, memberikan penawaran terbaik, dan memastikan proses pembelian Anda mudah serta menyenangkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Klien & Partner */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Testimoni & Partner</h3>
          <div className="flex flex-col items-center gap-6">
            <blockquote
              className="bg-white p-6 rounded-lg shadow max-w-2xl italic text-gray-700"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              "Pelayanan Alfiyan sangat ramah dan membantu. Proses pembelian mobil saya jadi cepat dan lancar."
              <span className="block mt-2 font-semibold">— Bapak Andi, Bekasi</span>
            </blockquote>
            <blockquote
              className="bg-white p-6 rounded-lg shadow max-w-2xl italic text-gray-700"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              "Saya dapat promo menarik dan penjelasan detail sebelum membeli. Sangat puas!"
              <span className="block mt-2 font-semibold">— Ibu Rina, Cikarang</span>
            </blockquote>
          </div>

          <div
            className="mt-20 bg-blue-50 p-10 rounded text-center"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ingin Konsultasi atau Penawaran Terbaik?</h3>
            <p className="text-gray-700 mb-6">
              Hubungi Alfiyan sekarang dan dapatkan promo spesial serta proses mudah tanpa ribet.
            </p>
            <a
              href="/contact"
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-800 transition"
            >
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>

      <section id="webchat" style={{ width: '100%', height: '100px' }} />
      <Footer />
    </>
  );
}
