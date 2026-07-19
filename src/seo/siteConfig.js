/**
 * Site SEO configuration.
 * Override production URL with VITE_SITE_URL (no trailing slash).
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://mortadha-dev1.github.io/porfolio'
).replace(/\/$/, '');

export const SITE_NAME = 'Mortadha Akkari Portfolio';
export const AUTHOR = 'Mortadha Akkari';
export const TWITTER_HANDLE = '@mortadha_akkari';
export const THEME_COLOR_DARK = '#0B0C10';
export const THEME_COLOR_LIGHT = '#f8fafc';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;

export const PERSON = {
  name: 'Mortadha Akkari',
  jobTitle: 'Full-Stack Developer',
  email: 'mortadha.akkari@outlook.fr',
  telephone: '+21646327829',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.webp`,
  sameAs: [
    'https://github.com/mortadha-dev1',
    'https://www.linkedin.com/in/mortadha-akkari-93b9853a1/',
  ],
  address: {
    addressLocality: 'Soukra',
    addressRegion: 'Ariana',
    addressCountry: 'TN',
  },
  alumniOf: 'ISAMM (Institut Supérieur des Arts Multimédia de Manouba)',
  knowsAbout: [
    'React',
    'Node.js',
    'Express',
    'MySQL',
    'MongoDB',
    'Flutter',
    'Unity',
    'Full-Stack Development',
  ],
};

/** Section / “page” SEO — descriptions drawn from existing portfolio copy */
export const seoPages = {
  home: {
    path: '/#home',
    en: {
      title: 'Mortadha Akkari | Full-Stack Developer Portfolio',
      description:
        'I build modern web, mobile and game applications with clean code and great user experiences. Specializing in responsive systems and full-stack solutions.',
    },
    fr: {
      title: 'Mortadha Akkari | Portfolio Développeur Full-Stack',
      description:
        "Diplômé en Informatique de l'ISAMM, motivé et passionné, avec une solide formation en développement web, mobile et de jeux. Compétent en technologies frontend et back-end, C#, Unity et engagé à fournir des solutions innovantes.",
    },
  },
  about: {
    path: '/#about',
    en: {
      title: 'About | Mortadha Akkari — Full-Stack Developer',
      description:
        'Passionate software engineer specializing in developing modern responsive web interfaces, robust backend microservices, mobile apps, and video game architectures.',
    },
    fr: {
      title: 'À Propos | Mortadha Akkari — Développeur Full-Stack',
      description:
        "Passionné par l'ingénierie logicielle avec un intérêt marqué pour la création de plateformes interactives, d'interfaces web adaptatives, d'APIs robustes et de mécaniques de jeux.",
    },
  },
  skills: {
    path: '/#skills',
    en: {
      title: 'Technical Skills | Mortadha Akkari',
      description:
        'A curated selection of tools, technologies, and framework proficiencies: React, Node.js, Express, MySQL, MongoDB, Flutter, C#, Unity.',
    },
    fr: {
      title: 'Compétences Techniques | Mortadha Akkari',
      description:
        "Une sélection rigoureuse d'outils, langages et frameworks maîtrisés : React, Node.js, Express, MySQL, MongoDB, Flutter, C#, Unity.",
    },
  },
  experience: {
    path: '/#experience',
    en: {
      title: 'Experience | Mortadha Akkari — Work History & Internships',
      description:
        'Web Developer Intern at Ironbyte (Feb 2025 – Jun 2025, Tunis). Built a crowdfunding platform with React, Node.js, Express, Sequelize, JWT, and Agile Scrum.',
    },
    fr: {
      title: 'Expérience | Mortadha Akkari — Historique & Stages',
      description:
        'Stagiaire PFE — Développement Web chez Ironbyte (Fév 2025 – Juin 2025, Tunis). Plateforme crowdfunding avec React, Node.js, Express, Sequelize, JWT et Agile Scrum.',
    },
  },
  projects: {
    path: '/#projects',
    en: {
      title: 'Projects | Freeda E-Commerce Showcase — Mortadha Akkari',
      description:
        'An online electronic storefront specializing in consumer electronics and accessories. Engineered to deliver frictionless user experiences with dynamic filtering, cart updates, and robust security.',
    },
    fr: {
      title: 'Projets | Freeda Vitrine E-Commerce — Mortadha Akkari',
      description:
        "Freeda, une plateforme de commerce électronique spécialisée dans les électroniques de consommation et les accessoires. Interface responsive, authentification sécurisée et intégration de paiement.",
    },
  },
  education: {
    path: '/#education',
    en: {
      title: 'Education & Languages | Mortadha Akkari',
      description:
        'Bachelor in Computer Science from ISAMM (2025). Baccalauréat in Computer Science, Lycée Soukra (2021). Languages: Arabic, French, English.',
    },
    fr: {
      title: 'Éducation & Langues | Mortadha Akkari',
      description:
        "Licence en Informatique de l'ISAMM (2025). Baccalauréat en Informatique, Lycée Soukra (2021). Langues : Français, Arabe, Anglais.",
    },
  },
  contact: {
    path: '/#contact',
    en: {
      title: 'Contact | Mortadha Akkari — Send a Message',
      description:
        "Have a project in mind or just want to say hello? Reach Mortadha Akkari at mortadha.akkari@outlook.fr or use the contact form.",
    },
    fr: {
      title: 'Contact | Mortadha Akkari — Envoyer un Message',
      description:
        "Vous avez un projet en tête ou voulez simplement dire bonjour ? Contactez Mortadha Akkari à mortadha.akkari@outlook.fr ou via le formulaire.",
    },
  },
  faq: {
    path: '/#faq',
    en: {
      title: 'FAQ | Mortadha Akkari — Frequently Asked Questions',
      description:
        'Answers to the most common questions about availability, technologies, remote work, project timelines, and how to get in touch.',
    },
    fr: {
      title: 'FAQ | Mortadha Akkari — Questions Fréquemment Posées',
      description:
        'Réponses aux questions les plus courantes sur la disponibilité, les technologies, le télétravail, les délais de projet et comment prendre contact.',
    },
  },
};

export const SECTION_IDS = Object.keys(seoPages);
