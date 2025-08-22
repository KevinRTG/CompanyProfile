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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    document.body.style.height = isOpen ? '100vh' : 'auto';
  }, [isOpen]);

  const getLinkClass = (href: string, sectionName?: string) => {
    const isActive =
      (sectionName && activeSection === sectionName) ||
      pathname === href;

    const baseStyle = 'px-3 py-1 rounded transition-all duration-300';
    const topStyle = 'text-red-600 bg-white hover:bg-red-50';
    const scrollStyle = 'text-red-600 bg-white backdrop-blur-lg hover:bg-white/30';
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
        isScrolled ? 'bg-black/15 backdrop-blur-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/#hero" className="flex items-center space-x-3">
          <img
            src="https://daihatsu.co.id/_nuxt/daihatsu-logo.BbT9teEy.svg"
            alt="Logo Daihatsu"
            className="h-8 w-auto transition"
          />
          <span className="text-2xl font-bold text-red-600">
            Daihatsu Sales
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-m font-medium">
          <Link href="/#hero" className={getLinkClass('/#hero', 'hero')}>Home</Link>
          <Link href="/#produk" className={getLinkClass('/#produk', 'produk')}>Produk</Link>
          <Link href="/about" className={getLinkClass('/about')}>Tentang</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Kontak</Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex flex-col justify-center items-center group md:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-3' : 'top-2'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'top-3.5'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 top-3' : 'top-5'
            }`}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-white z-[999] flex flex-col items-center justify-center space-y-8 text-lg font-semibold text-red-600"
          >
            <Link href="/#hero" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/#produk" onClick={() => setIsOpen(false)}>Produk</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>Tentang</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Kontak</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
