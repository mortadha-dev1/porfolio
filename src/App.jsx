import { useState, useEffect } from 'react';
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
import SEOHead from './seo/SEOHead';
import { useActiveSection } from './seo/useActiveSection';
import avatarImg from './assets/avatar.webp';
import { dividerBorder } from './utils/styles';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'fr' ? 'fr' : 'en';
  });

  const pageKey = useActiveSection('home');

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
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const t = translations[lang];

  return (
    <div
      className={`min-h-screen relative overflow-x-hidden font-sans transition-colors duration-300 ${
        darkMode ? 'bg-[#0B0C10] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <SEOHead
        lang={lang}
        darkMode={darkMode}
        pageKey={pageKey}
        preloadHeroHref={avatarImg}
      />

      {darkMode && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-accent/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />
          <div className="absolute top-[30%] left-[-200px] w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full filter blur-[150px] pointer-events-none -z-10" />
          <div className="absolute bottom-[20%] right-[-100px] w-[500px] h-[500px] bg-gold-accent/[0.04] rounded-full filter blur-[130px] pointer-events-none -z-10" />
        </>
      )}

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        lang={lang}
        setLang={setLang}
        t={t.nav}
      />

      <main className="relative z-10">
        <Hero darkMode={darkMode} t={t.hero} />
        <SectionDivider darkMode={darkMode} />
        <AboutSkills darkMode={darkMode} t={t.about} />
        <SectionDivider darkMode={darkMode} />
        <Experience darkMode={darkMode} t={t.experience} />
        <SectionDivider darkMode={darkMode} />
        <Projects darkMode={darkMode} t={t.projects} />
        <SectionDivider darkMode={darkMode} />
        <EducationLanguages darkMode={darkMode} t={t.education} />
        <SectionDivider darkMode={darkMode} />
        <ContactForm darkMode={darkMode} lang={lang} />
        <SectionDivider darkMode={darkMode} />
        <FAQ darkMode={darkMode} lang={lang} />
      </main>

      <Footer darkMode={darkMode} lang={lang} />
    </div>
  );
}

function SectionDivider({ darkMode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr className={`border-dashed ${dividerBorder(darkMode)}`} />
    </div>
  );
}
