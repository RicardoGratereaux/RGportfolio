"use client";

import { useViewStore } from "@/store/useViewStore";
import { Code2, Zap, Target, BookOpen, Award } from "lucide-react";

export default function About() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  const stats = [
    { label: "Años Programando", value: "4+", icon: Code2 },
    { label: "Proyectos", value: "10+", icon: Zap },
    { label: "Certificaciones", value: "3", icon: Target },
  ];

  return (
    <section id="about" className="py-24 relative w-full border-t border-foreground/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono text-foreground/50 mb-2 uppercase tracking-widest">
          01. Sobre Mí
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-foreground">
          Trayectoria & Filosofía
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] flex flex-col justify-between"
            >
              <stat.icon className="w-5 h-5 text-foreground/40 mb-4" />
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-xs font-mono text-foreground/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Approach Card */}
          <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              {isDeveloper ? "Enfoque Técnico" : "Enfoque Profesional"}
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-4 text-sm">
              {isDeveloper
                ? "Durante mi formación en el ITLA (2021-2025) desarrollé proyectos orientados a producción real (Internet Banking, plataformas multimedia, tiendas virtuales). Trabajé extensamente con C#/.NET aplicando principios SOLID, Clean Architecture y patrones como CQRS y Repository."
                : "Con experiencia en desarrollo Full Stack y liderazgo operativo, me enfoco en entregar software confiable que resuelva problemas reales de negocio con excelente rendimiento y mantenibilidad."}
            </p>
            <p className="text-foreground/60 leading-relaxed text-sm">
              Actualmente combino esa arquitectura sólida con el ecosistema moderno de TypeScript, React, Next.js y Node.js.
            </p>
          </div>

          {/* Academic & Certifications */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-foreground/60" />
                <h3 className="text-lg font-bold text-foreground">Formación Académica</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground">Tecnólogo en Desarrollo de Software</h4>
                  <p className="text-foreground/60 text-xs font-mono">ITLA (Instituto Tecnológico de las Américas) · 2021 - 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Full Stack Open</h4>
                  <p className="text-foreground/60 text-xs font-mono">Universidad de Helsinki · Nivel Avanzado</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-foreground/60" />
                <h3 className="text-lg font-bold text-foreground">Certificaciones</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex justify-between">
                  <span>Responsive Web Design</span>
                  <span className="font-mono text-xs text-foreground/40">FreeCodeCamp</span>
                </li>
                <li className="flex justify-between">
                  <span>Cisco IT Essentials</span>
                  <span className="font-mono text-xs text-foreground/40">Cisco</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
