import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { GraduationCap, Award, CheckCircle2, Bookmark } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todas' | 'academica' | 'especializacion'>('todas');

  const filteredEducation = cvData.education.filter((item) => {
    if (activeTab === 'todas') return true;
    return item.type === activeTab;
  });

  return (
    <section id="educacion" className="py-20 relative bg-[#061021]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Acreditación & Aprendizaje Continuo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1.5 tracking-tight">
              Formación Académica & Especializaciones
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Titulada colegiada con diplomados y certificaciones en las principales instituciones del país como la UNMSM y certificadoras ISO.
            </p>
          </div>

          {/* Segmented Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('todas')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                activeTab === 'todas'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos ({cvData.education.length})
            </button>
            <button
              onClick={() => setActiveTab('academica')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                activeTab === 'academica'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Grados Universitarios
            </button>
            <button
              onClick={() => setActiveTab('especializacion')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                activeTab === 'especializacion'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Especializaciones & ISO
            </button>
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredEducation.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-sky-900/30 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-800/40 flex items-center justify-center shrink-0">
                  {edu.type === 'academica' ? (
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Award className="w-5 h-5 text-sky-400" />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {edu.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold">
                      {edu.badge}
                    </span>
                  )}
                  <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                    {edu.year}
                  </span>
                </div>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                {edu.degree}
              </h3>
              
              <p className="text-xs text-cyan-400/90 font-medium mb-2.5 flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-cyan-500" />
                <span>{edu.institution}</span>
              </p>

              {edu.description && (
                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2.5">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
