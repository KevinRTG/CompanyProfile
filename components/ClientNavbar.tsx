'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';
import DesktopMenu from './ui/DesktopMenu';
import MobileMenu from './ui/MobileMenu';
import { useScrollSection } from '../hooks/useScrollSection';

export default function ClientNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled, activeSection } = useScrollSection([
    'hero',
    'produk',
    'testimoni',
    'about',
    'contact',
  ]);

  useLayoutEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    document.body.style.height = isOpen ? '100vh' : 'auto';
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/#hero" className="flex items-center space-x-2">
          <img
            src="https://daihatsu.co.id/_nuxt/daihatsu-logo.BbT9teEy.svg"
            alt="Logo Daihatsu"
            className="h-6 sm:h-8 w-auto transition"
          />
          <span className="text-2xl font-bold text-red-600">Daihatsu Sales</span>
        </Link>

        <DesktopMenu
          pathname={pathname}
          activeSection={activeSection || ''}
          isScrolled={isScrolled}
          closeMenu={() => setIsOpen(false)}
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
          aria-label="Toggle Menu"
        >
          <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'my-1'}`} />
          <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <motion.div>
        {isOpen && (
          <MobileMenu
            pathname={pathname}
            activeSection={activeSection || ''}
            isScrolled={isScrolled}
            closeMenu={() => setIsOpen(false)}
          />
        )}
      </motion.div>
    </motion.nav>
  );
}
