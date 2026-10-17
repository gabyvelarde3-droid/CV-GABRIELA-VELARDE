import React from 'react';
import { cvData } from '../data/cvData';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';

interface CVPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVPrintModal: React.FC<CVPrintModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Controls Toolbar (hidden during print) */}
        <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between shrink-0 no-print">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-cyan-400">Currículum Vitae Oficial</span>
            <span className="text-xs text-slate-400">· Vista de Impresión / Guardar en PDF</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 hover:from-cyan-300 hover:to-sky-300 flex items-center gap-1.5 transition-all shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar en PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Cerrar modal de CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm leading-normal">
          
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
                  {cvData.personal.fullName}
                </h1>
                <p className="text-sm sm:text-base font-bold text-sky-900 tracking-wide mt-0.5">
                  INGENIERA AMBIENTAL TITULADA
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">
                  Gestión Ambiental · Fiscalización Ambiental · SSOMA · SIG
                </p>
              </div>

              <div className="text-xs text-slate-600 sm:text-right space-y-1">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cvData.personal.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cvData.personal.phone}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cvData.personal.email}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Perfil Profesional */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-950 border-b border-slate-300 pb-1 mb-2">
              Perfil Profesional
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              {cvData.personal.aboutBio} {cvData.personal.aboutSecondary}
            </p>
          </div>

          {/* Competencias Clave */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-950 border-b border-slate-300 pb-1 mb-2">
              Competencias Clave
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs text-slate-700">
              {cvData.competencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span>{comp.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia Profesional */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-950 border-b border-slate-300 pb-1 mb-3">
              Experiencia Profesional
            </h2>
            <div className="space-y-4">
              {cvData.experiences.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900">
                    <div>
                      <span>{exp.company}</span>
                      <span className="font-normal text-slate-600"> — {exp.role}</span>
                    </div>
                    <span className="text-slate-600 font-semibold text-[11px]">
                      {exp.location} | {exp.year}
                    </span>
                  </div>

                  <ul className="mt-1 space-y-1 pl-4 list-disc text-slate-700 text-[11px] leading-relaxed">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formación Académica */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-950 border-b border-slate-300 pb-1 mb-2">
              Formación Académica
            </h2>
            <div className="space-y-2 text-xs">
              {cvData.education.filter(e => e.type === 'academica').map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span>
                    <span className="text-slate-600"> | {edu.institution}</span>
                  </div>
                  <span className="font-bold text-slate-700 text-[11px]">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Especializaciones */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-950 border-b border-slate-300 pb-1 mb-2">
              Especialización y Formación Complementaria
            </h2>
            <div className="space-y-2 text-xs">
              {cvData.education.filter(e => e.type === 'especializacion').map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span>
                    <span className="text-slate-600"> — {edu.institution}</span>
                  </div>
                  <span className="font-bold text-slate-700 text-[11px] shrink-0 ml-2">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas & Idiomas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-950 mb-1">
                Herramientas de Software
              </h3>
              <p className="text-xs text-slate-700">
                Power BI · AutoCAD · ArcGIS / QGIS · Excel Avanzado · Photoshop · Google Drive
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-950 mb-1">
                Idiomas
              </h3>
              <p className="text-xs text-slate-700">
                Español (Nativo) · Inglés (Profesional) · Italiano (Intermedio)
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 no-print shrink-0">
          <span>Referencias laborales y documentación sustentatoria disponibles a solicitud.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          >
            Cerrar Vista
          </button>
        </div>

      </div>
    </div>
  );
};
