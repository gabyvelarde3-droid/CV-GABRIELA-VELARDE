import React, { useState } from 'react';
import { cvData, ProjectItem } from '../data/cvData';
import { ArrowUpRight, X, Check, Shield, Layers, Droplets, Info } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Minería')) return <Shield className="w-4 h-4 text-cyan-400" />;
    if (category.includes('Monitoreo')) return <Droplets className="w-4 h-4 text-sky-400" />;
    return <Layers className="w-4 h-4 text-teal-400" />;
  };

  return (
    <section id="proyectos" className="py-20 relative bg-[#050C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Casos de Estudio & Enfoque Operativo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1.5 tracking-tight">
              Áreas de Intervención & Frentes de Trabajo
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Aplicación de metodologías SSOMA, monitoreo de recursos hídricos y modelación geoespacial en entornos mineros y territoriales.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            3 Frentes Técnicos Clave
          </span>
        </div>

        {/* Informative Guidance Banner for Visitors */}
        <div className="mb-10 p-3.5 rounded-xl bg-slate-900/60 border border-sky-900/40 flex items-center gap-2.5 text-xs text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Guía para visitantes del CV:</strong> Las fotografías y visualizaciones expuestas a continuación son de carácter referencial e ilustrativo, sirviendo de guía visual de los frentes de trabajo, metodologías e industrias (minería de gran altura, fiscalización hídrica y análisis geoespacial) en las que me desempeño.
          </span>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvData.projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="glass-panel rounded-2xl overflow-hidden border border-sky-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between shadow-xl shadow-black/50"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#050C1A]/85 backdrop-blur-md border border-sky-800/60 rounded-lg px-2.5 py-1 text-xs text-white flex items-center gap-1.5">
                    {getCategoryIcon(proj.category)}
                    <span className="text-[11px] font-medium">{proj.category}</span>
                  </div>

                  {/* Referential Guide Badge */}
                  <div className="absolute bottom-2.5 right-3 bg-black/70 backdrop-blur-sm border border-white/10 rounded px-2 py-0.5 text-[9px] text-slate-300">
                    Imagen de Guía Referencial
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mt-1 mb-2.5">
                    {proj.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Ver ficha técnica y alcance</span>
                <div className="w-8 h-8 rounded-full bg-cyan-950/60 group-hover:bg-cyan-400 text-cyan-400 group-hover:text-slate-950 flex items-center justify-center transition-colors border border-cyan-800/50 group-hover:border-cyan-400">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#071324] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#071324]/40 to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="text-[10px] text-slate-300 bg-black/60 px-2 py-0.5 rounded">
                    Guía Referencial
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Desafío Operacional
                </h4>
                <p className="leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Solución & Metodología Implementada
                </h4>
                <p className="leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  {selectedProject.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Resultados & Métricas Clave
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 p-2 rounded-lg bg-cyan-950/30 border border-cyan-900/40 text-cyan-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Normativas & Herramientas Aplicadas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-900/40 text-[11px] text-slate-400 flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Nota aclaratoria: Las imágenes sirven como guía ilustrativa del ámbito técnico de trabajo.</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full transition-colors"
              >
                Cerrar Ficha
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
