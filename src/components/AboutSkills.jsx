import { MapPin, Mail, Phone, GraduationCap, Cpu, Database, Globe, Layers } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import avatarImg from '../assets/avatar.webp';
import { SECTION_SHELL, CARD_SHELL, cardSurface } from '../utils/styles';

export default function AboutSkills({ darkMode, t }) {
  const contactInfo = [
    { icon: <MapPin className="w-5 h-5 text-gold-accent" />, label: t.location, value: t.locationValue },
    { icon: <Mail className="w-5 h-5 text-gold-accent" />, label: t.email, value: 'mortadha.akkari@outlook.fr', href: 'mailto:mortadha.akkari@outlook.fr' },
    { icon: <Phone className="w-5 h-5 text-gold-accent" />, label: t.phone, value: '+216 46 327 829', href: 'tel:+21646327829' },
    { icon: <Github className="w-5 h-5 text-gold-accent" />, label: t.github, value: 'github-mortadha', href: 'https://github.com/github-mortadha' },
  ];

  const skillGroups = [
    {
      title: t.groups.frontend,
      icon: <Globe className="w-5 h-5 text-gold-accent" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      title: t.groups.backend,
      icon: <Cpu className="w-5 h-5 text-gold-accent" />,
      skills: ['Node.js', 'Express', 'REST API', 'JWT'],
    },
    {
      title: t.groups.database,
      icon: <Database className="w-5 h-5 text-gold-accent" />,
      skills: ['MySQL', 'MongoDB', 'SQL', 'Sequelize'],
    },
    {
      title: t.groups.others,
      icon: <Layers className="w-5 h-5 text-gold-accent" />,
      skills: ['Python', 'Flutter', 'C#', 'Unity'],
    },
  ];

  return (
    <section id="about" className={SECTION_SHELL}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: About Me Card */}
        <div className="lg:col-span-6 flex">
          <div className={`${CARD_SHELL} ${cardSurface(darkMode)}`}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Profile Image with Ring */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full border border-gold-accent animate-pulse"></div>
                <img
                  src={avatarImg}
                  alt="Mortadha Akkari"
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="w-24 h-24 rounded-full border-2 border-gold-accent object-cover bg-gray-900"
                />
              </div>

              {/* Quick Bio Info */}
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold tracking-tight">{t.title}</h2>
                <div className="flex items-center justify-center sm:justify-start gap-1 mt-1 text-gold-accent font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.graduate}</span>
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.bio}
                </p>
              </div>
            </div>

            {/* Separator */}
            <hr className={`my-8 ${darkMode ? 'border-white/5' : 'border-black/5'}`} />

            {/* Contact Details List */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg shrink-0 ${darkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <span className={`block text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-sm font-medium hover:text-gold-accent transition-colors break-all ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Bio Paragraph */}
            <div className="mt-8 text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold-accent mb-3">{t.academicTitle}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.academicBio}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Skills Grouped Chips */}
        <div id="skills" className="lg:col-span-6 flex scroll-mt-20">
          <div className={`${CARD_SHELL} ${cardSurface(darkMode)}`}>
            <div className="text-left mb-8">
              <h2 className="text-2xl font-bold tracking-tight">{t.skillsTitle}</h2>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {t.skillsSubtitle}
              </p>
            </div>

            {/* Skills Groups */}
            <div className="space-y-6">
              {skillGroups.map((group, idx) => (
                <div key={idx} className="text-left">
                  <div className="flex items-center gap-2 mb-3">
                    {group.icon}
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gold-accent">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 hover:scale-105 ${
                          darkMode
                            ? 'bg-[#0B0C10] border-white/5 text-gray-300 hover:border-gold-accent/40 hover:text-white'
                            : 'bg-gray-50 border-black/5 text-gray-700 hover:border-gold-accent/40 hover:text-gray-900'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-accent mr-2 shrink-0"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
