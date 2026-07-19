import { Mail, MapPin, Phone } from 'lucide-react';
import { LinkedinIcon as Linkedin, GithubIcon as Github } from './Icons';

export default function Footer({ darkMode, lang }) {
  const content = {
    en: {
      role: 'Full-Stack Developer',
      tagline: 'Building modern web, mobile & game experiences.',
      contactTitle: 'Contact',
      navTitle: 'Navigation',
      nav: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
        { label: 'Contact', href: '#contact' },
        { label: 'FAQ', href: '#faq' },
      ],
      copyright: '© 2025 Mortadha Akkari. All rights reserved.',
      location: 'Soukra, Ariana, Tunisia',
      remote: 'Soukra • Tunis • Remote',
    },
    fr: {
      role: 'Développeur Full-Stack',
      tagline: 'Création d\'expériences web, mobile et jeux vidéo modernes.',
      contactTitle: 'Contact',
      navTitle: 'Navigation',
      nav: [
        { label: 'Accueil', href: '#home' },
        { label: 'À Propos', href: '#about' },
        { label: 'Compétences', href: '#skills' },
        { label: 'Expérience', href: '#experience' },
        { label: 'Projets', href: '#projects' },
        { label: 'Éducation', href: '#education' },
        { label: 'Contact', href: '#contact' },
        { label: 'FAQ', href: '#faq' },
      ],
      copyright: '© 2025 Mortadha Akkari. Tous droits réservés.',
      location: 'Soukra, Ariana, Tunisie',
      remote: 'Soukra • Tunis • Distant',
    },
  };

  const l = content[lang] || content.en;

  const contactDetails = [
    {
      icon: <Mail className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />,
      value: 'mortadha.akkari@outlook.fr',
      href: 'mailto:mortadha.akkari@outlook.fr',
    },
    {
      icon: <Phone className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />,
      value: '+216 46 327 829',
      href: 'https://wa.me/21646327829',
      isWhatsApp: true,
    },
    {
      icon: <Linkedin className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />,
      value: 'Mortadha Akkari',
      href: 'https://www.linkedin.com/in/mortadha-akkari-93b9853a1/?locale=en',
    },
    {
      icon: <Github className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />,
      value: 'github-mortadha',
      href: 'https://github.com/github-mortadha',
    },
    {
      icon: <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />,
      value: l.location,
      href: null,
    },
  ];

  return (
    <footer className={`border-t relative overflow-hidden ${
      darkMode ? 'bg-[#08090C] border-white/5' : 'bg-gray-900 border-black/10'
    }`}>
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div>
              <a href="#home" className="inline-block font-black text-2xl tracking-wider text-gold-accent hover:opacity-90 transition-opacity">
                MA
              </a>
              <p className="text-gold-accent font-semibold text-sm mt-1">{l.role}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {l.tagline}
            </p>
            {/* Social icons row */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/mortadha-akkari-93b9853a1/?locale=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-gold-accent hover:border-gold-accent/40 hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/github-mortadha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-gold-accent hover:border-gold-accent/40 hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/21646327829"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-gold-accent hover:border-gold-accent/40 hover:scale-110 active:scale-95 transition-all duration-200"
              >
                {/* WhatsApp SVG icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-3">
              {l.contactTitle}
            </h3>
            <ul className="space-y-3">
              {contactDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') || item.href.startsWith('https://wa') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') || item.href.startsWith('https://wa') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 text-sm hover:text-gold-accent transition-colors duration-200 break-all"
                    >
                      {item.value}
                      {item.isWhatsApp && <span className="ml-1.5 text-[10px] font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">WhatsApp</span>}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-3">
              {l.navTitle}
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {l.nav.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-accent/40 group-hover:bg-gold-accent transition-colors shrink-0"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">{l.copyright}</p>
          <p className="text-gray-700 text-xs font-semibold tracking-widest uppercase">
            {l.remote}
          </p>
        </div>
      </div>
    </footer>
  );
}
