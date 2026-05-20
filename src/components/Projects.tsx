import { motion } from 'framer-motion';
import { Bot, Calendar, Scale, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CorreAI (CRM com IA)',
      subtitle: 'CRM para Corretores de Imóveis',
      description: 'Plataforma inteligente de gestão de leads imobiliários que integra chatbots conversacionais baseados em LLMs locais (Ollama) para qualificação automática e um motor inteligente para recomendação de imóveis personalizados.',
      image: '/correai_mockup.png',
      tags: ['Next.js', 'Node.js', 'Ollama LLM', 'Tailwind CSS', 'AI'],
      icon: <Bot className="w-5 h-5 text-accent-cyan" />,
      color: 'hover:border-accent-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      link: null
    },
    {
      title: 'SomosFisio / VitareFisio',
      subtitle: 'SaaS para Clínicas de Fisioterapia',
      description: 'Plataforma SaaS Full-Stack para administração de clínicas de fisioterapia. Contém fluxos completos de gestão clínica, agendamento de consultas semanais, prontuário eletrónico e acompanhamento visual do progresso de reabilitação dos pacientes.',
      image: '/somosfisio_mockup.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'SaaS'],
      icon: <Calendar className="w-5 h-5 text-accent-purple" />,
      color: 'hover:border-accent-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      link: 'https://somosfisio.com.br'
    },
    {
      title: 'CRM Jurídico',
      subtitle: 'Sistema de Gestão para Advogados',
      description: 'Plataforma para escritórios de advocacia com controle de clientes, gestão financeira (honorários), agenda de audiências e anexo de arquivos. Integrado à API do WhatsApp.',
      image: '/crm_juridico_mockup.png',
      tags: ['TypeScript', 'React', 'Next.js', 'Supabase', 'SaaS'],
      icon: <Scale className="w-5 h-5 text-accent-indigo" />,
      color: 'hover:border-accent-indigo/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
      link: null
    }
  ];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-bg-darker/40">
      
      {/* Background Glow */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">em Destaque</span>
          </h2>
          <div className="w-12 h-1.5 bg-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group flex flex-col rounded-3xl glass-panel border-white/5 bg-[#111827]/40 overflow-hidden transition-all duration-300 ${project.color}`}
            >
              {/* Card Image Container */}
              <div className="relative overflow-hidden aspect-video border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/20 to-transparent opacity-60" />
              </div>

              {/* Card Text Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Badge Icon / Subtitle */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-white/5">
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-cyan group/link cursor-pointer hover:underline pt-4 border-t border-white/5">
                    <span>Explorar Detalhes</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-cyan group/link cursor-pointer hover:underline pt-4 border-t border-white/5">
                    <span>Explorar Detalhes</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
