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
          window.botpress.open();
        });

        window.botpress.init({
          botId: '1ae0eadd-0bab-4110-8c5f-75fce3601d21',
          configuration: {},
          clientId: '229b8bcf-17ab-4867-bde9-55540a8b6bb4',
          selector: '#webchat',
        });
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Tentang Kami, Visi & Misi */}
      <section className="bg-black/90 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Tentang Kami</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            PT. Nama Perusahaan adalah perusahaan yang bergerak di bidang teknologi dan layanan digital sejak tahun XXXX. Kami berkomitmen untuk memberikan solusi inovatif dan pelayanan terbaik kepada klien kami.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Visi</h3>
              <p>
                Menjadi perusahaan teknologi terdepan di Indonesia yang memberikan dampak positif bagi masyarakat dan dunia usaha.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Misi</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Mengembangkan solusi digital inovatif</li>
                <li>Meningkatkan kepuasan pelanggan melalui pelayanan terbaik</li>
                <li>Membangun kemitraan strategis dan berkelanjutan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Kenapa Memilih Kami?</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Pengalaman',
                desc: 'Tim kami berpengalaman lebih dari 10 tahun di bidang teknologi informasi.',
              },
              {
                title: 'Inovasi',
                desc: 'Kami selalu menghadirkan solusi yang up-to-date dan kreatif.',
              },
              {
                title: 'Komitmen',
                desc: 'Fokus kami adalah keberhasilan dan kepuasan klien.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
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
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Tim Kami</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Andi Pratama', role: 'CEO', img: '/undraw_chill-guy-avatar_tqsm.svg' },
              { name: 'Sari Wijaya', role: 'CTO', img: '/undraw_chill-guy-avatar_tqsm.svg' },
              { name: 'Budi Santoso', role: 'Lead Developer', img: '/undraw_chill-guy-avatar_tqsm.svg' },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klien & Partner */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Klien & Partner</h3>
          <div className="flex justify-center flex-wrap gap-6">
            <img src="undraw_agreement_w6ua.svg" alt="undraw_agreement_w6ua.svg" className="h-12" />
            <img src="undraw_collab_h1mq.svg" alt="undraw_collab_h1mq.svg" className="h-12" />
            <img src="undraw_team-up_qeem.svg" alt="undraw_team-up_qeem.svg" className="h-12" />
          </div>

          <div className="mt-20 bg-blue-50 p-10 rounded text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ingin Bekerja Sama Dengan Kami?</h3>
            <p className="text-gray-700 mb-6">
              Hubungi tim kami sekarang juga untuk diskusi lebih lanjut.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <section id="webchat" style={{ width: '100%', height: '100px' }} />
      <Footer />
    </>
  );
}
