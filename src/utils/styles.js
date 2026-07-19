/**
 * Shared Tailwind class strings used across sections.
 * Values must stay byte-identical to previous inline classNames.
 */

export const SECTION_SHELL =
  'py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20';

export const SECTION_BADGE =
  'inline-flex items-center justify-center gap-2 text-gold-accent font-bold tracking-wider uppercase bg-gold-accent/5 px-4 py-2 rounded-full border border-gold-accent/15 mb-3';

export const CARD_SHELL =
  'w-full p-6 sm:p-8 lg:p-10 rounded-2xl border transition-all duration-300 hover:shadow-xl';

export function cardSurface(darkMode) {
  return darkMode
    ? 'bg-dark-card border-white/5 shadow-black/20 hover:border-gold-accent/20'
    : 'bg-white border-black/5 shadow-gray-100 hover:border-gold-accent/20';
}

export function dividerBorder(darkMode) {
  return darkMode ? 'border-white/5' : 'border-black/5';
}
