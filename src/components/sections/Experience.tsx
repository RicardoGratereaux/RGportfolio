"use client";

import { useViewStore } from "@/store/useViewStore";

export default function Experience() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  const experiences = [
    {
      role: "Team Leader",
      company: "PR Support Management",
      period: "Nov 2024 - Actualidad",
      description: isDeveloper
        ? "Liderazgo técnico del equipo de monitoreo. Resolución de incidencias críticas del sistema, implementación de automatizaciones para optimizar procesos repetitivos y diseño de dashboards de métricas."
        : "Supervisión directa de equipo operativo. Gestión integral de incidencias con SLA estrictos y optimización continua de flujos de trabajo.",
      skills: isDeveloper
        ? ["Automatización", "Análisis de Datos", "Resolución de Problemas"]
        : ["Liderazgo", "Gestión de KPI", "Mejora Continua"],
    },
    {
      role: "Agente de Monitoreo",
      company: "PR Support Management",
      period: "Dec 2023 - Nov 2024",
      description: isDeveloper
        ? "Monitoreo en tiempo real de cámaras CCTV con SmartPSS para establecimientos departamentales. Documentación de informes a gerenciales y directivos vía SmartSheet."
        : "Monitoreo en tiempo real de sistemas CCTV en tiendas departamentales. Elaboración de informes ejecutivos para la gerencia y directivos, así como investigación de pérdidas y verificación del cumplimiento operativo.",
      skills: isDeveloper
        ? ["Monitoreo CCTV", "Análisis de Situaciones de riesgo", "Escalado de Informes", "SmartPSS"]
        : ["Comunicación", "Monitoreo CCTV", "Colaboración"],
    },
    {
      role: "Gestor Operativo",
      company: "Soluciones Inmobiliarias PGR",
      period: "2020 - Actualidad",
      description: isDeveloper
        ? "Classified"
        : "Classified",
      skills: isDeveloper
        ? ["Classified"]
        : ["Classified"],
    },
    {
      role: "Proyectos de Software Académicos y Formación",
      company: "ITLA (Instituto Tecnológico de las Américas)",
      period: "Ene 2021 - Oct 2025",
      description: isDeveloper
        ? "Desarrollo de proyectos simulando entornos de producción (Internet Banking, plataformas multimedia, ecommerce). Arquitectura Clean/Onion, principios SOLID y patrones de diseño en C#/.NET y SQL Server."
        : "Formación práctica en desarrollo empresarial con metodologías ágiles, liderazgo bajo plazos estrictos y trabajo colaborativo.",
      skills: isDeveloper
        ? ["C#", ".NET", "Clean Architecture", "SOLID", "SQL Server"]
        : ["Trabajo en Equipo", "Gestión de Proyectos", "Autodidacta"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative w-full border-t border-foreground/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono text-foreground/50 mb-2 uppercase tracking-widest">
          03. Trayectoria
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-foreground">
          Experiencia Profesional
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm font-mono text-foreground/60">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-foreground/50 border border-foreground/10 px-3 py-1 rounded-full self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-foreground/60 border border-foreground/10 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
