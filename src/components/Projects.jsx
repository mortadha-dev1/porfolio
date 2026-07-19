import React from 'react';
import { Laptop, Layout, ShieldCheck, CreditCard, ShoppingCart, Archive, Zap, ArrowUpRight } from 'lucide-react';
import freedaMockup from '../assets/freeda-mockup.png';

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Title */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 text-gold-accent font-bold tracking-wider uppercase bg-gold-accent/5 px-4 py-2 rounded-full border border-gold-accent/15 mb-3">
          <Laptop className="w-5 h-5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
          {t.title}
        </h2>
      </div>

      {/* Main Grid: Content & Mockups */}
      <div
        className={`p-8 sm:p-12 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? 'bg-dark-card border-white/5 shadow-black/30'
            : 'bg-white border-black/5 shadow-gray-100'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Platform details */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
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

            {/* Checklist highlights */}
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

            {/* Visit Site Button */}
            <a
              href="https://freeda.converty.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold-accent text-black font-bold hover:bg-gold-hover hover:scale-105 active:scale-95 transition-all duration-200 self-start mt-2"
            >
              <span>{t.visitSite || 'Visit Live Site'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Platform Visual Showcase */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative group overflow-hidden rounded-xl w-full shadow-2xl">
              {darkMode && (
                <div className="absolute inset-0 bg-gold-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none rounded-xl"></div>
              )}
              <img
                src={freedaMockup}
                alt="Freeda E-Commerce Platform — Live Storefront"
                className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Live badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs font-bold text-white">freeda.converty.shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
