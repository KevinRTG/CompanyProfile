'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['hero', 'produk'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const getLinkClass = (href: string, sectionName?: string) => {
  const isActive =
    (sectionName && activeSection === sectionName) ||
    pathname === href;

  const baseStyle =
    'px-3 py-1 rounded transition-all duration-300';

  // Belum scroll → putih, teks merah
  const topStyle = 'text-red-600 bg-white hover:bg-red-50';

  // Sudah scroll → menu putih transparan + teks putih
  const scrollStyle =
    'text-red-600 bg-white backdrop-blur-lg hover:bg-white/30';

  // Aktif
  const activeStyle = isScrolled
    ? 'bg-red-700 text-white font-bold shadow-[0_0_5px_rgba(255,255,255,0.8)]'
    : 'bg-red-100 text-red-700 font-bold';

  return `${baseStyle} ${
    isActive
      ? activeStyle
      : isScrolled
      ? scrollStyle
      : topStyle
  }`;
};


  return (
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/15 backdrop-blur-lg'
            : 'bg-white'
        }`}
      >

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" className="flex items-center space-x-3">
          <img
            src="https://daihatsu.co.id/_nuxt/daihatsu-logo.BbT9teEy.svg"
            alt="Logo Daihatsu"
            className="h-8 w-auto transition"
          />
          <span
            className={`text-2xl font-bold transition ${
              isScrolled ? 'text-red-600' : 'text-red-600'
            }`}
          >
            Daihatsu Sales
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-m font-medium">
          <Link href="/#hero" className={getLinkClass('/#hero', 'hero')}>
            Home
          </Link>
          <Link href="/#produk" className={getLinkClass('/#produk', 'produk')}>
            Produk
          </Link>
          <Link href="/about" className={getLinkClass('/about')}>
            Tentang
          </Link>
          <Link href="/contact" className={getLinkClass('/contact')}>
            Kontak
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isScrolled ? 'text-white' : 'text-red-600'} focus:outline-none`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden px-4 py-4 space-y-2 shadow-lg rounded-b-lg ${
              isScrolled ? 'bg-red-600' : 'bg-white'
            }`}
          >
            <Link
              href="/#hero"
              className={getLinkClass('/#hero', 'hero') + ' block text-center'}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#produk"
              className={getLinkClass('/#produk', 'produk') + ' block text-center'}
              onClick={() => setIsOpen(false)}
            >
              Produk
            </Link>
            <Link
              href="/about"
              className={getLinkClass('/about') + ' block text-center'}
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="/contact"
              className={getLinkClass('/contact') + ' block text-center'}
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
