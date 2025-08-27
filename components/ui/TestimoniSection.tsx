export default function TestimoniSection() {
  const testimonies = [
    {
      text: 'Proses pembelian mobil Daihatsu sangat mudah dan cepat. Pelayanannya ramah, kami merasa benar-benar diperhatikan.',
      author: '— Bapak Andi, CEO PT. Maju Jaya',
      animation: 'fade-right', // slide dari kiri ke kanan
    },
    {
      text: 'Mobil Daihatsu yang kami beli sangat nyaman dan irit. Cocok untuk kebutuhan keluarga dan bisnis kami.',
      author: '— Ibu Sari, Owner Toko Kita',
      animation: 'fade-left', // slide dari kanan ke kiri
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <h2
        className="text-3xl font-semibold text-center mb-12"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        Apa Kata Klien Kami
      </h2>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {testimonies.map((t, i) => (
          <blockquote
            key={i}
            data-aos={t.animation}
            data-aos-duration="1000"
            data-aos-delay={i * 200}
            className="bg-white p-6 rounded shadow transition-all"
          >
            <p className="text-gray-700 italic text-base md:text-lg">{`"${t.text}"`}</p>
            <footer className="mt-4 text-right font-semibold text-black text-sm md:text-base">
              {t.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
