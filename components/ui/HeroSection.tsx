import HeroSlider from './HeroSlider';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[80vh]">
      <HeroSlider />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg leading-snug">
          Daihatsu, Teman Perjalanan Hidup Anda
        </h1>
        <p className="mt-4 max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl drop-shadow-md">
          Pelayanan Ramah, Mobil Berkualitas
        </p>
        <a
          href="#produk"
          className="mt-6 inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition"
        >
          Lihat Produk Kami
        </a>
      </div>
    </section>
  );
}
