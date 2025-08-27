import HeroSlider from './HeroSlider';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[80vh] overflow-hidden">
      <HeroSlider />

      {/* Overlay Teks */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 text-white">
        <h1
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Daihatsu, Teman Perjalanan Hidup Anda
        </h1>
        <p
          className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Pelayanan Ramah, Mobil Berkualitas
        </p>
        <a
          href="#produk"
          className="mt-6 inline-block bg-transparent hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          Lihat Produk Kami
        </a>
      </div>
    </section>
  );
}
