import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSlider() {
  const slides = [
  'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=1920,q=85/assets/452b0147-3cf0-4ca8-a6ee-6d0bbb1db70f',
  'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=1920,q=85/assets/4b539665-f641-4faa-bc86-b7b007a95bd6',
  'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=1920,q=85/assets/66c8ba75-3b4a-4c84-9f24-f79d6f92b90d',
  'https://cms-2023.daihatsu.co.id/cdn-cgi/image/w=1920,q=85/assets/e36db7a8-8285-4853-9d2d-947f7fad0377',
];

  return (
    <div className="absolute inset-0 z-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="w-full h-full"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen">
              <img
                src={src}
                alt={`Slide Daihatsu ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>     
  );
}
