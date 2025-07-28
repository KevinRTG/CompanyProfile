'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('Pesan berhasil dikirim!');
        setError(null);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Gagal mengirim pesan.');
        setSuccess(null);
      }
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi nanti.');
      setSuccess(null);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO CONTACT */}
      <section className="bg-black/90 py-20 text-center text-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Tim Kami</h1>
          <p className="text-lg mb-6">
            Kami siap membantu Mengedepankan pelayanan dan makna perjalanan bersama Daihatsu.
          </p>
          <a
            href="#form"
            className="border border-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            Kirim Pesan
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white" id="form" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Formulir Kontak</h2>
            <p className="text-gray-600 mb-6">Silakan kirimkan pesan atau pertanyaan Anda di bawah ini.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nama"
                className="w-full p-3 border rounded"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Pesan"
                className="w-full p-3 border rounded h-32"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Kirim Pesan
              </button>
            </form>

            {success && <p className="text-green-600 mt-4">{success}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </div>

          {/* KONTAK INFO & ILUSTRASI */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>yannuruzzaman112@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Telepon</h4>
                <p>+62 821 5150 2168</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Alamat</h4>
                <p> Komplek Cikarang Square Jl. Boulevard Cikarang Square No. 1, Pasirsari, Cikarang Sel., Kabupaten Bekasi</p>
              </div>
            </div>

            {/* AVATAR/ILUSTRASI */}
            <img
              src="/contact-illustration.svg"
              alt="Customer Support"
              className="w-full max-w-sm mx-auto mt-6"
              data-aos="zoom-in"
            />

            {/* GOOGLE MAP */}
            <iframe
              className="w-full h-64 rounded-lg shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126919.11184841507!2d106.68942916749753!3d-6.229386716323532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f157f2b5d865%3A0x2fa3137f7b4e30ae!2sJakarta!5e0!3m2!1sen!2sid!4v1719120000000!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
