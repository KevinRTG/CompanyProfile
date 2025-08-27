'use client';

import Link from 'next/link';

type Props = {
  pathname: string;
  activeSection: string;
  isScrolled: boolean;
  closeMenu: () => void;
};

export default function DesktopMenu({ pathname, activeSection, isScrolled, closeMenu }: Props) {
  const getLinkClass = (href: string, sectionName?: string) => {
    const isActive =
      (sectionName && activeSection === sectionName) || pathname === href;

    const baseStyle = 'px-3 py-1 rounded transition-all duration-300';
    const topStyle = 'text-red-600 bg-white hover:bg-red-50';
    const scrollStyle = 'text-red-600 bg-white backdrop-blur-lg hover:bg-white/30';
    const activeStyle = isScrolled
      ? 'bg-red-700 text-white font-bold shadow-[0_0_5px_rgba(255,255,255,0.8)]'
      : 'bg-red-100 text-red-700 font-bold';

    return `${baseStyle} ${isActive ? activeStyle : isScrolled ? scrollStyle : topStyle}`;
  };

  return (
    <div className="hidden md:flex space-x-4 text-m font-medium">
      <Link href="/#hero" className={getLinkClass('/#hero', 'hero')}>Home</Link>
      <Link href="/#produk" onClick={closeMenu} className={getLinkClass('/#produk', 'produk')}>Produk</Link>
      <Link href="/about" className={getLinkClass('/about')}>Tentang</Link>
      <Link href="/contact" className={getLinkClass('/contact')}>Kontak</Link>
    </div>
  );
}
