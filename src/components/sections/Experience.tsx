"use client";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn } from "@/components/animations/Reveal";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Users, Monitor, GraduationCap } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Experience() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  const containerRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      role: "Team Leader",
      company: "PR Support Management",
      period: "2024 - Actualidad",
      icon: Users,
      devDescription:
        "Liderazgo técnico del equipo de monitoreo. Revisión y resolución de incidencias críticas del sistema. Implementación de automatizaciones para optimizar procesos repetitivos. Diseño de dashboards de métricas de rendimiento.",
      recruiterDescription:
        "Supervisión directa de un equipo operativo. Gestión integral de incidencias con SLA estrictos. Optimización de flujos de trabajo que redujeron tiempos de respuesta. Evaluación continua mediante KPIs y métricas de rendimiento.",
      devSkills: ["Automatización", "Análisis de Datos", "Resolución de Problemas"],
      recruiterSkills: ["Liderazgo", "Gestión de KPI", "Mejora Continua"],
    },
    {
      role: "Agente de Monitoreo",
      company: "PR Support Management",
      period: "2023 - 2024",
      icon: Monitor,
      devDescription:
        "Monitoreo en tiempo real de sistemas y servicios. Análisis de logs para identificar patrones de fallo. Documentación técnica de incidencias y escalamiento eficiente a equipos de ingeniería.",
      recruiterDescription:
        "Vigilancia proactiva de la infraestructura tecnológica. Seguimiento de incidencias y cumplimiento de SLA. Colaboración interdepartamental para la resolución oportuna de problemas.",
      devSkills: ["Monitoreo", "Análisis de Logs", "Debugging"],
      recruiterSkills: ["Comunicación", "SLA", "Colaboración"],
    },
    {
      role: "Proyectos de Desarrollo de Software",
      company: "ITLA (Instituto Tecnológico de las Américas)",
      period: "2021 - 2025",
      icon: GraduationCap,
      devDescription:
        "Desarrollo de proyectos académicos que simulan entornos profesionales de producción a gran escala. Construcción de plataformas complejas como sistemas de Internet Banking, aplicaciones de streaming de películas y tiendas virtuales de libros. Implementación de arquitectura Onion/Clean Architecture, principios SOLID y patrones como Repository, Unit of Work y Dependency Injection en C# con .NET.",
      recruiterDescription:
        "Formación enfocada en simular entornos empresariales reales mediante proyectos de alta complejidad (Sistemas bancarios, plataformas de streaming de películas y gestión de librerías). Desarrollo de habilidades técnicas sólidas y liderazgo bajo plazos de entrega estrictos, trabajando en equipo de manera colaborativa.",
      devSkills: ["C#", ".NET", "Onion Architecture", "SOLID", "SQL Server", "Design Patterns"],
      recruiterSkills: ["Trabajo en Equipo", "Gestión del Tiempo", "Presentaciones", "Autodidacta"],
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="py-20 md:py-32 relative w-full">
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" style={{ transform: 'translateZ(0)', willChange: 'transform' }} />

      <div className="container mx-auto px-6">
        <FadeIn>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Trayectoria</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16 tracking-tight">
            <span className={isDeveloper ? "bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent" : "bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent"}>Experiencia</span> Profesional
          </h2>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const skills = isDeveloper ? exp.devSkills : exp.recruiterSkills;
              return (
                <FadeIn key={i} delay={0.2 + i * 0.15}>
                  <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                    {/* Timeline Node */}
                    <div className="hidden md:flex flex-col items-center relative z-10 pt-8">
                      <MagneticButton>
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          className="relative isolate overflow-hidden w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_var(--primary-glow)]"
                        >
                          <div className="absolute inset-0 z-[-1] rounded-[inherit] bg-white/5 backdrop-blur-[12px] opacity-80 group-hover:opacity-100 transition-opacity" />
                          <exp.icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
                        </motion.div>
                      </MagneticButton>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 glass-panel p-6 md:p-8 rounded-2xl group-hover:border-primary/20 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                        <div className="flex items-start gap-4">
                          <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                            <exp.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-zinc-400 text-sm md:text-base font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 whitespace-nowrap self-start sm:self-auto">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                        {isDeveloper ? exp.devDescription : exp.recruiterDescription}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <MagneticButton key={skill}>
                            <span className="relative isolate overflow-hidden inline-flex items-center justify-center text-xs font-mono text-zinc-400 px-3 py-1.5 rounded-full hover:text-white transition-all cursor-default group border border-white/5 hover:border-primary/40 shadow-sm hover:shadow-[0_0_15px_var(--primary-glow)]">
                              <div className="absolute inset-0 z-[-1] rounded-[inherit] bg-white/5 backdrop-blur-[12px] opacity-80 group-hover:opacity-100 transition-opacity" />
                              {skill}
                            </span>
                          </MagneticButton>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
