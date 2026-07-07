"use client";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn } from "@/components/animations/Reveal";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Monitor } from "lucide-react";

export default function Experience() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

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
  ];

  return (
    <section id="experience" className="py-32 relative w-full">
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto px-6">
        <FadeIn>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Trayectoria</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">Experiencia</span> Profesional
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
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-lg"
                      >
                        <exp.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 glass-panel p-8 rounded-2xl group-hover:border-primary/20 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-zinc-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 whitespace-nowrap self-start">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                        {isDeveloper ? exp.devDescription : exp.recruiterDescription}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-mono text-zinc-500 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5 hover:text-white hover:border-primary/30 transition-all cursor-default"
                          >
                            {skill}
                          </span>
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
