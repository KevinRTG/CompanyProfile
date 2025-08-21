import ProdukCard from './ProdukCard';

const products = [
  {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=800,q=85/assets/767acc3d-8bf4-4e3a-a564-07f42aca334e',
    title: 'All New Xenia',
    desc: 'MPV modern dan sporty untuk keluarga Indonesia, dengan kabin lega, fitur lengkap, dan pilihan mesin 1.3L atau 1.5L. Siap melaju di berbagai kondisi jalan, mulai Rp 226 jutaan.',
    link: 'https://daihatsu.co.id/product/all-new-xenia/',
  },
  {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=800,q=85/assets/abe6af5e-d6d9-4e6e-b87b-aa2f170436b7',
    title: 'Rocky e-Smart Hybrid',
    desc: 'Compact SUV bertenaga motor listrik penuh, irit bahan bakar, dan ramah lingkungan. Dilengkapi fitur pintar dan desain stylish untuk pengalaman berkendara yang aktif dan aman.',
    link: 'https://daihatsu.co.id/product/rocky-hybrid/',
  },
  // Tambah produk lain di sini
];

export default function ProdukSection() {
  return (
    <section id="produk" className="py-20 bg-white text-center" data-aos="fade-up">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">Produk Kami</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {products.map((p, i) => (
          <ProdukCard
            key={i}
            src={p.src}
            title={p.title}
            desc={p.desc}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}
