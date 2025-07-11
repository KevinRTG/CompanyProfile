'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname(); // ✅

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

  const getLinkClass = (href: string, sectionName: string) => {
    const isActive = activeSection === sectionName;
    if (isActive) return 'text-blue-600';
    return isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-600';
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#hero" className={`text-2xl font-bold transition ${isScrolled ? 'text-black' : 'text-white'}`}>
          MyCompany
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/#hero" className={getLinkClass('/#hero', 'hero')}>Home</Link>
          <Link href="/#produk" className={getLinkClass('/#produk', 'produk')}>Produk</Link>
          <Link
            href="/about"
            className={`${pathname === '/about' ? 'text-blue-600' : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-600'}`}
          >
            Tentang
          </Link>
          <Link
            href="/contact"
            className={`${pathname === '/contact' ? 'text-blue-600' : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-600'}`}
          >
            Kontak
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur px-4 py-2 space-y-2 shadow overflow-hidden"
          >
            <Link href="/#hero" className="block text-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/#produk" className="block text-gray-800" onClick={() => setIsOpen(false)}>Produk</Link>
            <Link href="/about" className="block text-gray-800" onClick={() => setIsOpen(false)}>Tentang</Link>
            <Link href="/contact" className="block text-gray-800" onClick={() => setIsOpen(false)}>Kontak</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
