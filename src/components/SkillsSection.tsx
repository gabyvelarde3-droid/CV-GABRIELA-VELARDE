import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { Check, Cpu, Globe, Award, Database, Map, FileSpreadsheet, Palette } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedToolCategory, setSelectedToolCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas las Herramientas' },
    { id: 'Normativa & Gestión', label: 'Normativa & SSOMA' },
    { id: 'Cartografía & Territorio', label: 'SIG & Cartografía' },
    { id: 'Datos', label: 'Power BI & Excel' },
  ];

  const filteredTools = selectedToolCategory === 'all'
    ? cvData.tools
    : cvData.tools.filter(t => t.category.toLowerCase().includes(selectedToolCategory.toLowerCase()));

  const getToolIcon = (name: string) => {
    if (name.includes('SIG') || name.includes('ArcGIS')) return <Map className="w-4 h-4 text-cyan-400" />;
    if (name.includes('Power BI') || name.includes('Excel')) return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
    if (name.includes('Photoshop')) return <Palette className="w-4 h-4 text-sky-400" />;
    if (name.includes('AutoCAD')) return <Database className="w-4 h-4 text-blue-400" />;
    return <Award className="w-4 h-4 text-cyan-300" />;
  };

  return (
    <section id="competencias" className="py-20 relative bg-[#061021]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Especialidades & Habilidades Técnicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1.5 tracking-tight">
            Competencias Clave de Ingeniería
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Dominio integrado de normativas de fiscalización, sistemas internacionales ISO y software especializado en datos espaciales y monitoreo.
          </p>
        </div>

        {/* 8 Core Competencies Grid (Clean cards, no pill spam) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {cvData.competencies.map((comp, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-sky-900/30 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-950/70 border border-cyan-800/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Check className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {comp.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Tools & Software Matrix */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-900/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Herramientas de Software & Normativa Aplicada</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Capacidad operativa en análisis de datos, cartografía y gestión técnica de documentos.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedToolCategory(c.id)}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors whitespace-nowrap ${
                    selectedToolCategory === c.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                      : 'text-slate-400 hover:text-white bg-slate-900/60'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                      {getToolIcon(tool.name)}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">
                        {tool.name}
                      </h4>
                      <span className="text-[10px] text-slate-400">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 tabular-nums">
                    {tool.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-700"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-400 leading-normal">
                  {tool.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Languages Row */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Competencia Lingüística</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cvData.languages.map((lang, lIdx) => (
                <div
                  key={lIdx}
                  className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-bold text-white">{lang.name}</p>
                    <p className="text-[11px] text-slate-400">{lang.desc}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
