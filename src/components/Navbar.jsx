import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode, lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.education, href: '#education' },
    { name: lang === 'fr' ? 'Formulaire de Contact' : 'Contact Form', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLanguageToggle = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
      darkMode 
        ? 'bg-[#0B0C10]/80 border-white/5 text-white' 
        : 'bg-white/80 border-black/5 text-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 font-sans font-extrabold text-xl tracking-wider hover:opacity-95 transition-opacity">
            <span className="text-gold-accent font-black">MA</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>MORTADHA</span>
            <span className="text-gold-accent">AKKARI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-accent after:transition-all hover:after:w-full ${
                  darkMode ? 'hover:text-gold-accent text-gray-300' : 'hover:text-gold-accent text-gray-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Language Toggle + Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              onClick={handleLanguageToggle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all duration-300 border ${
                darkMode
                  ? 'border-white/10 hover:border-gold-accent/40 bg-white/5 text-gray-300 hover:text-gold-accent'
                  : 'border-black/10 hover:border-gold-accent/40 bg-black/5 text-gray-700 hover:text-amber-700'
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Français' : 'English'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 text-gold-accent' 
                  : 'bg-black/5 hover:bg-black/10 text-amber-600'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } ${darkMode ? 'bg-[#0D0E12] border-t border-white/5' : 'bg-gray-50 border-t border-black/5'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition-all ${
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
