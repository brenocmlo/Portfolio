import { useState, useEffect } from 'react';
import { Menu, X, Download, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('header.about'), href: '#sobre' },
    { label: t('header.experience'), href: '#experiencia' },
    { label: t('header.projects'), href: '#projetos' },
    { label: t('header.contact'), href: '#contacto' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'pt-BR' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const currentLangLabel = i18n.language.startsWith('en') ? 'EN' : 'PT';

  const cvPath = i18n.language.startsWith('en')
    ? "/Curriculo_Breno_Tabosa_EN.pdf"
    : "/Curriculo_Breno_Tabosa.pdf";

  const cvDownloadName = i18n.language.startsWith('en')
    ? "Breno_Tabosa_CV_EN.pdf"
    : "Curriculo_Breno_Tabosa.pdf";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform border border-white/10 bg-[#090d16]">
            <img src="/portfolio_icon.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-accent-cyan transition-colors">
            Breno<span className="text-accent-cyan">.</span>Tabosa
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="font-medium text-sm text-slate-300 hover:text-accent-cyan hover:glow-text-cyan transition-all duration-200"
            >
              {item.label}
            </a>
          ))}

          {/* Language Selector Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/5 hover:border-accent-cyan bg-white/5 hover:bg-accent-cyan/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer"
            aria-label="Alternar idioma"
          >
            <Languages className="w-4 h-4 text-accent-cyan" />
            <span>{currentLangLabel}</span>
          </button>

          <a
            href={cvPath}
            download={cvDownloadName}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-accent-cyan border border-accent-cyan/20 hover:border-accent-cyan bg-accent-cyan/5 hover:bg-accent-cyan/15 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300"
          >
            <Download className="w-4.5 h-4.5" />
            {t('header.downloadCv')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          aria-label={isMobileMenuOpen ? t('header.ariaCloseMenu') : t('header.ariaOpenMenu')}
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
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-base font-medium text-slate-300 hover:text-accent-cyan py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Language Selector Mobile Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-white/5 bg-white/5 hover:bg-white/10 mt-2 transition-all duration-200 cursor-pointer"
          >
            <Languages className="w-4 h-4 text-accent-cyan" />
            <span>{currentLangLabel === 'PT' ? 'Mudar para Inglês (EN)' : 'Switch to Portuguese (PT)'}</span>
          </button>

          <a
            href={cvPath}
            download={cvDownloadName}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 hover:bg-accent-cyan/15 mt-1 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            {t('header.downloadCv')}
          </a>
        </div>
      </div>
    </nav>
  );
}
