import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-sm">
        
        {/* Branding */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">PT. Nama Perusahaan</h3>
          <p>Solusi digital terpercaya untuk perkembangan bisnis Anda.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/#produk" className="hover:text-white">Produk</Link></li>
            <li><Link href="/contact" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-white font-semibold mb-3">Kontak Kami</h4>
          <p>📍 Jakarta, Indonesia</p>
          <p>📧 info@namaperusahaan.com</p>
          <p>📞 +62 812 3456 7890</p>
        </div>

        {/* Sosial Media (Teks Saja, 1 Kolom) */}
        <div>
          <h4 className="text-white font-semibold mb-3">Ikuti Kami</h4>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/" className="hover:text-white">Facebook</a></li>
            <li><a href="https://www.instagram.com/" className="hover:text-white">Instagram</a></li>
            <li><a href="https://www.twitter.com/" className="hover:text-white">Twitter</a></li>
            <li><a href="https://www.linkedin.com/" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; 2025 PT. Nama Perusahaan. All rights reserved.
      </div>
    </footer>
  );
}
