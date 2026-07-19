import { GraduationCap, Languages, Calendar } from 'lucide-react';
import { SECTION_SHELL, CARD_SHELL, cardSurface } from '../utils/styles';

export default function EducationLanguages({ darkMode, t }) {
  return (
    <section id="education" className={SECTION_SHELL}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Education Card */}
        <div className="lg:col-span-6 flex">
          <div className={`${CARD_SHELL} ${cardSurface(darkMode)}`}>
            <div className="flex items-center gap-2 mb-8 text-left">
              <GraduationCap className="w-6 h-6 text-gold-accent shrink-0" />
              <h2 className="text-2xl font-bold tracking-tight">{t.title}</h2>
            </div>

            <div className="space-y-8 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gold-accent/20 text-left">
              {t.degrees.map((edu, idx) => (
                <div key={idx} className="relative pl-8">
                  <span className={`absolute left-1 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-accent ring-4 ${
                    darkMode ? 'ring-dark-card' : 'ring-white'
                  }`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0B0C10]"></span>
                  </span>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className={`text-sm font-semibold mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs font-bold text-gold-accent">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.year}
                      </span>
                    </div>
                    {edu.specialization && (
                      <div className="mt-3">
                        <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${
                          darkMode ? 'bg-[#0B0C10] text-gray-300 border border-white/5' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {edu.specialization}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Languages Card */}
        <div className="lg:col-span-6 flex">
          <div className={`${CARD_SHELL} ${cardSurface(darkMode)}`}>
            <div className="flex items-center gap-2 mb-8 text-left">
              <Languages className="w-6 h-6 text-gold-accent shrink-0" />
              <h2 className="text-2xl font-bold tracking-tight">{t.languages}</h2>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-start">
              {t.langList.map((language, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold border transition-all duration-200 hover:scale-105 ${
                    darkMode
                      ? 'bg-[#0B0C10] border-white/5 text-gray-300 hover:border-gold-accent/40 hover:text-white'
                      : 'bg-slate-50 border-black/5 text-gray-700 hover:border-gold-accent/40 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-gold-accent mr-3 shrink-0"></span>
                  {language}
                </span>
              ))}
            </div>

            <div className={`mt-8 p-4 rounded-xl border border-dashed text-left ${
              darkMode ? 'bg-[#0B0C10] border-white/5' : 'bg-gray-50 border-black/5'
            }`}>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.langNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
