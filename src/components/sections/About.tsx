"use client";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn } from "@/components/animations/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Zap, Target } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function About() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const stats = isDeveloper
    ? [
        { label: "Años Programando", value: "4+", icon: Code2 },
        { label: "Proyectos", value: "10+", icon: Zap },
        { label: "Certificaciones", value: "3", icon: Target },
      ]
    : [
        { label: "Años Programando", value: "4+", icon: Code2 },
        { label: "Proyectos", value: "10+", icon: Zap },
        { label: "Certificaciones", value: "3", icon: Target },
      ];

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 relative w-full">
      <motion.div style={{ y }} className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <FadeIn>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Acerca de</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16 tracking-tight">
            Sobre <span className={isDeveloper ? "bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent" : "bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent"}>Mí</span>
          </h2>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 md:mb-16 max-w-xl">
            {stats.map((stat, i) => (
              <FadeIn
                key={stat.label}
                delay={0.2 + i * 0.1}
                className="h-full"
              >
                <div className="relative isolate overflow-hidden glass-panel h-full w-full block p-5 rounded-2xl text-center group border border-white/5 hover:border-primary/40 transition-all shadow-sm hover:shadow-[0_0_20px_var(--primary-glow)]">
                  <div className="absolute inset-0 z-[-1] rounded-[inherit] bg-white/5 backdrop-blur-[12px] opacity-80 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="w-5 h-5 text-zinc-400 mx-auto mb-2 group-hover:scale-110 group-hover:text-primary transition-all duration-300 relative z-10" />
                  <p className="text-2xl md:text-3xl font-bold text-white relative z-10">{stat.value}</p>
                  <p className="text-xs text-zinc-500 group-hover:text-zinc-300 font-mono mt-1 transition-colors relative z-10">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.3} className="h-full">
            <SpotlightCard className="h-full flex flex-col justify-center p-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {isDeveloper ? <Code2 className="w-5 h-5" /> : <Users className="w-5 h-5" />}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {isDeveloper ? "Mi Enfoque Técnico" : "Mi Enfoque Profesional"}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {isDeveloper
                  ? "Durante mi formación en el ITLA (2021-2025) desarrollé proyectos que simulan entornos de producción reales, tales como sistemas de Internet Banking, plataformas de películas y librerías virtuales. Trabajé principalmente con C# y .NET, implementando patrones de diseño (Repository, Unit of Work, CQRS) y Clean Architecture. Hoy complemento esa base sólida con Next.js, React y TypeScript."
                  : "Mi trayectoria en el ITLA se caracterizó por desarrollar proyectos complejos que simulan entornos empresariales reales (Sistemas bancarios, plataformas de consumo multimedia y tiendas de libros). Esto me dio una base excepcionalmente sólida en arquitectura de software y buenas prácticas para la industria."}
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {isDeveloper
                  ? "Mi formación en el ITLA me dio una base sólida en principios SOLID, arquitectura de software y buenas prácticas. Actualmente aplico esos conocimientos en el ecosistema JavaScript/TypeScript moderno."
                  : "Busco aportar valor combinando experiencia técnica con visión de producto. Me interesa formar parte de equipos donde pueda crecer profesionalmente y contribuir al desarrollo de productos digitales de impacto."}
              </p>
            </SpotlightCard>
          </FadeIn>

          <div className="flex flex-col gap-8">
            <FadeIn delay={0.4} className="h-full">
              <SpotlightCard className="h-full flex flex-col justify-center p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-white">Formación Académica</h3>
                </div>
                <div className="relative border-l border-white/10 ml-3 space-y-8 py-2">
                  <div className="relative pl-6">
                    {/* Timeline Node perfectly centered: w-3 = 12px. Half is 6px. Border is 1px (center is 0.5). Left shift = 6.5px */}
                    <div className="absolute top-1.5 -left-[6.5px] w-3 h-3 rounded-full border-2 border-primary bg-zinc-950 shadow-[0_0_10px_var(--primary-glow)]" />
                    <h4 className="text-lg font-medium text-zinc-200 leading-tight mb-1">Tecnólogo en Desarrollo de Software</h4>
                    <p className="text-primary text-sm font-medium">Instituto Tecnológico de las Américas (ITLA) · 2021 - 2025</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute top-1.5 -left-[6.5px] w-3 h-3 rounded-full border-2 border-primary/50 bg-zinc-950 group-hover:border-primary transition-colors" />
                    <h4 className="text-lg font-medium text-zinc-200 leading-tight mb-1">Full Stack Open</h4>
                    <p className="text-primary text-sm font-medium">Universidad de Helsinki · Nivel Avanzado</p>
                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                      Especialización en desarrollo web moderno con React, Redux, Node.js, GraphQL y TypeScript.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.5} className="h-full">
              <SpotlightCard className="h-full flex flex-col justify-center p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-white">Certificaciones</h3>
                </div>
                <ul className="space-y-3 pl-5">
                  {[
                    { cert: "Responsive Web Design", org: "FreeCodeCamp" },
                    { cert: "Cisco IT Essentials", org: "Cisco" },
                    { cert: "Diseño Web", org: "Certificación" },
                  ].map((item) => (
                    <li key={item.cert} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 group-hover:bg-primary transition-colors" />
                      <div>
                        <p className="text-zinc-200 font-medium text-sm group-hover:text-white transition-colors">{item.cert}</p>
                        <p className="text-zinc-600 text-xs">{item.org}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
