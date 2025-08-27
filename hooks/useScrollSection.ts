import { useLayoutEffect, useState } from 'react';

export function useScrollSection(sectionIds: string[], offset = 80) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const timeout = setTimeout(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }, 500); // tambahkan delay lebih panjang jika perlu

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return { isScrolled, activeSection };
}
