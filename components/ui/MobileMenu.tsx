'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  pathname: string;
  activeSection: string;
  isScrolled: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({ pathname, activeSection, isScrolled, closeMenu }: Props) {
  const getLinkClass = (href: string, sectionName?: string) => {
    const isActive =
      (sectionName && activeSection === sectionName) || pathname === href;

    const baseStyle = 'text-lg font-semibold transition-all duration-300';
    const activeStyle = 'text-white bg-red-600 px-4 py-2 rounded shadow';
    const scrollStyle = 'text-red-600 hover:text-red-800';
    const topStyle = 'text-red-600 hover:text-red-400';

    return `${baseStyle} ${isActive ? activeStyle : isScrolled ? scrollStyle : topStyle}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center space-y-8 px-6 py-10 overflow-y-auto"
    >
      <Link href="/#hero" onClick={closeMenu} className={getLinkClass('/#hero', 'hero')}>Home</Link>
      <Link href="/#produk" onClick={closeMenu} className={getLinkClass('/#produk', 'produk')}>Produk</Link>
      <Link href="/about" onClick={closeMenu} className={getLinkClass('/about')}>Tentang</Link>
      <Link href="/contact" onClick={closeMenu} className={getLinkClass('/contact')}>Kontak</Link>
    </motion.div>
  );
}
