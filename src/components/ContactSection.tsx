import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate sending message and open mailto
    const mailtoSubject = encodeURIComponent(`Contacto Profesional - ${formData.company || formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hola Gabriela,\n\nSoy ${formData.name} (${formData.email}) de la empresa/entidad: ${formData.company || 'N/A'}.\n\nMensaje:\n${formData.message}\n\nQuedo a la espera de tu respuesta.`
    );

    window.open(`mailto:${cvData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
    setStatus('success');
  };

  return (
    <section id="contacto" className="py-20 relative bg-[#050C1A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-950/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Conexión Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1.5 tracking-tight">
            Iniciemos una Conversación
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Disponible para supervisión ambiental, consultoría SSOMA, auditorías ISO 45001 y proyectos mineros o gubernamentales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="glass-panel rounded-2xl p-6 border border-sky-900/40 space-y-5">
              <h3 className="text-base font-bold text-white mb-2">
                Canales de Contacto Directo
              </h3>

              {/* Email */}
              <a
                href={`mailto:${cvData.personal.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400">Correo Electrónico</p>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {cvData.personal.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp / Teléfono */}
              <a
                href={`https://wa.me/${cvData.personal.phoneClean}?text=Hola%20Gabriela,%20te%20contacto%20desde%20tu%20CV%20interactivo`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400">Teléfono / WhatsApp</p>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">
                    {cvData.personal.phone}
                  </p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Ubicación & Ámbito</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {cvData.personal.location}
                  </p>
                  <p className="text-[11px] text-cyan-300 mt-0.5">
                    Disponibilidad para viajes y faenas mineras
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action card */}
            <div className="glass-capsule rounded-2xl p-5 border border-emerald-900/40 bg-gradient-to-r from-emerald-950/30 to-slate-900/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Respuesta Rápida por WhatsApp</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Coordina una llamada o reunión técnica de inmediato.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${cvData.personal.phoneClean}?text=Hola%20Gabriela,%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold flex items-center gap-1 shrink-0 transition-all shadow-md shadow-emerald-500/20"
                >
                  <span>Chatear</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-900/40">
              <h3 className="text-lg font-bold text-white mb-1">
                Enviar un Mensaje Directo
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Completa el formulario para enviar una solicitud formal de servicios o propuesta laboral.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-cyan-950/50 border border-cyan-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">¡Mensaje Preparado!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Se ha abierto tu cliente de correo para enviar la comunicación a <span className="text-cyan-300">{cvData.personal.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Tu Nombre o Contacto <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Ing. Carlos Mendoza"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-950 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Correo Corporativo / Personal <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-950 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Empresa o Institución
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Compañía Minera / Consultora / GORE"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-950 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Detalle del Proyecto o Puesto de Interés <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe la oportunidad, los requerimientos SSOMA/ambientales o solicita una entrevista..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-950 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Enviar Mensaje a Gabriela</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
