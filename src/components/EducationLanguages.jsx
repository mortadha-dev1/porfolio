import React from 'react';
import { GraduationCap, Languages, Calendar, MapPin } from 'lucide-react';

export default function EducationLanguages({ darkMode }) {
  const education = [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'ISAMM (Institut Supérieur des Arts Multimédia de Manouba)',
      year: '2025',
      specialization: 'Web, Mobile, and Game Development',
    },
    {
      degree: 'Baccalauréat in Computer Science',
      institution: 'Lycée Soukra',
      year: '2021',
      specialization: 'Computer Science Curriculum',
    },
  ];

  const languages = ['Arabic', 'French', 'English'];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Education Card */}
        <div className="lg:col-span-6 flex">
          <div
            className={`w-full p-8 sm:p-10 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
              darkMode
                ? 'bg-dark-card border-white/5 shadow-black/20 hover:border-gold-accent/20'
                : 'bg-white border-black/5 shadow-gray-100 hover:border-gold-accent/20'
            }`}
          >
            <div className="flex items-center gap-2 mb-8 text-left">
              <GraduationCap className="w-6 h-6 text-gold-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>

            {/* Timeline structure */}
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gold-accent/20 text-left">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Circle dot on vertical line */}
                  <span className="absolute left-1 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-accent ring-4 ring-dark-bg">
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
          <div
            className={`w-full p-8 sm:p-10 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
              darkMode
                ? 'bg-dark-card border-white/5 shadow-black/20 hover:border-gold-accent/20'
                : 'bg-white border-black/5 shadow-gray-100 hover:border-gold-accent/20'
            }`}
          >
            <div className="flex items-center gap-2 mb-8 text-left">
              <Languages className="w-6 h-6 text-gold-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Languages</h2>
            </div>

            {/* Language Chips */}
            <div className="flex flex-wrap gap-4 mt-6 justify-start">
              {languages.map((lang, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-5 py-3 rounded-xl text-base font-bold border transition-all duration-200 hover:scale-105 ${
                    darkMode
                      ? 'bg-[#0B0C10] border-white/5 text-gray-300 hover:border-gold-accent/40 hover:text-white'
                      : 'bg-slate-50 border-black/5 text-gray-700 hover:border-gold-accent/40 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-gold-accent mr-3"></span>
                  {lang}
                </span>
              ))}
            </div>

            {/* Bottom info text */}
            <div className={`mt-8 p-4 rounded-xl border border-dashed text-left ${
              darkMode ? 'bg-[#0B0C10] border-white/5' : 'bg-gray-50 border-black/5'
            }`}>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Leveraging multilinguism (Arabic, French, English) to collaborate with international clients and agile dev squads seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
