export default function CTASection() {
  return (
    <section id="chatbot" className="bg-red-600 text-white py-16 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-4">Butuh Konsultasi atau Penawaran?</h2>
      <p className="mb-6 text-lg">
        Klik tombol di bawah untuk terhubung dengan kami melalui chatbot!
      </p>
      <a
        href="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/21/08/20250621084259-I3M98JTN.json"
        className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-white/50 transition"
      >
        Mulai Chat
      </a>
    </section>
  );
}
