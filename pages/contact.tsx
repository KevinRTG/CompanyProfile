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
    AOS.init({ duration: 1000, once: false });
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
      <section className="bg-red-900 py-20 text-center text-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down" data-aos-delay="100">
            Hubungi Alfiyan
          </h1>
          <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
            Kami siap membantu Mengedepankan pelayanan dan makna perjalanan bersama Daihatsu.
          </p>
          <a
            href="#form"
            className="border border-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Kirim Pesan
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white" id="form" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <div data-aos="fade-right" data-aos-delay="200">
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
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 transition"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Kirim Pesan
              </button>
            </form>

            {success && <p className="text-green-600 mt-4" data-aos="fade-in">{success}</p>}
            {error && <p className="text-red-600 mt-4" data-aos="fade-in">{error}</p>}
          </div>

          {/* KONTAK INFO & ILUSTRASI */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="300">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>yannuruzzaman112@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="500">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Telepon</h4>
                <a
                  href="https://wa.link/1h0jjn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  +62 821 5150 2168
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="600">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Alamat</h4>
                <p>Komplek Cikarang Square Jl. Boulevard Cikarang Square No. 1, Pasirsari, Cikarang Sel., Kabupaten Bekasi</p>
              </div>
            </div>

            {/* AVATAR/ILUSTRASI */}
            <img
              src="/reshot-illustration-customer-service-agent-MZRWCUNPKL.png"
              alt="Customer Support"
              className="w-full max-w-sm mx-auto mt-6"
              data-aos="zoom-in"
              data-aos-delay="700"
            />

            {/* GOOGLE MAP */}
            <iframe
              className="w-full h-64 rounded-lg shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63452.98857780254!2d107.07417890144494!3d-6.288452787251718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b1effffffff%3A0xad17b419be93b7a2!2sDAIHATSU%20Astrido%20Cikarang!5e0!3m2!1sid!2sid!4v1755796548637!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="800"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
