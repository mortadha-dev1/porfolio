import { Download } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import avatarImg from '../assets/avatar.webp';

export default function Hero({ darkMode, t }) {
  const metrics = [
    { value: '1+', label: t.metrics.experience },
    { value: '1+', label: t.metrics.project },
    { value: '100%', label: t.metrics.dedication },
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <div>
            <span className="inline-block text-gold-accent font-bold text-lg tracking-wider border-b-2 border-gold-accent pb-1">
              {t.hello}
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              MORTADHA <span className="text-gold-accent">AKKARI</span>
            </h1>
            <p className={`mt-2 text-xl font-semibold tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.subtitle}
            </p>
          </div>

          <p className={`text-lg max-w-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.bio}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download="Mortadha_Akkari_CV.pdf"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-lg shadow-sm text-black bg-gold-accent hover:bg-gold-hover hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Download className="w-5 h-5 mr-2" />
              {t.downloadCv}
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center justify-center px-6 py-3.5 border text-base font-bold rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 ${
                darkMode
                  ? 'border-white/20 hover:border-gold-accent hover:text-gold-accent text-white'
                  : 'border-gray-300 hover:border-gold-accent hover:text-gold-accent text-gray-800'
              }`}
            >
              {t.contactForm}
            </a>
            <a
              href="https://github.com/github-mortadha"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3.5 border text-base font-bold rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 ${
                darkMode
                  ? 'border-white/20 hover:border-gold-accent hover:text-gold-accent text-white'
                  : 'border-gray-300 hover:border-gold-accent hover:text-gold-accent text-gray-800'
              }`}
            >
              <Github className="w-5 h-5 mr-2" />
              {t.github}
            </a>
          </div>
        </div>

        {/* Right Column: Profile photo */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {darkMode && (
            <div className="absolute inset-0 bg-gold-accent/10 rounded-full filter blur-3xl w-72 h-72 m-auto -z-10"></div>
          )}
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold-accent/60 via-gold-accent/20 to-transparent opacity-80 ${
              darkMode ? '' : 'from-gold-accent/50'
            }`} />
            <img
              src={avatarImg}
              alt="Mortadha Akkari"
              width={640}
              height={640}
              decoding="async"
              fetchPriority="high"
              className="relative w-full aspect-square rounded-2xl object-cover object-top border-2 border-gold-accent/40 shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode
                  ? 'bg-dark-card border-white/5 hover:border-gold-accent/30 shadow-black/20'
                  : 'bg-white border-black/5 hover:border-gold-accent/30 shadow-gray-100'
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gold-accent tracking-tight">
                {metric.value}
              </div>
              <div className={`mt-2 text-xs sm:text-sm font-semibold tracking-wider uppercase ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
