import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Estagiário em Análise e Engenharia de Dados',
      company: 'Banco do Nordeste (BNB)',
      period: 'Jan 2024 - Presente',
      description: [
        'Atuação com pipelines ETL (Extract, Transform, Load) utilizando SQL Server e RStudio para processamento analítico.',
        'Desenvolvimento de scripts para automação de tratamento de bases de dados de grande escala.',
        'Criação e manutenção de dashboards interativos em Power BI para acompanhamento de KPIs de desempenho institucionais.'
      ],
      skills: ['SQL Server', 'RStudio', 'Pipelines ETL', 'Power BI', 'Automação']
    },
    {
      role: 'Desenvolvedor Web Freelancer (Full-Stack)',
      company: 'Projetos Autônomos',
      period: '2022 - Presente',
      description: [
        'Engenharia de interfaces responsivas de alta fidelidade e performance utilizando Next.js, Vite e Tailwind CSS.',
        'Construção de APIs robustas em Node.js com endpoints seguros para processamento de regras de negócios.',
        'Otimização avançada de SEO e carregamento de páginas através de Renderização do Lado do Servidor (SSR) e Geração Estática (SSG).'
      ],
      skills: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'RESTful APIs', 'SEO / Web Performance']
    },
    {
      role: 'Gerente de E-commerce',
      company: 'Operação Varejo / Digital',
      period: '2020 - 2022',
      description: [
        'Administração integrada de fluxo operacional de ponta a ponta em plataformas de comércio eletrónico.',
        'Controlo de inventários físicos e virtuais de forma sincronizada, minimizando ruturas.',
        'Gestão e análise de bases de dados transacionais para otimização de logística de envio e expedição.'
      ],
      skills: ['E-commerce', 'Gestão de Estoque', 'Bancos de Dados', 'Logística', 'Excel Avançado']
    }
  ];

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
            Experiência <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">Profissional</span>
          </h2>
          <div className="w-12 h-1.5 bg-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-12">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-48px] md:left-[-64px] top-1.5 w-8 h-8 rounded-full bg-bg-dark border border-slate-800 flex items-center justify-center group-hover:border-accent-cyan transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <Briefcase className="w-4 h-4 text-slate-500 group-hover:text-accent-cyan transition-colors" />
              </div>

              {/* Card content */}
              <div className="p-6 md:p-8 rounded-2xl glass-panel border-white/5 hover:border-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)] bg-gradient-to-tr hover:from-white/[0.02] hover:to-transparent">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-accent-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-slate-400">
                      {exp.company}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/10 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-350 text-sm md:text-base leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-accent-indigo shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags used in this role */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-medium text-slate-400 bg-white/5 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
