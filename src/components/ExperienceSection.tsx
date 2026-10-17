import React, { useState, useMemo } from 'react';
import { cvData, ExperienceItem } from '../data/cvData';
import { Search, Briefcase, MapPin, Calendar, CheckCircle, ChevronDown, ChevronUp, Filter } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('exp-2'); // Expand Minera Bateas by default

  const filterOptions = [
    { id: 'todos', label: 'Toda la Trayectoria', count: cvData.experiences.length },
    { id: 'mineria', label: 'Minería & Caylloma', count: cvData.experiences.filter(e => e.category === 'mineria').length },
    { id: 'publico', label: 'Sector Público & GORE', count: cvData.experiences.filter(e => e.category === 'publico').length },
    { id: 'ssoma', label: 'SSOMA & Seguridad', count: cvData.experiences.filter(e => e.category === 'ssoma').length },
    { id: 'municipal', label: 'Municipal & Fiscalización', count: cvData.experiences.filter(e => e.category === 'municipal' || e.tags.includes('PLANEFA')).length },
  ];

  const filteredExperiences = useMemo(() => {
    return cvData.experiences.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedFilter === 'todos' ||
        (selectedFilter === 'mineria' && item.category === 'mineria') ||
        (selectedFilter === 'publico' && item.category === 'publico') ||
        (selectedFilter === 'ssoma' && (item.category === 'ssoma' || item.tags.includes('SSOMA'))) ||
        (selectedFilter === 'municipal' && (item.category === 'municipal' || item.tags.includes('PLANEFA')));

      // Search query
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.company.toLowerCase().includes(query) ||
        item.role.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.year.includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query)) ||
        item.responsibilities.some(r => r.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="experiencia" className="py-20 relative bg-[#050C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Cronología Laboral Comprobada
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 tracking-tight">
              Experiencia Profesional
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Trayectoria en faenas mineras de alta exigencia, organismos públicos regionales y consultoría ambiental especializada en Arequipa y el sur del Perú.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Buscar por mina, IPERC, año..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-9 pr-3 text-xs bg-slate-900/90 border border-sky-900/40 rounded-full text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] text-slate-400 hover:text-white absolute right-3 top-1/2 -translate-y-1/2"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/80 rounded-2xl border border-sky-950/60 overflow-x-auto no-scrollbar mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                selectedFilter === opt.id
                  ? 'bg-gradient-to-r from-cyan-900/80 to-blue-900/80 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <span>{opt.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedFilter === opt.id ? 'bg-cyan-400/20 text-cyan-300' : 'bg-slate-800 text-slate-500'
              }`}>
                {opt.count}
              </span>
            </button>
          ))}
        </div>

        {/* Experience List / Timeline */}
        {filteredExperiences.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center text-slate-400 border border-sky-900/30">
            <Filter className="w-8 h-8 mx-auto text-slate-600 mb-2" />
            <p className="text-sm">No se encontraron experiencias que coincidan con la búsqueda.</p>
            <button
              onClick={() => { setSelectedFilter('todos'); setSearchQuery(''); }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredExperiences.map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-cyan-500/50 bg-[#09152b]/90 shadow-xl shadow-cyan-950/30'
                      : 'border-sky-950/60 hover:border-sky-800/60 bg-[#071324]/60'
                  }`}
                >
                  {/* Card Header clickable */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                  >
                    <div className="flex items-start gap-4">
                      {/* Badge / Year circle */}
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-sky-800/50 flex flex-col items-center justify-center shrink-0 shadow-inner">
                        <span className="text-[10px] text-cyan-400 font-mono leading-none">AÑO</span>
                        <span className="text-sm font-bold text-white leading-none mt-0.5">{exp.year}</span>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                            {exp.company}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                          <span className="flex items-center gap-1 text-cyan-300">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="text-slate-400">{exp.categoryLabel}</span>
                          {exp.keyHighlight && (
                            <>
                              <span className="text-slate-600 hidden md:inline">·</span>
                              <span className="hidden md:inline text-slate-300 italic">{exp.keyHighlight}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-center shrink-0">
                      <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                        {exp.periodLabel}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(exp.id);
                        }}
                        className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
                        aria-label={isExpanded ? 'Colapsar detalles' : 'Expandir detalles'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-sky-950/60 bg-slate-950/40">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 pt-2">
                        Responsabilidades & Logros Técnicos:
                      </h4>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-900">
                        <span className="text-[11px] text-slate-500 mr-1">Palabras clave:</span>
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 border border-sky-900/40 text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
