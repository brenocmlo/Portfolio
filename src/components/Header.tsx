import { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-cyan to-accent-purple flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-accent-cyan transition-colors">
            Breno<span className="text-accent-cyan">.</span>Tabosa
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="font-medium text-sm text-slate-300 hover:text-accent-cyan hover:glow-text-cyan transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Curriculo_Breno_Tabosa.pdf"
            download="Curriculo_Breno_Tabosa.pdf"
            className="flex items-center gap-2 px-4  py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-accent-cyan border border-accent-cyan/20 hover:border-accent-cyan bg-accent-cyan/5 hover:bg-accent-cyan/15 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300"
          >
            <Download className="w-4.5 h-4.5" />
            Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <div
        className={`md:hidden fixed top-[73px] left-0 w-full bg-[#090d16]/95 border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-base font-medium text-slate-300 hover:text-accent-cyan py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Curriculo_Breno_Tabosa.pdf"
            download="Curriculo_Breno_Tabosa.pdf"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 hover:bg-accent-cyan/15 mt-2 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
