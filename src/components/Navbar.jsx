import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode, lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.education, href: '#education' },
    { name: t.contact, href: '#contact' },
    { name: t.faq, href: '#faq' },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
      darkMode
        ? 'bg-[#0B0C10]/80 border-white/5 text-white'
        : 'bg-white/80 border-black/5 text-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          {/* Logo — MA only */}
          <a
            href="#home"
            className="shrink-0 font-sans font-black text-2xl tracking-wider text-gold-accent hover:opacity-90 transition-opacity"
            aria-label="MA — Home"
          >
            MA
          </a>

          {/* Desktop Navigation — lg to avoid overcrowding */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center min-w-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-accent after:transition-all hover:after:w-full ${
                  darkMode ? 'hover:text-gold-accent text-gray-300' : 'hover:text-gold-accent text-gray-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language switcher — shows active language */}
            <div
              className={`flex items-center rounded-lg border p-0.5 text-xs font-bold uppercase ${
                darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'
              }`}
              role="group"
              aria-label={lang === 'fr' ? 'Changer de langue' : 'Change language'}
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1.5 rounded-md transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-gold-accent text-black shadow-sm'
                    : darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-500 hover:text-gray-900'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1.5 rounded-md transition-all duration-200 ${
                  lang === 'fr'
                    ? 'bg-gold-accent text-black shadow-sm'
                    : darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-500 hover:text-gray-900'
                }`}
                aria-pressed={lang === 'fr'}
              >
                FR
              </button>
            </div>

            <button
              type="button"
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                darkMode
                  ? 'bg-white/5 hover:bg-white/10 text-gold-accent'
                  : 'bg-black/5 hover:bg-black/10 text-amber-600'
              }`}
              aria-label={lang === 'fr' ? 'Changer le thème' : 'Toggle theme'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
              aria-label={lang === 'fr' ? 'Ouvrir le menu' : 'Toggle menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet Navigation */}
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[min(70vh,32rem)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } ${darkMode ? 'bg-[#0D0E12] border-t border-white/5' : 'bg-gray-50 border-t border-black/5'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-all ${
                darkMode
                  ? 'hover:bg-white/5 hover:text-gold-accent text-gray-300'
                  : 'hover:bg-black/5 hover:text-gold-accent text-gray-700'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
