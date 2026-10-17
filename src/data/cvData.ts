export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  year: string;
  periodLabel: string;
  category: 'mineria' | 'publico' | 'ssoma' | 'laboratorio' | 'municipal';
  categoryLabel: string;
  responsibilities: string[];
  keyHighlight?: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  type: 'academica' | 'especializacion';
  description?: string;
  badge?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  level: number; // 1-100
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  metrics: string[];
}

export const cvData = {
  personal: {
    fullName: "Gabriela Paola Velarde Espinoza",
    shortName: "Gabriela Velarde",
    title: "Ingeniera Ambiental Titulada",
    specialties: ["Gestión Ambiental", "Fiscalización Ambiental", "SSOMA", "SIG"],
    location: "Arequipa, Perú",
    phone: "(+51) 958 600 725",
    phoneClean: "+51958600725",
    email: "gabyvelarde3@gmail.com",
    availability: "Disponibilidad inmediata para proyectos en Arequipa y operaciones mineras a nivel nacional.",
    aboutBio: `Ingeniera Ambiental titulada con sólida trayectoria en gestión ambiental, fiscalización, SSOMA y Sistemas Integrados de Gestión (SIG) en los sectores minero, público y privado. Especializada en la elaboración y seguimiento de documentación técnica, indicadores de desempeño, auditorías internas y externas bajo la norma ISO 45001:2018, gestión de requisitos legales, cierre de no conformidades, matrices IPERC y planes de supervisión ambiental (PLANEFA).`,
    aboutSecondary: `Enfocada en convertir los requisitos normativos y el análisis territorial en controles operacionales preventivos, seguros y sostenibles que generen valor tanto en faenas mineras de alta exigencia como en instituciones públicas y proyectos corporativos.`
  },

  stats: [
    { value: "+10", label: "Experiencias Clave", sub: "Sector minero, público y consultoría" },
    { value: "ISO 45001", label: "Auditor Interno", sub: "Sistemas Integrados de Gestión" },
    { value: "100%", label: "Cumplimiento Legal", sub: "PLANEFA, matrices IPERC y normativas" },
    { value: "SIG & CAD", label: "Cartografía Técnica", sub: "ArcGIS, QGIS, AutoCAD y Power BI" }
  ],

  competencies: [
    { title: "Gestión y Cumplimiento Ambiental", desc: "Supervisión de compromisos ambientales, planes de manejo y fiscalización técnico-legal." },
    { title: "SSOMA e IPERC Continuo", desc: "Identificación de peligros, evaluación de riesgos, controles operacionales y cultura de seguridad." },
    { title: "Sistemas Integrados de Gestión (SIG)", desc: "Mantenimiento y auditoría de sistemas bajo estándares internacionales ISO 45001:2018." },
    { title: "Supervisión y PLANEFA", desc: "Elaboración, ejecución y reporte de planes anuales de evaluación y fiscalización ambiental." },
    { title: "Evaluación de Impacto Ambiental (EIA)", desc: "Líneas base físico-biológicas, identificación de impactos y obligaciones en IGAs." },
    { title: "SIG y Cartografía Territorial", desc: "Zonificación ambiental, mapas temáticos y procesamiento de datos espaciales y climáticos." },
    { title: "Auditorías y No Conformidades", desc: "Acompañamiento en auditorías internas/externas, análisis causal y planes de acción correctiva." },
    { title: "Capacitación & Sensibilización", desc: "Instrucción técnica en seguridad, salud ocupacional y cultura ambiental preventiva." }
  ],

  experiences: [
    {
      id: "exp-1",
      company: "RADAY S.A.C.",
      role: "Asistente de Seguridad",
      location: "Arequipa",
      year: "2026",
      periodLabel: "2026 — Presente",
      category: "ssoma",
      categoryLabel: "SSOMA & Seguridad Industrial",
      keyHighlight: "Monitoreo y seguimiento riguroso de controles operacionales en campo.",
      responsibilities: [
        "Apoyo directo en actividades operativas de seguridad industrial y salud ocupacional.",
        "Seguimiento y verificación de controles preventivos relacionados con SSOMA en proyectos en ejecución.",
        "Inspección de condiciones de trabajo, equipos de protección personal (EPP) y reporte de incidentes."
      ],
      tags: ["SSOMA", "Inspecciones", "Controles Operativos", "Seguridad"]
    },
    {
      id: "exp-2",
      company: "MINERA BATEAS – CM CRISTOBAL S.A.C.",
      role: "Auxiliar SIG (Sistemas Integrados de Gestión)",
      location: "Caylloma, Arequipa",
      year: "2025",
      periodLabel: "2025",
      category: "mineria",
      categoryLabel: "Operación Minera Subterránea",
      keyHighlight: "Mantenimiento integral del SIG SSOMA y auditorías en faena minera de gran altura.",
      responsibilities: [
        "Participación activa en la implementación, mantenimiento y mejora continua del Sistema Integrado de Gestión en el área de SSOMA.",
        "Apoyo técnico en auditorías internas y externas, elaboración de documentación reglamentaria, revisión de KPIs e indicadores clave.",
        "Seguimiento exhaustivo de no conformidades hasta su cierre efectivo con metodología de causa raíz.",
        "Seguimiento del cumplimiento de requisitos legales y normativos sectoriales aplicables a minería.",
        "Apoyo en la implementación de controles operacionales de seguridad, salud ocupacional y medio ambiente en interior mina y superficie.",
        "Liderazgo en capacitaciones, campañas de sensibilización ambiental y programas de optimización continua."
      ],
      tags: ["Minería", "ISO 45001", "SIG", "Auditorías", "Cumplimiento Legal", "IPERC"]
    },
    {
      id: "exp-3",
      company: "MINERA BATEAS – MCEISA S.A.C.",
      role: "Secretaria de Seguridad",
      location: "Caylloma, Arequipa",
      year: "2025",
      periodLabel: "2025",
      category: "mineria",
      categoryLabel: "Operación Minera",
      keyHighlight: "Capacitación a cuadrillas de primera línea y fortalecimiento de la cultura de prevención.",
      responsibilities: [
        "Gestión de procesos técnico-administrativos de seguridad directamente vinculados a la operación minera.",
        "Capacitación continua al personal de primera línea en protocolos de seguridad, salud ocupacional y preservación del entorno.",
        "Seguimiento documental de no conformidades detectadas en el Sistema Integrado de Gestión.",
        "Desarrollo de materiales audiovisuales, fichas y comunicaciones estratégicas orientadas a consolidar la cultura de seguridad."
      ],
      tags: ["Minería", "Capacitaciones", "Comunicaciones SSOMA", "Primera Línea"]
    },
    {
      id: "exp-4",
      company: "RADAY S.A.C.",
      role: "Asistente de Seguridad",
      location: "Arequipa",
      year: "2024",
      periodLabel: "2024",
      category: "ssoma",
      categoryLabel: "Seguridad Industrial",
      keyHighlight: "Control operativo y cumplimiento de normativas de seguridad laboral.",
      responsibilities: [
        "Soporte en la gestión preventiva de riesgos laborales y protocolos de bioseguridad y protección ambiental.",
        "Supervisión del uso correcto de EPP y cumplimiento de estándares operacionales."
      ],
      tags: ["SSOMA", "Prevención", "Supervisión"]
    },
    {
      id: "exp-5",
      company: "GOBIERNO REGIONAL DE AREQUIPA",
      role: "Asistente en Seguridad y Riesgos Operacionales",
      location: "Arequipa",
      year: "2024",
      periodLabel: "2024",
      category: "publico",
      categoryLabel: "Sector Público Regional",
      keyHighlight: "Actualización de matriz IPERC regional y elaboración de planes de contingencia.",
      responsibilities: [
        "Identificación y evaluación sistemática de riesgos laborales y soporte en la gobernanza de sistemas de seguridad.",
        "Elaboración de planes integrales de emergencia y contingencia, informes técnicos y documentación oficial ante entidades reguladoras.",
        "Capacitación institucional en seguridad laboral, salud en el trabajo y responsabilidad ambiental.",
        "Investigación de accidentes laborales mediante análisis de árbol de causas y medidas correctivas.",
        "Actualización técnica de la matriz IPERC y monitoreo del programa anual de seguridad institucional."
      ],
      tags: ["GORE Arequipa", "IPERC", "Planes de Contingencia", "Investigación Accidentes", "Sector Público"]
    },
    {
      id: "exp-6",
      company: "CONTROL MINERAL S.A.C.",
      role: "Asistente de Administración de Laboratorios Metalúrgicos",
      location: "Arequipa",
      year: "2023",
      periodLabel: "2023",
      category: "laboratorio",
      categoryLabel: "Laboratorio Metalúrgico & Ensayos",
      keyHighlight: "Gestión técnica de inventarios de reactivos químicos y reportes de control.",
      responsibilities: [
        "Elaboración de informes de análisis de muestras, gestión de inventarios de reactivos y materiales especializados.",
        "Apoyo en tareas administrativas, control de calidad y soporte contable de los servicios de laboratorio metalúrgico."
      ],
      tags: ["Laboratorio", "Control de Calidad", "Informes Técnicos", "Metalurgia"]
    },
    {
      id: "exp-7",
      company: "ISOS GROUP ENGINEERS S.A.C.",
      role: "Practicante Profesional de Ingeniería Ambiental",
      location: "Arequipa",
      year: "2023",
      periodLabel: "2023",
      category: "ssoma",
      categoryLabel: "Consultoría Ambiental & Ingeniería",
      keyHighlight: "Actualización del PASST y elaboración de instrumentos PLANEFA.",
      responsibilities: [
        "Actualización técnica del Plan Anual de Seguridad y Salud en el Trabajo (PASST).",
        "Apoyo fundamental en la formulación y estructuración del Plan Anual de Evaluación y Fiscalización Ambiental (PLANEFA)."
      ],
      tags: ["PLANEFA", "PASST", "Consultoría Ambiental", "Instrumentos IGA"]
    },
    {
      id: "exp-8",
      company: "MINERA BATEAS – MCEISA S.A.C.",
      role: "Secretaria de Seguridad",
      location: "Arequipa",
      year: "2022",
      periodLabel: "2022",
      category: "mineria",
      categoryLabel: "Operaciones Mineras",
      keyHighlight: "Gestión documentaria de acreditaciones y expedientes para faena minera.",
      responsibilities: [
        "Gestión y archivo documentario del Sistema Integrado de Gestión y del departamento de SSOMA.",
        "Gestión integral del proceso de inducción y afiliación de personal técnico para ingreso a mina.",
        "Coordinación de reuniones estratégicas, citas médicas ocupacionales y logística de actividades operativas."
      ],
      tags: ["Minería", "SSOMA", "Gestión Documentaria", "Afiliaciones"]
    },
    {
      id: "exp-9",
      company: "MUNICIPALIDAD PROVINCIAL DE AREQUIPA",
      role: "Voluntariado — Subgerencia de Gestión Ambiental",
      location: "Arequipa",
      year: "2021",
      periodLabel: "2021",
      category: "municipal",
      categoryLabel: "Gestión Municipal Urbana",
      keyHighlight: "Campañas de segregación y economía circular en Arequipa Metropolitana.",
      responsibilities: [
        "Participación directa en el programa municipal de segregación de residuos sólidos orgánicos e inorgánicos en la fuente.",
        "Sensibilización a comunidades vecinales y registro de pesaje y valorización de residuos."
      ],
      tags: ["Residuos Sólidos", "Segregación", "Economía Circular", "Arequipa"]
    },
    {
      id: "exp-10",
      company: "MUNICIPALIDAD DISTRITAL DE CHARACATO",
      role: "Practicante Profesional de Ingeniería Ambiental",
      location: "Characato, Arequipa",
      year: "2021",
      periodLabel: "2021",
      category: "municipal",
      categoryLabel: "Fiscalización Municipal",
      keyHighlight: "Supervisión de denuncias ambientales y fiscalización bajo marco PLANEFA.",
      responsibilities: [
        "Ejecución de programas de segregación en la fuente y control de almacenamiento y entrega de EPP a personal de limpieza.",
        "Acciones de campo de supervisión y fiscalización ambiental para el estricto cumplimiento del PLANEFA 2020 y 2021.",
        "Inspección técnica y elaboración de actas de supervisión ante denuncias ambientales vecinales."
      ],
      tags: ["PLANEFA", "Denuncias Ambientales", "Supervisión", "Characato"]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "Título Profesional en Ingeniería Ambiental",
      institution: "Universidad César Vallejo",
      year: "2024",
      type: "academica",
      description: "Titulada con habilitación profesional para ejercicio en territorio nacional.",
      badge: "Titulada"
    },
    {
      degree: "Bachiller en Ingeniería Ambiental",
      institution: "Universidad Alas Peruanas — Filial Arequipa",
      year: "2023",
      type: "academica",
      description: "Formación en ciencias ambientales, hidrología, ecología, química y tratamiento de recursos.",
      badge: "Graduada"
    },
    {
      degree: "Especialización Profesional en Supervisor Líder en SSOMA",
      institution: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      year: "2024",
      type: "especializacion",
      description: "Liderazgo en Seguridad, Salud Ocupacional y Medio Ambiente con estándares para alta gerencia minera e industrial.",
      badge: "UNMSM"
    },
    {
      degree: "Programa de Auditor Interno en la Norma ISO 45001:2018",
      institution: "Consulting Group — Consultora de Gestión Humana",
      year: "2024",
      type: "especializacion",
      description: "Formación y calificación técnica para conducción y reporte de auditorías internas de sistemas de gestión.",
      badge: "ISO 45001"
    },
    {
      degree: "Especialización Profesional en Supervisor en Salud Ocupacional y Medio Ambiente",
      institution: "Consulting Group — Consultora de Gestión Humana",
      year: "2024",
      type: "especializacion",
      description: "Vigilancia médica ocupacional, matrices de compatibilidad y control de agentes contaminantes.",
      badge: "Especialización"
    },
    {
      degree: "Especialización Profesional en Evaluación de Impacto Ambiental (EIA) y SIG",
      institution: "Organización Mundial de Capacitación (OMC)",
      year: "2023",
      type: "especializacion",
      description: "Línea base ambiental físico-biológica, evaluación y modelación de impactos ambientales y zonificación con SIG.",
      badge: "SIG & EIA"
    },
    {
      degree: "Instrumentos de Gestión Ambiental & Obligaciones en IGA",
      institution: "OMC — Organización Mundial de Capacitación",
      year: "2023",
      type: "especializacion",
      description: "Análisis exhaustivo de planes de manejo ambiental (PMA), DIA, EIA-sd, EIA-d y fiscalización del OEFA.",
      badge: "IGA / OEFA"
    },
    {
      degree: "Congreso Latinoamericano de Trabajos de Alto Riesgo",
      institution: "Control Mineral S.A.C.",
      year: "2021",
      type: "especializacion",
      description: "Protocolos para espacios confinados, trabajos en altura, izajes y excavaciones mineras.",
      badge: "Alto Riesgo"
    }
  ] as EducationItem[],

  tools: [
    { name: "Sistemas Integrados (ISO 45001 / SIG)", category: "Normativa & Gestión", level: 95, detail: "Auditorías, matrices de requisitos legales y mejora continua" },
    { name: "Matrices IPERC & Controles Operacionales", category: "Seguridad y Salud", level: 94, detail: "Identificación de peligros en minería, industria y sector público" },
    { name: "Supervisión Ambiental & PLANEFA", category: "Fiscalización", level: 92, detail: "Planes anuales, inspecciones, actas y normativas OEFA/MINAM" },
    { name: "ArcGIS / QGIS (SIG)", category: "Cartografía & Territorio", level: 86, detail: "Zonificación ambiental, cuencas hidrográficas y análisis espacial" },
    { name: "AutoCAD", category: "Diseño & Planos", level: 82, detail: "Planos técnicos, rutas de evacuación y ubicación de monitoreo" },
    { name: "Power BI", category: "Datos & KPIs", level: 85, detail: "Dashboards interactivos de accidentabilidad, índices SSOMA y monitoreo" },
    { name: "Microsoft Excel Avanzado", category: "Datos", level: 90, detail: "Modelamiento estadístico, control de no conformidades e inventarios" },
    { name: "Adobe Photoshop / Suite Gráfica", category: "Comunicación Técnica", level: 80, detail: "Materiales de sensibilización, infografías y campañas de seguridad" },
    { name: "Google Workspace & Cloud Drive", category: "Colaboración", level: 95, detail: "Gestión documental compartida y control de versiones" }
  ] as ToolItem[],

  languages: [
    { name: "Español", level: "Nativo", desc: "Comunicación profesional técnica y legal" },
    { name: "Inglés", level: "Profesional", desc: "Lectura de normas internacionales, artículos y software técnico" },
    { name: "Italiano", level: "Intermedio", desc: "Competencia comunicativa y comprensión lectora" }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Control Operacional & SSOMA en Faena Minera",
      subtitle: "Minera Bateas (Caylloma) · Interior Mina y Superficie",
      category: "Minería & SSOMA",
      image: "/src/assets/images/project_mining_ssoma_1792265006228.jpg",
      summary: "Gestión de controles preventivos de alta montaña y auditorías internas del Sistema Integrado de Gestión bajo norma ISO 45001.",
      problem: "Exigentes condiciones climáticas de altura y altos estándares de seguridad en operaciones mineras continuas con cuadrillas multidisciplinarias.",
      solution: "Seguimiento riguroso de matriz IPERC continua, cierre de no conformidades con causa raíz, capacitaciones diarias y monitoreo ambiental preventivo.",
      technologies: ["ISO 45001:2018", "Matriz IPERC", "SIG SSOMA", "Inspecciones en Altura"],
      metrics: ["Cero incidentes de alto potencial en área supervisada", "+120 trabajadores capacitados", "100% no conformidades levantadas"]
    },
    {
      id: "proj-2",
      title: "Monitoreo Hidrológico & Calidad de Aguas Altoandinas",
      subtitle: "Protocolo Nacional ANA / OEFA · Cuencas del Sur",
      category: "Monitoreo Ambiental",
      image: "/src/assets/images/water_quality_equipment_nature_1792270209685.jpg",
      summary: "Muestreo y verificación de parámetros físicos y químicos en fuentes hídricas y efluentes conforme a Estándares de Calidad Ambiental (ECA).",
      problem: "Garantizar la preservación de los ecosistemas acuáticos y el estricto cumplimiento de los Límites Máximos Permisibles (LMP) en áreas de influencia.",
      solution: "Implementación de protocolos estandarizados de cadena de custodia, calibración de sondas multiparamétricas in situ y análisis de datos en laboratorio acreditado.",
      technologies: ["Sondas Multiparámetro", "Protocolo ANA", "ECAs Agua", "Cadena de Custodia"],
      metrics: ["Reportes técnicos consolidados sin observaciones", "Trazabilidad 100% validada", "Respuesta inmediata ante desviaciones"]
    },
    {
      id: "proj-3",
      title: "Zonificación & Análisis Geoespacial con SIG",
      subtitle: "ArcGIS & QGIS · Evaluación de Impacto y Cuencas",
      category: "SIG & Territorio",
      image: "/src/assets/images/project_sig_cartography_1792265005452.jpg",
      summary: "Elaboración de cartografía temática y modelamiento territorial para identificación de áreas vulnerables y líneas base ambientales.",
      problem: "Falta de visualización espacial integrada para evaluar la superposición de proyectos con zonas de amortiguamiento y redes hidrográficas.",
      solution: "Generación de modelos de elevación digital (DEM), mapas de pendientes, red de drenaje y zonificación de impacto físico-biológico.",
      technologies: ["ArcGIS Pro", "QGIS", "AutoCAD", "Modelos DEM", "Cartografía Satelital"],
      metrics: ["Precisión cartográfica a escala 1:10,000", "Optimización del tiempo de análisis en un 40%", "Mapas listos para fiscalización OEFA"]
    }
  ] as ProjectItem[],

  // The master prompt designed to recreate this page
  masterPromptText: `ROL Y OBJETIVO:
Actúa como desarrollador frontend senior, diseñador UI/UX y director de arte digital de clase mundial. Construye una aplicación web interactiva de portafolio y Curriculum Vitae profesional para la INGENIERA AMBIENTAL Gabriela Paola Velarde Espinoza, basada en un diseño minimalista, moderno, elegante y tecnológico con una paleta de colores AZUL MARINO PROFUNDO (Deep Navy Blue / Oceanic Caustics) inspirada fielmente en la composición visual de referencia ("Ocean Odyssey"): tipografía bold arquitectónica, contenedores glassmorphism con desenfoque de fondo, microinteracciones fluidas, píldoras y tarjetas de navegación interactivas.

1. INFORMACIÓN PROFESIONAL (CV REAL DE GABRIELA PAOLA VELARDE ESPINOZA):
- Nombre: Gabriela Paola Velarde Espinoza
- Título: Ingeniera Ambiental Titulada (Universidad César Vallejo, 2024 | Bachiller UAP, 2023)
- Especialidades: Gestión Ambiental · Fiscalización Ambiental · SSOMA · SIG · Sistemas Integrados de Gestión (ISO 45001:2018)
- Ubicación: Arequipa, Perú | Teléfono: (+51) 958 600 725 | Email: gabyvelarde3@gmail.com
- Experiencia laboral destacada (10 roles):
  * RADAY S.A.C. — Asistente de Seguridad (Arequipa | 2026 y 2024)
  * MINERA BATEAS – CM CRISTOBAL S.A.C. — Auxiliar SIG (Caylloma | 2025)
  * MINERA BATEAS – MCEISA S.A.C. — Secretaria de Seguridad (Caylloma y Arequipa | 2025 y 2022)
  * GOBIERNO REGIONAL DE AREQUIPA — Asistente en Seguridad y Riesgos Operacionales (Arequipa | 2024)
  * CONTROL MINERAL S.A.C. — Asistente de Administración de Laboratorios Metalúrgicos (Arequipa | 2023)
  * ISOS GROUP ENGINEERS S.A.C. — Practicante Profesional de Ingeniería Ambiental (Arequipa | 2023)
  * MUNICIPALIDAD PROVINCIAL DE AREQUIPA — Voluntariado Subgerencia de Gestión Ambiental (Arequipa | 2021)
  * MUNICIPALIDAD DISTRITAL DE CHARACATO — Practicante Profesional de Ingeniería Ambiental (Arequipa | 2021)
- Especialización:
  * Supervisor Líder en SSOMA — Universidad Nacional Mayor de San Marcos (UNMSM, 2024)
  * Auditor Interno ISO 45001:2018 — Consulting Group (2024)
  * Especialización en EIA y SIG — Organización Mundial de Capacitación OMC (2023)
  * Supervisor en Salud Ocupacional y Medio Ambiente — Consulting Group (2024)
  * Instrumentos de Gestión Ambiental en IGA — OMC (2023)
- Herramientas técnicas: Power BI, AutoCAD, ArcGIS, QGIS, Excel Avanzado, Photoshop, Google Workspace.
- Idiomas: Español (Nativo), Inglés (Profesional), Italiano (Intermedio).

2. LENGUAJE VISUAL Y PALETA CROMÁTICA (AZUL MARINO & OCEANIC GLASSMORPHISM):
- Fondo principal: Azul marino abisal y noche profunda (#050C1A, #081427, #0B172C).
- Superficies y tarjetas: Glassmorphism translúcido con desenfoque de 16px (rgba(11, 23, 44, 0.7)), bordes sutiles en cian/azul cielo (rgba(56, 189, 248, 0.15) a rgba(56, 189, 248, 0.35)).
- Acentos luminosos: Cian eléctrico (#38bdf8), turquesa marino (#22d3ee) y esmeralda técnico (#34d399) simulando bioluminiscencia y precisión instrumental.
- Tipografía: Sans-serif geométrica moderna (Plus Jakarta Sans o Outfit) combinada con títulos display condensados y limpios.
- Cero ruido innecesario, sin colores estridentes; orden visual, sofisticación, autoridad técnica e innovación aplicada al territorio y la minería.

3. ESTRUCTURA Y COMPONENTES INTERACTIVOS:
- Header Sticky: Barra flotante minimalista de 3 zonas con logotipo sutil, navegación fluida a todas las secciones y botón CTA 'Contactar' o 'Descargar CV'.
- Hero Section: Impacto visual inspirado en el diseño de referencia:
  * Fondo con textura marina nocturna cinematográfica y reflejos de luz cáustica.
  * Título monumental arquitectónico ("INGENIERÍA AMBIENTAL & SSOMA").
  * Retrato profesional de Gabriela en campo con tablet y equipo de seguridad integrado armónicamente.
  * Widget flotante inferior con selector dinámico tipo slider/carousel (01. Fiscalización & Minería, 02. Auditorías ISO 45001, 03. Cartografía SIG, 04. Gestión IPERC) con flechas activas y puntos de paginación.
  * Botones primarios: 'Ver Trayectoria Laboral', 'Descargar CV Completo' y 'Copiar Prompt'.
- Indicadores Clave (KPI Strip): 4 métricas destacadas (+10 Experiencias, ISO 45001, 100% Cumplimiento Legal, SIG & CAD).
- Sección Sobre Mí: Biografía técnica, valores de sostenibilidad y compromiso con la gestión ambiental minera y pública.
- Experiencia Laboral Interactiva: Timeline con filtros activos por sector (Minería, Sector Público, SSOMA, Todos) con tarjetas expandibles que detallan responsabilidades, logros e impacto.
- Matriz de Competencias & Herramientas: Barras de dominio técnico con filtros (Normativa, SIG, Datos, Seguridad).
- Casos de Estudio & Proyectos: Proyectos con imágenes de alta resolución (Minería en Caylloma, Calidad de Aguas Altoandinas, Cartografía SIG) y modal emergente de especificaciones completas.
- Formación Académica & Certificaciones: Tarjetas sobrias con sellos institucionales (UNMSM, UCV, UAP, OMC).
- Visor / Descarga de CV en formato imprimible: Modal para previsualizar e imprimir el CV en PDF limpio.
- Sección de Contacto: Datos directos (Email, WhatsApp +51 958 600 725, Ubicación Arequipa) con formulario funcional de mensaje directo.
- Modal de Prompt Maestro: Permite al usuario consultar y copiar el texto íntegro de este prompt con un clic.`
};
