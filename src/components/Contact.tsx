import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const SERVICE_ID  = 'service_tzdgm8n';
const TEMPLATE_ID = 'template_y1ood09';
const PUBLIC_KEY  = 'f9Czu2_2-J0lSKJ4B';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const { t, i18n } = useTranslation();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-accent-cyan" />,
      title: 'E-mail',
      value: 'brenocmesquita@gmail.com',
      href: 'mailto:brenocmesquita@gmail.com',
      external: false
    },
    {
      icon: <Phone className="w-5 h-5 text-accent-cyan" />,
      title: t('contact.phone'),
      value: '(85) 98833-5991',
      href: 'tel:+5585988335991',
      external: false
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent-cyan" />,
      title: t('contact.location'),
      value: t('contact.locationValue'),
      href: 'https://maps.google.com/?q=Fortaleza,Ceara',
      external: true
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#25d366]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      ),
      title: 'WhatsApp',
      value: '(85) 98833-5991',
      href: `https://wa.me/5585988335991?text=${encodeURIComponent(t('contact.waMsg'))}`,
      external: true
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass =
    'px-4 py-3 rounded-xl bg-bg-darker/60 border border-white/5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-accent-cyan transition-colors w-full';

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] rounded-full bg-accent-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
            {t('contact.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">{t('contact.talk')}</span>
          </h2>
          <div className="w-12 h-1.5 bg-accent-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                {t('contact.infoTitle')}
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {t('contact.infoDesc')}
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl glass-panel border-white/5 hover:border-accent-cyan/30 hover:bg-white/5 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-white/5 group-hover:scale-105 transition-transform shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {info.title}
                      </span>
                      <span className="block text-sm md:text-base font-medium text-slate-200 group-hover:text-white transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-10">
              <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {t('contact.socialTitle')}
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/brenocmlo"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 border border-white/5 glass-panel hover:bg-white/5 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/brenocmlo"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 border border-white/5 glass-panel hover:bg-white/5 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={`https://wa.me/5585988335991?text=${encodeURIComponent(t('contact.waMsg'))}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#25d366] border border-[#25d366]/20 glass-panel hover:bg-[#25d366]/10 hover:border-[#25d366]/40 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl glass-panel border-white/5 bg-[#0d1530]/50 flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-white font-display">
                {t('contact.formTitle')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="from_name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder={t('contact.formNamePlaceholder')}
                    className={inputClass}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="from_email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t('contact.formEmail')}
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder={t('contact.formEmailPlaceholder')}
                    className={inputClass}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t('contact.formSubject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t('contact.formSubjectPlaceholder')}
                  className={inputClass}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={t('contact.formMessagePlaceholder')}
                  className={`${inputClass} resize-none`}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    {t('contact.formSuccess')}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium"
                  >
                    <XCircle className="w-5 h-5 shrink-0" />
                    {t('contact.formError')}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-accent-cyan to-accent-indigo shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-300 cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('contact.btnSending')}
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {t('contact.btnSent')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.btnSend')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500 font-medium">
            {t('contact.footerRights', { year: new Date().getFullYear() })}
          </span>
          <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            {i18n.language.startsWith('en') ? (
              <>Built with <span className="text-accent-cyan">React</span>, <span className="text-accent-cyan">Vite</span> and <span className="text-accent-cyan">Tailwind CSS</span></>
            ) : (
              <>Construído com <span className="text-accent-cyan">React</span>, <span className="text-accent-cyan">Vite</span> e <span className="text-accent-cyan">Tailwind CSS</span></>
            )}
          </span>
        </div>

      </div>
    </section>
  );
}
