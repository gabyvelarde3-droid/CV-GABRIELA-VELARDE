import React, { useState, useEffect } from 'react';
import { cvData } from '../data/cvData';
import { ChevronLeft, ChevronRight, FileDown, ArrowDown, ShieldCheck, MapPin, Mail, Phone, ExternalLink, Info, Camera } from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
  onOpenContactModal: () => void;
}

const DEFAULT_CREDENTIAL_PORTRAIT = "/src/assets/images/gabriela_official_credential_id_1792269223403.jpg";

const HIGHLIGHT_SLIDES = [
  {
    num: "01.",
    title: "Operaciones Mineras & SSOMA",
    description: "Auxiliar SIG y Seguridad en Minera Bateas (Caylloma). Controles operacionales, auditorías ISO 45001 y matriz IPERC en faena.",
    image: "/src/assets/images/project_mining_ssoma_1792265006228.jpg",
    tag: "Minería & SSOMA"
  },
  {
    num: "02.",
    title: "Gobierno Regional & Riesgos",
    description: "Gestión de riesgos operacionales y planes de contingencia para el GORE Arequipa e investigación técnica de accidentes.",
    image: "/src/assets/images/water_quality_equipment_nature_1792270209685.jpg",
    tag: "Sector Público"
  },
  {
    num: "03.",
    title: "Cartografía SIG & Cuencas",
    description: "Especialista en Evaluación de Impacto Ambiental y SIG (OMC). Zonificación territorial, ArcGIS, QGIS y AutoCAD.",
    image: "/src/assets/images/project_sig_cartography_1792265005452.jpg",
    tag: "SIG & Territorio"
  },
  {
    num: "04.",
    title: "Supervisión & PLANEFA",
    description: "Auditorías de cumplimiento ambiental municipal, planes anuales de fiscalización y seguimiento de compromisos normativos.",
    image: "/src/assets/images/planefa_environmental_audit_desk_1792270256021.jpg",
    tag: "Fiscalización"
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenCVModal,
  onOpenContactModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('gabriela_custom_avatar') || DEFAULT_CREDENTIAL_PORTRAIT;
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HIGHLIGHT_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HIGHLIGHT_SLIDES.length) % HIGHLIGHT_SLIDES.length);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setProfileImage(base64);
        localStorage.setItem('gabriela_custom_avatar', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const activeSlide = HIGHLIGHT_SLIDES[currentSlide];

  return (
    <section id="inicio" className="relative min-h-[95vh] lg:min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-[#050C1A]">
      {/* Background Cinematic Caustics & Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/images/hero_ocean_navy_backdrop_1792264988571.jpg"
          alt="Oceanic Navy Backdrop"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-screen scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Deep navy vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050C1A]/85 via-[#050C1A]/60 to-[#050C1A]" />
        <div className="absolute inset-0 bg-radial-at-c from-sky-950/20 via-[#050C1A]/70 to-[#050C1A]" />
      </div>

      {/* Monumental Architectural Typography Background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden opacity-[0.04]">
        <span className="text-[17vw] font-black tracking-tighter text-white whitespace-nowrap leading-none uppercase">
          AMBIENTAL
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typographic & Technical Overview */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow & Status Badge */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 font-medium tracking-wide flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Ingeniera Ambiental Titulada
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {cvData.personal.location}
              </span>
              <span className="hidden sm:inline text-slate-600">·</span>
              <span className="hidden sm:inline text-slate-300 text-xs">
                Sistemas Integrados de Gestión & SSOMA
              </span>
            </div>

            {/* Giant Title */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Gabriela Paola <br />
                <span className="text-gradient-cyan">Velarde Espinoza</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-normal pt-1">
                Gestión Ambiental · Fiscalización · SSOMA · SIG
              </p>
            </div>

            {/* Lead Description */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Especialista titulada con experiencia comprobada en operaciones mineras (Minera Bateas / Caylloma), sector público (GORE Arequipa) y fiscalización ambiental (PLANEFA). Auditor Interno <strong className="text-white font-semibold">ISO 45001:2018</strong> y Supervisor Líder UNMSM en prevención de riesgos operacionales y matrices IPERC.
            </p>

            {/* Action Buttons (Cleaned up, no prompt button) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#experiencia"
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-full transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Ver Experiencia Laboral</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-sky-900/50 hover:border-cyan-500/50 rounded-full transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Descargar CV Completo (PDF)</span>
              </button>

              <button
                onClick={onOpenContactModal}
                className="px-5 py-3 text-sm font-medium text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/40 rounded-full transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contactar</span>
              </button>
            </div>

            {/* Quick Skills Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Enfoques técnicos:</span>
              <span className="text-slate-300">ISO 45001:2018</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">PLANEFA & OEFA</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Matrices IPERC</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">ArcGIS / QGIS</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Power BI</span>
            </div>
          </div>

          {/* Right Column: Hero Portrait using Gabriela's Real Executive Photo */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Glow behind portrait */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-500/15 blur-3xl -z-10 pointer-events-none" />
            
            {/* Portrait Frame Card */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden glass-panel border border-sky-800/40 p-2.5 shadow-2xl shadow-black/80 group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={profileImage}
                  alt="Gabriela Paola Velarde Espinoza - Ingeniera Ambiental"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Upload or change custom photo button */}
                <div className="absolute top-3 right-3 z-20">
                  <label
                    htmlFor="upload-profile-photo"
                    className="cursor-pointer px-2.5 py-1 rounded-full bg-black/70 hover:bg-black/90 text-cyan-300 hover:text-white border border-cyan-500/30 text-[10px] font-medium flex items-center gap-1.5 backdrop-blur-md transition-all shadow-md hover:scale-105"
                    title="Cargar foto original Imagen1.jpg directamente desde tu equipo"
                  >
                    <Camera className="w-3 h-3 text-cyan-400" />
                    <span>Cargar Imagen1.jpg</span>
                  </label>
                  <input
                    id="upload-profile-photo"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* Overlaid Verified Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-slate-950/85 border border-sky-900/60 rounded-xl p-3 shadow-lg z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Gabriela P. Velarde Espinoza</p>
                      <p className="text-[10px] text-cyan-300 font-medium">Ingeniera Ambiental Titulada · UNMSM</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Arequipa
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Bottom-Left Floating Capsule Card (Matching reference "01. Expert Guides" with explanatory guide note) */}
          <div className="w-full md:w-auto max-w-lg glass-capsule rounded-2xl p-3 sm:p-3.5 flex items-center gap-3.5 shadow-xl shadow-black/60 border border-sky-800/40">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-cyan-500/30 bg-slate-900 relative">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-black/75 text-[8px] text-center text-cyan-200 py-0.5">
                Guía
              </span>
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-0.5">
                <span>{activeSlide.num}</span>
                <span className="text-white truncate">{activeSlide.title}</span>
                <span className="text-[9px] text-slate-400 font-normal ml-auto hidden sm:inline flex items-center gap-0.5">
                  <Info className="w-2.5 h-2.5" /> Guía de campo
                </span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                {activeSlide.description}
              </p>
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 mt-2">
                {HIGHLIGHT_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentSlide === i ? 'w-4 bg-cyan-400' : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Ver slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-1 shrink-0 pl-1 border-l border-slate-800">
              <button
                onClick={prevSlide}
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-colors border border-slate-700/60"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-colors border border-slate-700/60"
                aria-label="Siguiente slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom-Right Social & Direct Communication Pill */}
          <div className="glass-capsule rounded-full px-4 py-2 flex items-center gap-3 text-xs text-slate-300 border border-sky-800/40 shadow-lg">
            <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">Contacto directo:</span>
            
            <a
              href={`mailto:${cvData.personal.email}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
              title="Enviar correo"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{cvData.personal.email}</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={`https://wa.me/${cvData.personal.phoneClean}?text=Hola%20Gabriela,%20vi%20tu%20CV%20interactivo%20y%20me%20gustar%C3%ADa%20conversar.`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
              title="Abrir WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{cvData.personal.phone}</span>
            </a>

            <span className="text-slate-700">|</span>

            <button
              onClick={onOpenContactModal}
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-0.5"
            >
              <span>Escribir</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
