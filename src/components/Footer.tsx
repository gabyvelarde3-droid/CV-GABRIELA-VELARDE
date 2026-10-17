import React from 'react';
import { cvData } from '../data/cvData';
import { ArrowUp, FileDown, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenCVModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCVModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030814] border-t border-sky-950/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle topographic wave lines illustration in background */}
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-[0.03] pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
          <path d="M0,100 C320,160 420,40 720,100 C1020,160 1120,40 1440,100 L1440,200 L0,200 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                GABRIELA PAOLA VELARDE ESPINOZA
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Ingeniera Ambiental titulada. Especialista en fiscalización y gestión ambiental, SSOMA y Sistemas Integrados de Gestión bajo norma ISO 45001 en los sectores minero y público.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenCVModal}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Descargar Hoja de Vida (PDF)</span>
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#sobre-mi" className="hover:text-cyan-400 transition-colors">Sobre Mí & Pilares</a></li>
              <li><a href="#experiencia" className="hover:text-cyan-400 transition-colors">Experiencia Laboral (10 roles)</a></li>
              <li><a href="#competencias" className="hover:text-cyan-400 transition-colors">Competencias & Herramientas</a></li>
              <li><a href="#proyectos" className="hover:text-cyan-400 transition-colors">Guía de Frentes Técnicos</a></li>
              <li><a href="#educacion" className="hover:text-cyan-400 transition-colors">Formación & UNMSM</a></li>
            </ul>
          </div>

          {/* Direct Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Ubicación & Contacto
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{cvData.personal.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${cvData.personal.phoneClean}`} className="hover:text-white transition-colors">
                  {cvData.personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${cvData.personal.email}`} className="hover:text-white transition-colors truncate">
                  {cvData.personal.email}
                </a>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-slate-500">
              Disponibilidad: Abierta a oportunidades técnicas en Arequipa y operaciones mineras a nivel nacional.
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Gabriela Paola Velarde Espinoza · Ingeniera Ambiental Titulada.</p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-cyan-950/80 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-800/60 flex items-center justify-center transition-all shadow-md hover:-translate-y-1"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
