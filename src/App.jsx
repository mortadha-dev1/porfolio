import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationLanguages from './components/EducationLanguages';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { translations } from './utils/translations';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'fr' ? 'fr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#0B0C10';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#f8fafc';
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const t = translations[lang];

  const divider = (
    <div className="max-w-7xl mx-auto px-8">
      <hr className={`border-dashed ${darkMode ? 'border-white/5' : 'border-black/5'}`} />
    </div>
  );

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans transition-colors duration-300 ${
      darkMode ? 'bg-[#0B0C10] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background Glowing Ambiance */}
      {darkMode && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-accent/5 rounded-full filter blur-[120px] pointer-events-none -z-10"></div>
          <div className="absolute top-[30%] left-[-200px] w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full filter blur-[150px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-[20%] right-[-100px] w-[500px] h-[500px] bg-gold-accent/[0.04] rounded-full filter blur-[130px] pointer-events-none -z-10"></div>
        </>
      )}

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        lang={lang}
        setLang={setLang}
        t={t.nav}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero darkMode={darkMode} t={t.hero} />
        {divider}
        <AboutSkills darkMode={darkMode} t={t.about} />
        {divider}
        <Experience darkMode={darkMode} t={t.experience} />
        {divider}
        <Projects darkMode={darkMode} t={t.projects} />
        {divider}
        <EducationLanguages darkMode={darkMode} t={t.education} />
        {divider}
        <ContactForm darkMode={darkMode} lang={lang} />
        {divider}
        <FAQ darkMode={darkMode} lang={lang} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} lang={lang} />
    </div>
  );
}
