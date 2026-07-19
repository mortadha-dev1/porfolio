import { Laptop, Layout, ShieldCheck, CreditCard, ShoppingCart, Archive, Zap, ArrowUpRight } from 'lucide-react';
import freedaSite from '../assets/freeda-site.webp';
import { SECTION_SHELL, SECTION_BADGE } from '../utils/styles';

const FREEDA_URL = 'https://freeda.converty.shop/';

export default function Projects({ darkMode, t }) {
  const highlights = [
    { text: t.highlights.responsive, icon: <Layout className="w-5 h-5 text-gold-accent" /> },
    { text: t.highlights.auth, icon: <ShieldCheck className="w-5 h-5 text-gold-accent" /> },
    { text: t.highlights.payment, icon: <CreditCard className="w-5 h-5 text-gold-accent" /> },
    { text: t.highlights.cart, icon: <ShoppingCart className="w-5 h-5 text-gold-accent" /> },
    { text: t.highlights.products, icon: <Archive className="w-5 h-5 text-gold-accent" /> },
    { text: t.highlights.orders, icon: <Zap className="w-5 h-5 text-gold-accent" /> },
  ];

  return (
    <section id="projects" className={SECTION_SHELL}>
      <div className="text-center mb-16">
        <div className={SECTION_BADGE}>
          <Laptop className="w-5 h-5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
          {t.title}
        </h2>
      </div>

      <div
        className={`p-6 sm:p-8 lg:p-12 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? 'bg-dark-card border-white/5 shadow-black/30'
            : 'bg-white border-black/5 shadow-gray-100'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
          {/* Left column — same top/bottom stretch as preview */}
          <div className="lg:col-span-5 flex flex-col text-left h-full min-h-0">
            <div className="space-y-5 flex-1">
              <div>
                <span className="text-sm font-extrabold uppercase tracking-wider text-gold-accent">
                  {t.caseStudy}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
                  {t.projectName}
                </h3>
              </div>

              <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.description}
              </p>

              <div className="grid grid-cols-1 gap-3">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg shrink-0 ${darkMode ? 'bg-[#0B0C10]' : 'bg-gray-50'}`}>
                      {highlight.icon}
                    </div>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={FREEDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold-accent text-black font-bold hover:bg-gold-hover hover:scale-105 active:scale-95 transition-all duration-200 self-start mt-6"
            >
              <span>{t.visitSite || 'Visit Live Site'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right column — aligned top with left, fills row height */}
          <div className="lg:col-span-7 flex h-full min-h-[22rem] sm:min-h-[26rem]">
            <a
              href={FREEDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Freeda store"
              className={`group relative flex flex-col w-full h-full overflow-hidden rounded-xl shadow-2xl border focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-accent ${
                darkMode ? 'border-white/10 bg-[#0B0C10]' : 'border-black/10 bg-gray-100'
              }`}
            >
              {/* Browser chrome for visual alignment with left content top */}
              <div className={`flex items-center gap-2 px-3 py-2.5 border-b shrink-0 ${
                darkMode ? 'bg-[#12141A] border-white/10' : 'bg-gray-50 border-black/10'
              }`}>
                <span className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </span>
                <div className={`flex-1 flex items-center gap-2 min-w-0 px-3 py-1 rounded-md text-xs font-medium ${
                  darkMode ? 'bg-black/40 text-gray-300' : 'bg-white text-gray-600 border border-black/5'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 animate-pulse" />
                  <span className="truncate">freeda.converty.shop</span>
                </div>
              </div>

              <div className="relative flex-1 min-h-0 overflow-hidden">
                <img
                  src={freedaSite}
                  alt="Freeda — freeda.converty.shop"
                  width={1280}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-accent text-black text-sm font-bold shadow-lg">
                    {t.visitSite}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
