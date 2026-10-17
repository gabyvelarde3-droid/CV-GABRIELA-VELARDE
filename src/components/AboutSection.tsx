import waterQuality from '../assets/images/water_quality_equipment_nature_1792270209685.jpg';

import React from 'react';
import { cvData } from '../data/cvData';
import { ShieldCheck, Compass, FileCheck2, Users, ArrowUpRight, Info } from 'lucide-react';

interface AboutSectionProps {
  onOpenCVModal: () => void;
  onOpenContactModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenCVModal,
  onOpenContactModal,
}) => {
  const pillars = [
    {
      icon: <Compass className="w-4 h-4 text-cyan-400" />,
      title: "Conocer & Analizar",
      desc: "Líneas base físico-biológicas, monitoreo hídrico y evaluación espacial con SIG."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-sky-400" />,
      title: "Evaluar & Prevenir",
      desc: "Matrices IPERC continuo, planes de contingencia y controles operacionales."
    },
    {
      icon: <FileCheck2 className="w-4 h-4 text-teal-400" />,
      title: "Cumplir & Auditar",
      desc: "Seguimiento riguroso de ISO 45001:2018, no conformidades y directivas PLANEFA."
    },
    {
      icon: <Users className="w-4 h-4 text-blue-400" />,
      title: "Sensibilizar & Liderar",
      desc: "Capacitaciones directas a cuadrillas de primera línea y campañas de cultura SSOMA."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 relative bg-[#061021] overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Perfil Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1.5 tracking-tight">
            Comprometida con la Sostenibilidad & la Seguridad Operacional
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full mt-3" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Image with Fieldwork & Operational Overlay */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-sky-900/40 p-2 shadow-2xl group h-full flex flex-col">
              <div className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="waterQuality"
                  alt="Monitoreo Ambiental y Trabajo de Campo"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A] via-transparent to-transparent opacity-80" />
                
                {/* Floating pill badge showing it is a visual guide */}
                <div className="absolute top-3 left-3 bg-[#050C1A]/90 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-1.5 text-xs text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-[11px] font-medium">Guía referencial: Monitoreo en campo</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 backdrop-blur-md bg-[#050C1A]/85 border border-slate-700/50 rounded-xl p-3">
                  <p className="font-semibold text-white text-sm">
                    {cvData.personal.fullName}
                  </p>
                  <p className="text-cyan-300 text-[11px] mt-0.5">
                    {cvData.personal.title} · Arequipa, Perú
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <Info className="w-3 h-3 text-cyan-400" /> Imagen ilustrativa como guía de frentes técnicos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose, Quote Card & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {cvData.personal.aboutBio}
              </p>
              <p className="text-slate-400">
                {cvData.personal.aboutSecondary}
              </p>
            </div>

            {/* Editorial Quote Card */}
            <div className="glass-capsule rounded-2xl p-5 border border-cyan-800/30 bg-gradient-to-r from-sky-950/40 to-slate-900/60 relative overflow-hidden">
              <div className="text-3xl text-cyan-500/30 font-serif absolute top-2 right-4 select-none">“</div>
              <p className="text-sm font-medium italic text-cyan-100/90 leading-relaxed pr-6">
                “La gestión ambiental moderna y la seguridad minera no son tareas reactivas: son disciplinas de precisión donde cada matriz de riesgo y cada indicador protegen vidas humanas y el patrimonio natural.”
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <span className="font-semibold text-white">Ing. Gabriela Velarde</span>
                <span className="text-cyan-400 font-mono text-[11px]">Enfoque Preventivo & Rigor Normativo</span>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-sky-900/30 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-cyan-950/80 flex items-center justify-center border border-cyan-800/40">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xs font-semibold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContactModal}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <span>Coordinar Entrevista / Propuesta</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenCVModal}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700 transition-colors"
              >
                <span>Descargar Hoja de Vida</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
