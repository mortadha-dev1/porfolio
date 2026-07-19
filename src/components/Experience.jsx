import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SECTION_SHELL, SECTION_BADGE, cardSurface } from '../utils/styles';

export default function Experience({ darkMode, t }) {
  const experiences = [
    {
      role: t.role,
      company: 'Ironbyte',
      period: t.period,
      location: t.location,
      description: t.bullets,
      tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'React.js', 'JWT', 'UML', 'Agile'],
    },
  ];

  return (
    <section id="experience" className={SECTION_SHELL}>
      {/* Title */}
      <div className="text-center mb-16">
        <div className={SECTION_BADGE}>
          <Briefcase className="w-5 h-5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
          {t.title}
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-gold-accent/25 py-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-12 last:mb-0 text-left">
            {/* Timeline dot */}
            <span className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-gold-accent ring-4 ${
              darkMode ? 'ring-[#0B0C10]' : 'ring-slate-50'
            }`}>
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#0B0C10]"></span>
            </span>

            {/* Experience Card */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${cardSurface(darkMode)}`}
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>{exp.role}</span>{' '}
                    <span className="text-gold-accent">@ {exp.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
                    <span className={`flex items-center gap-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <Calendar className="w-4 h-4 text-gold-accent" />
                      {exp.period}
                    </span>
                    <span className={`flex items-center gap-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <MapPin className="w-4 h-4 text-gold-accent" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Bullet Points */}
              <div className="mt-6 space-y-3.5">
                {exp.description.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="mt-8">
                <span className={`block text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'} mb-3`}>
                  {t.techUsed}
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        darkMode
                          ? 'bg-[#0B0C10] text-gold-accent border border-white/5'
                          : 'bg-gold-accent/10 text-amber-800 border border-gold-accent/20'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
