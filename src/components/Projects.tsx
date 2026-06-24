import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Calendar, Scale, Sparkles, Globe, ArrowRight, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sites' | 'systems'>('all');
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.listasvip.title'),
      subtitle: t('projects.listasvip.subtitle'),
      description: t('projects.listasvip.description'),
      image: '/listas_vip_mockup.png',
      tags: ['React', 'Node.js', 'Tailwind CSS', 'Full-Stack'],
      icon: <Crown className="w-5 h-5 text-amber-400" />,
      color: 'hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
      link: 'https://listas-vip.vercel.app/',
      category: 'systems'
    },
    {
      title: t('projects.correai.title'),
      subtitle: t('projects.correai.subtitle'),
      description: t('projects.correai.description'),
      image: '/correai_mockup.png',
      tags: ['Next.js', 'Node.js', 'Ollama LLM', 'Tailwind CSS', 'AI'],
      icon: <Bot className="w-5 h-5 text-accent-cyan" />,
      color: 'hover:border-accent-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      link: null,
      category: 'systems'
    },
    {
      title: t('projects.somosfisio.title'),
      subtitle: t('projects.somosfisio.subtitle'),
      description: t('projects.somosfisio.description'),
      image: '/somosfisio_mockup.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'SaaS'],
      icon: <Calendar className="w-5 h-5 text-accent-purple" />,
      color: 'hover:border-accent-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      link: 'https://somosfisio.com.br',
      category: 'systems'
    },
    {
      title: t('projects.crmjuridico.title'),
      subtitle: t('projects.crmjuridico.subtitle'),
      description: t('projects.crmjuridico.description'),
      image: '/crm_juridico_mockup.png',
      tags: ['TypeScript', 'React', 'Next.js', 'Supabase', 'SaaS'],
      icon: <Scale className="w-5 h-5 text-accent-indigo" />,
      color: 'hover:border-accent-indigo/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
      link: 'https://sistema-advocacia-marcio.vercel.app/financeiro',
      category: 'systems'
    },
    {
      title: t('projects.siteadvogado.title'),
      subtitle: t('projects.siteadvogado.subtitle'),
      description: t('projects.siteadvogado.description'),
      image: '/site_advogado_mockup.png',
      tags: ['React', 'Vite', 'Tailwind CSS', 'SEO', 'Performance'],
      icon: <Globe className="w-5 h-5 text-accent-cyan" />,
      color: 'hover:border-accent-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      link: 'https://marcio-adv-site.vercel.app',
      category: 'sites'
    },
    {
      title: t('projects.siteestetica.title'),
      subtitle: t('projects.siteestetica.subtitle'),
      description: t('projects.siteestetica.description'),
      image: '/site_estetica_mockup.png',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Lighthouse', 'UI/UX'],
      icon: <Sparkles className="w-5 h-5 text-accent-purple" />,
      color: 'hover:border-accent-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      link: 'https://landingpage-leticia.vercel.app',
      category: 'sites'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-bg-darker/40">
      
      {/* Background Glow */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
            {t('projects.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">{t('projects.destaque')}</span>
          </h2>
          <div className="w-12 h-1.5 bg-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {([
            { id: 'all', label: t('projects.filters.all') },
            { id: 'sites', label: t('projects.filters.sites') },
            { id: 'systems', label: t('projects.filters.systems') }
          ] as const).map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-indigo text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-102'
                  : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.35 }}
                className={`group flex flex-col rounded-3xl glass-panel border-white/5 bg-[#111827]/40 overflow-hidden transition-all duration-300 ${project.color}`}
              >
                {/* Card Image Container */}
                <div className="relative overflow-hidden aspect-video border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/20 to-transparent opacity-60" />
                </div>

                {/* Card Text Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Badge Icon / Subtitle */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-white/5 shrink-0">
                      {project.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-350 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-300 bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-cyan group/link cursor-pointer hover:underline pt-4 border-t border-white/5 mt-auto">
                      <span>{t('projects.explore')}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 pt-4 border-t border-white/5 mt-auto">
                      <span>{t('projects.explore')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
