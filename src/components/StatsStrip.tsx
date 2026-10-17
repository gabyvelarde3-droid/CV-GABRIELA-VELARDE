import React from 'react';
import { cvData } from '../data/cvData';
import { Award, Briefcase, CheckCircle2, Layers } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const icons = [
    <Briefcase className="w-5 h-5 text-cyan-400" key="1" />,
    <Award className="w-5 h-5 text-sky-400" key="2" />,
    <CheckCircle2 className="w-5 h-5 text-teal-400" key="3" />,
    <Layers className="w-5 h-5 text-cyan-300" key="4" />
  ];

  return (
    <section className="relative z-20 -mt-4 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cvData.stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-5 border border-sky-900/30 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </span>
              <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
            </div>
            <h2 className="text-sm font-semibold text-slate-200 mb-1">
              {stat.label}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
