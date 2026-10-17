import React, { useState, useEffect } from 'react';
import { cvData } from '../data/cvData';
import { Menu, X, FileDown, Send, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCVModal,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['inicio', 'sobre-mi', 'experiencia', 'competencias', 'proyectos', 'educacion', 'contacto'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'competencias', label: 'Competencias' },
    { id: 'proyectos', label: 'Proyectos & Guía' },
    { id: 'educacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050C1A]/90 backdrop-blur-md border-b border-sky-900/30 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 p-0.5 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#050C1A] rounded-[10px] flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                GABRIELA VELARDE
              </span>
              <span className="text-[11px] text-cyan-400 font-medium tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 inline" /> {cvData.personal.location}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative py-1 transition-colors hover:text-cyan-300 whitespace-nowrap shrink-0 ${
                  activeSection === link.id ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Cleaned up, no prompt button) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenCVModal}
              className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm hover:border-cyan-500/50"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ver CV (PDF)</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-full transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>Contactar</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-700/50"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071324]/98 border-b border-sky-900/40 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-3">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="py-2.5 px-3 text-xs font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                Ver CV (PDF)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="py-2.5 px-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
              >
                <Send className="w-4 h-4" />
                Contactar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
