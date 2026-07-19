import { useEffect, useState } from 'react';
import { SECTION_IDS } from './siteConfig';

/**
 * Tracks the active section for SEO metadata updates.
 * Uses hash when present; otherwise IntersectionObserver on sections.
 * Does not change scroll behavior or layout.
 */
export function useActiveSection(defaultSection = 'home') {
  const [pageKey, setPageKey] = useState(() => {
    if (typeof window === 'undefined') return defaultSection;
    const hash = window.location.hash.replace('#', '');
    return SECTION_IDS.includes(hash) ? hash : defaultSection;
  });

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (SECTION_IDS.includes(hash)) {
        setPageKey(hash);
      } else if (!hash) {
        setPageKey('home');
      }
    };

    window.addEventListener('hashchange', onHash);

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) {
      return () => window.removeEventListener('hashchange', onHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer hash if user navigated via nav links
        const hash = window.location.hash.replace('#', '');
        if (SECTION_IDS.includes(hash)) {
          setPageKey(hash);
          return;
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id && SECTION_IDS.includes(visible[0].target.id)) {
          setPageKey(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('hashchange', onHash);
      observer.disconnect();
    };
  }, []);

  return pageKey;
}
