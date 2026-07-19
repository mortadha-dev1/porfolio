import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ({ darkMode, lang }) {
  const [openIdx, setOpenIdx] = useState(null);

  const content = {
    en: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about my work and availability.',
      items: [
        {
          q: 'Are you currently available for new projects?',
          a: 'Yes! I am actively looking for full-time opportunities, freelance contracts, and interesting collaborative projects in web, mobile, or game development.',
        },
        {
          q: 'What technologies do you specialize in?',
          a: 'I specialize in the full JavaScript/TypeScript stack — React on the frontend, and Node.js / Express on the backend, paired with MySQL or MongoDB for data persistence. I also have hands-on experience with Flutter for mobile apps and C# / Unity for game development.',
        },
        {
          q: 'Can you work remotely or internationally?',
          a: 'Absolutely. I am based in Soukra, Ariana, Tunisia, but I am fully set up for remote work and open to collaborating with teams anywhere in the world.',
        },
        {
          q: 'How long does it take to build a project?',
          a: 'It depends entirely on the scope. A landing page or simple web app can take 1–2 weeks, while a full-featured platform like Freeda (complete with authentication, product management, and payment integration) typically takes 2–3 months.',
        },
        {
          q: 'Do you provide post-launch support?',
          a: 'Yes. I offer a period of post-launch support after every project to resolve any bugs, performance issues, or last-minute adjustments needed after going live.',
        },
        {
          q: 'How can I get in touch with you?',
          a: 'The fastest way is to fill out the contact form above, or send me a direct email at mortadha.akkari@outlook.fr. I typically respond within 24 hours.',
        },
      ],
    },
    fr: {
      badge: 'FAQ',
      title: 'Questions Fréquemment Posées',
      subtitle: 'Réponses aux questions les plus courantes sur mon travail et ma disponibilité.',
      items: [
        {
          q: 'Êtes-vous actuellement disponible pour de nouveaux projets ?',
          a: "Oui ! Je recherche activement des opportunités à temps plein, des contrats freelance et des projets collaboratifs intéressants dans le développement web, mobile ou de jeux.",
        },
        {
          q: 'Quelles technologies maîtrisez-vous ?',
          a: "Je me spécialise dans la stack JavaScript/TypeScript complète — React côté frontend, et Node.js / Express côté backend, associés à MySQL ou MongoDB. J'ai également une expérience pratique avec Flutter pour les applications mobiles et C# / Unity pour le développement de jeux.",
        },
        {
          q: 'Pouvez-vous travailler à distance ou à l\'international ?',
          a: "Absolument. Je suis basé à Soukra, Ariana, Tunisie, mais je suis entièrement configuré pour le travail à distance et ouvert à la collaboration avec des équipes partout dans le monde.",
        },
        {
          q: 'Combien de temps faut-il pour construire un projet ?',
          a: "Cela dépend entièrement de la portée. Une page d'atterrissage ou une application web simple peut prendre 1 à 2 semaines, tandis qu'une plateforme complète comme Freeda prend généralement 2 à 3 mois.",
        },
        {
          q: 'Fournissez-vous un support après le lancement ?',
          a: "Oui. J'offre une période de support post-lancement après chaque projet pour résoudre les bugs, problèmes de performance ou ajustements de dernière minute nécessaires après la mise en ligne.",
        },
        {
          q: 'Comment puis-je vous contacter ?',
          a: "La façon la plus rapide est de remplir le formulaire de contact ci-dessus, ou de m'envoyer un email directement à mortadha.akkari@outlook.fr. Je réponds généralement dans les 24 heures.",
        },
      ],
    },
  };

  const l = content[lang] || content.en;

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Title */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 text-gold-accent font-bold tracking-wider uppercase bg-gold-accent/5 px-4 py-2 rounded-full border border-gold-accent/15 mb-3">
          <HelpCircle className="w-5 h-5" />
          <span>{l.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">{l.title}</h2>
        <p className={`mt-4 max-w-xl mx-auto text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {l.subtitle}
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-3">
        {l.items.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl border overflow-hidden transition-all duration-300 ${
              darkMode
                ? `bg-dark-card border-white/5 ${openIdx === idx ? 'border-gold-accent/30' : 'hover:border-white/10'}`
                : `bg-white border-black/5 ${openIdx === idx ? 'border-gold-accent/30' : 'hover:border-black/10'}`
            }`}
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
            >
              <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                openIdx === idx ? 'text-gold-accent' : darkMode ? 'text-white group-hover:text-gold-accent' : 'text-gray-900 group-hover:text-amber-700'
              }`}>
                {item.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-gold-accent transition-transform duration-300 ${
                  openIdx === idx ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {/* Collapsible answer */}
            <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className={`px-6 pb-5 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
