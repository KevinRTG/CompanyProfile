export default function TestimoniSection() {
  const testimonies = [
    {
      text: 'Proses pembelian mobil Daihatsu sangat mudah dan cepat. Pelayanannya ramah, kami merasa benar-benar diperhatikan.',
      author: '— Bapak Andi, CEO PT. Maju Jaya',
    },
    {
      text: 'Mobil Daihatsu yang kami beli sangat nyaman dan irit. Cocok untuk kebutuhan keluarga dan bisnis kami.',
      author: '— Ibu Sari, Owner Toko Kita',
    },

  ];

  return (
    <section className="bg-gray-50 py-20" data-aos="zoom-in">
      <h2 className="text-3xl font-semibold text-center mb-12">Apa Kata Klien Kami</h2>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {testimonies.map((t, i) => (
          <blockquote key={i} className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 italic">{`"${t.text}"`}</p>
            <footer className="mt-4 text-right font-semibold text-black">{t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
