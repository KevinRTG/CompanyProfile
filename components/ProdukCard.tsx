type ProdukCardProps = {
  src: string;
  title: string;
  desc: string;
  link: string;
};

export default function ProdukCard({ src, title, desc, link }: ProdukCardProps) {
  return (
    <div className="bg-red-600 p-6 rounded-lg w-64 shadow hover:shadow-lg transition">
      <img
        src={src}
        alt={title + ' - Mobil Daihatsu'}
        className="mb-4 w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
      <p className="text-white text-sm mb-4">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold hover:underline"
      >
        Lihat di Official Website
      </a>
    </div>
  );
}
