import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm({ darkMode, lang }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const labels = {
    en: {
      badge: 'Get In Touch',
      title: 'Send Me a Message',
      subtitle: "Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.",
      name: 'Full Name',
      namePlaceholder: 'John Doe',
      email: 'Email Address',
      emailPlaceholder: 'john@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Project Inquiry / Collaboration...',
      message: 'Message',
      messagePlaceholder: "Tell me about your project, idea, or anything you'd like to discuss...",
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: "Message Sent!",
      successSub: "Thank you for reaching out. I'll reply to you shortly at mortadha.akkari@outlook.fr.",
      sendAnother: 'Send Another Message',
    },
    fr: {
      badge: 'Prendre Contact',
      title: 'Envoyez-moi un Message',
      subtitle: "Vous avez un projet en tête ou voulez simplement dire bonjour ? Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
      name: 'Nom Complet',
      namePlaceholder: 'Jean Dupont',
      email: 'Adresse E-mail',
      emailPlaceholder: 'jean@exemple.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Demande de projet / Collaboration...',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet, idée ou de ce que vous souhaitez discuter...',
      send: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      successTitle: 'Message Envoyé !',
      successSub: "Merci de m'avoir contacté. Je vous répondrai bientôt à mortadha.akkari@outlook.fr.",
      sendAnother: 'Envoyer un Autre Message',
    }
  };

  const l = labels[lang] || labels.en;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending with mailto fallback
    setTimeout(() => {
      const mailtoLink = `mailto:mortadha.akkari@outlook.fr?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all duration-200 focus:ring-2 focus:ring-gold-accent/40 focus:border-gold-accent ${
    darkMode
      ? 'bg-[#0B0C10] border-white/10 text-white placeholder-gray-600 hover:border-white/20'
      : 'bg-gray-50 border-black/10 text-gray-900 placeholder-gray-400 hover:border-black/20'
  }`;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Title */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 text-gold-accent font-bold tracking-wider uppercase bg-gold-accent/5 px-4 py-2 rounded-full border border-gold-accent/15 mb-3">
          <MessageSquare className="w-5 h-5" />
          <span>{l.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">{l.title}</h2>
        <p className={`mt-4 max-w-xl mx-auto text-base leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {l.subtitle}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? 'bg-dark-card border-white/5 shadow-black/30'
            : 'bg-white border-black/5 shadow-gray-100'
        }`}>
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gold-accent/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-gold-accent" />
              </div>
              <h3 className="text-2xl font-black">{l.successTitle}</h3>
              <p className={`text-sm leading-relaxed max-w-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {l.successSub}
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-4 px-6 py-3 rounded-lg bg-gold-accent text-black font-bold hover:bg-gold-hover hover:scale-105 transition-all duration-200"
              >
                {l.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className={`block text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {l.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={l.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={`block text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {l.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={l.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={`block text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {l.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={l.subjectPlaceholder}
                  className={inputClass}
                />
              </div>

              <div className="space-y-1.5">
                <label className={`block text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {l.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={l.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Quick contact alternative */}
              <div className={`flex items-center gap-2 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>Or email directly: <a href="mailto:mortadha.akkari@outlook.fr" className="text-gold-accent hover:underline font-semibold">mortadha.akkari@outlook.fr</a></span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gold-accent text-black font-black text-base hover:bg-gold-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {l.sending}
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {l.send}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
