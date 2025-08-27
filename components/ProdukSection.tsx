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
  {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=800,q=85/assets/e49ecda9-b70b-4be4-8d21-54c159e8d3fa',
    title: 'New Terios',
    desc: 'SUV tangguh dengan desain sporty dan kabin luas, siap menemani petualangan seru bersama keluarga. Dilengkapi fitur modern dan ground clearance 220 mm, tersedia mulai Rp 245 jutaan.',
    link: 'https://daihatsu.co.id/product/new-terios/',
  },
  {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=800,q=85/assets/58d76dbe-a6e1-4626-8d76-272b85221017',
    title: 'New Sigra',
    desc: 'MPV 7-seater yang stylish dan elegan, dirancang untuk keluarga Indonesia yang aktif. Kabin luas, bagasi lega, dan fitur keselamatan lengkap menjadikan Sigra sahabat seru untuk perjalanan harian maupun liburan. Tersedia mulai Rp 141 jutaan',
    link: 'https://daihatsu.co.id/product/sigra/',
  },
  {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=300,q=85/assets/5e5f3419-b067-4930-8edb-f31e17ddd78a',
    title: 'New Sirion',
    desc: 'City car stylish untuk jiwa muda yang aktif. Desain sporty, kabin lega, dan fitur canggih menjadikan Sirion sahabat setia untuk mobilitas harian di kota. Hadir dengan transmisi CVT yang halus dan efisien, mulai dari Rp 233 jutaan.',
    link: 'https://daihatsu.co.id/product/new-sirion/',
  },
  {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=800,q=85/assets/ccc5768d-9ccc-4e6d-8aca-b88184577687',
    title: 'All New Ayla',
    desc: 'Hatchback stylish berbasis DNGA, tampil agresif dan sporty dengan kabin lega untuk 5 penumpang. Cocok untuk keluarga muda yang aktif, dilengkapi fitur keselamatan lengkap dan harga mulai Rp 138 jutaan.',
    link: 'https://daihatsu.co.id/product/ayla/',
  },
  {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=800,q=85/assets/bd242cce-8b8b-49cd-a715-b3b8af1cdebd',
    title: 'Luxio',
    desc: 'MPV elegan dengan kabin luas dan desain mewah, ideal untuk perjalanan keluarga maupun bisnis. Dilengkapi fitur kenyamanan dan keamanan lengkap, Luxio hadir sebagai sahabat elegan dengan harga mulai Rp 240 jutaan.',
    link: 'https://daihatsu.co.id/product/luxio/',
  },
    {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=800,q=85/assets/d5971146-f61d-4526-8449-390ed9e22dd0',
    title: 'Gran Max Mini Bus',
    desc: 'Solusi kendaraan bisnis yang luas, tangguh, dan efisien. Dengan kabin lega dan akses keluar-masuk yang mudah, Gran Max MB siap mendukung operasional harian Anda. Dilengkapi fitur keselamatan lengkap dan pilihan mesin 1.3L & 1.5L, mulai Rp 209 jutaan.',
    link: 'https://daihatsu.co.id/product/granmax-mb/',
  },
    {
    src: 'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=300,q=85/assets/2197c45a-72f8-4919-a2b6-8136c87cbd40',
    title: 'Gran Max Pick Up',
    desc: 'Pick-up tangguh dengan bak luas dan kuat, dirancang khusus untuk mendukung operasional bisnis harian. Kabin lega dan nyaman, serta pilihan mesin 1.3L & 1.5L yang efisien menjadikan Gran Max PU sahabat setia para pelaku usaha. Harga mulai Rp 163 jutaan.',
    link: 'https://daihatsu.co.id/product/granmax-pu/',
  },
  // Tambah produk lain di sini
];

export default function ProdukSection() {
  return (
    <section id="produk" className="py-20 bg-gray-50 text-center">
      <h2
        className="text-3xl font-bold text-gray-800 mb-4"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Produk Kami
      </h2>
      <p
        className="text-gray-500 mb-10 text-lg"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Temukan mobil Daihatsu yang sesuai dengan kebutuhan Anda
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[16px] gap-y-6 px-2 place-items-start">
        {products.map((p, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            data-aos-delay={100 + i * 100}
            data-aos-duration="1000"
          >
            <ProdukCard
              src={p.src}
              title={p.title}
              desc={p.desc}
              link={p.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
