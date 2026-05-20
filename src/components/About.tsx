import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Award, BookOpen } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  const techStacks = [
    {
      title: 'Front-End Development',
      icon: <Code2 className="w-6 h-6 text-accent-cyan" />,
      color: 'from-accent-cyan/20 to-transparent',
      borderColor: 'group-hover:border-accent-cyan/50',
      shadowColor: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
      skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'HTML5/CSS3']
    },
    {
      title: 'Back-End & Integrações',
      icon: <Cpu className="w-6 h-6 text-accent-indigo" />,
      color: 'from-accent-indigo/20 to-transparent',
      borderColor: 'group-hover:border-accent-indigo/50',
      shadowColor: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Autenticação', 'LLMs Locais (Ollama)', 'JSON/APIs']
    },
    {
      title: 'Engenharia de Dados & BI',
      icon: <Database className="w-6 h-6 text-accent-purple" />,
      color: 'from-accent-purple/20 to-transparent',
      borderColor: 'group-hover:border-accent-purple/50',
      shadowColor: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
      skills: ['SQL Server', 'RStudio', 'Pipelines ETL', 'Power BI', 'Excel Avançado', 'Modelagem de Dados']
    }
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-bg-darker/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">Mim</span>
          </h2>
          <div className="w-12 h-1.5 bg-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Bio block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-4 font-display flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent-cyan" />
              Perfil Híbrido: Desenvolvimento & Dados
            </h3>
            <p className="text-slate-350 leading-relaxed text-base md:text-lg mb-6">
              Estudante de Análise e Desenvolvimento de Sistemas com sólida base em arquitetura Full-Stack e Engenharia de Dados. Tenho vivência prática na criação de sistemas SaaS e aplicações web interativas, estruturação de pipelines ETL eficientes e modelagem robusta de dados.
            </p>
            <p className="text-slate-350 leading-relaxed text-base md:text-lg">
              Meu foco é construir plataformas escaláveis, automatizar processos morosos de negócios e integrar soluções modernas de software com as tecnologias mais recentes, como modelos de linguagem locais (LLMs) e visualizações analíticas de BI.
            </p>
          </motion.div>

          {/* Quick Stats Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col gap-2 hover:border-accent-cyan/25 transition-all">
              <Award className="w-8 h-8 text-accent-cyan" />
              <span className="font-display font-extrabold text-3xl text-white">Full-Stack</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">React, Next.js & Node.js</span>
            </div>
            
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col gap-2 hover:border-accent-purple/25 transition-all">
              <Database className="w-8 h-8 text-accent-purple" />
              <span className="font-display font-extrabold text-3xl text-white">BI & Dados</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">SQL, ETL & Dashboards</span>
            </div>
          </motion.div>
        </div>

        {/* Tech Stacks Grid */}
        <h3 className="text-xl font-bold text-center text-slate-100 mb-10 font-display">
          Minhas Competências Técnicas
        </h3>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {techStacks.map((stack) => (
            <motion.div
              key={stack.title}
              variants={itemVariants}
              className={`group p-8 rounded-2xl glass-panel border-white/5 bg-gradient-to-b ${stack.color} hover:bg-[#111827]/80 hover:translate-y-[-4px] transition-all duration-300 ${stack.borderColor} ${stack.shadowColor}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {stack.icon}
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-6">
                {stack.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/5 group-hover:border-white/10 group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
