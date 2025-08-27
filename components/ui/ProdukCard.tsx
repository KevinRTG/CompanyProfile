'use client';

import { useState } from 'react';

type ProdukCardProps = {
  src: string;
  title: string;
  desc: string;
  link: string;
};

export default function ProdukCard({ src, title, desc, link }: ProdukCardProps) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-sm text-left">
      <img
        src={src}
        alt={`${title} - Mobil Daihatsu`}
        className="w-full h-44 object-cover rounded-t-xl"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        <p className={`text-sm text-gray-600 ${showFullDesc ? '' : 'line-clamp-3'}`}>
          {desc}
        </p>

        <div className="mt-2 flex flex-col gap-3">
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-sm text-red-600 hover:underline self-start"
          >
            {showFullDesc ? 'Tutup' : 'Selengkapnya'}
          </button>

          <div className="flex justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Lihat Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
