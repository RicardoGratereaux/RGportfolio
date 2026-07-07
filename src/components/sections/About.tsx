"use client";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn } from "@/components/animations/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";
import { Code2, Users, Zap, Target } from "lucide-react";

export default function About() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  const stats = isDeveloper
    ? [
        { label: "Tecnologías", value: "20+", icon: Code2 },
        { label: "Proyectos", value: "10+", icon: Zap },
        { label: "Certificaciones", value: "3", icon: Target },
      ]
    : [
        { label: "Liderazgo", value: "1+ año", icon: Users },
        { label: "Proyectos", value: "10+", icon: Zap },
        { label: "Certificaciones", value: "3", icon: Target },
      ];

  return (
    <section id="about" className="py-32 relative w-full">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <FadeIn>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Acerca de</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
            Sobre <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">Mí</span>
          </h2>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-xl">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-panel p-5 rounded-2xl text-center group hover:border-primary/30 transition-all"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-zinc-500 font-mono mt-1">{stat.label}</p>
              </motion.div>
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
                  ? "Como Full Stack Developer, disfruto diseñando arquitecturas limpias y resolviendo problemas complejos. Mi stack principal gira en torno a Next.js, React y TypeScript, utilizando herramientas modernas como Tailwind CSS y Prisma para construir APIs robustas y UIs altamente optimizadas."
                  : "Como líder y desarrollador, me apasiona optimizar procesos y construir experiencias intuitivas. A lo largo de mi carrera, he gestionado incidencias, supervisado equipos y evaluado métricas para asegurar la mejora continua y el éxito de cada proyecto."}
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {isDeveloper
                  ? "Me interesa especialmente el rendimiento, la experiencia de usuario, la arquitectura de software y las buenas prácticas. Actualmente sigo aprendiendo nuevas tecnologías."
                  : "Me interesa transformar ideas complejas en productos digitales simples y funcionales, priorizando siempre la calidad y la experiencia del usuario final."}
              </p>
            </SpotlightCard>
          </FadeIn>

          <div className="flex flex-col gap-8">
            <FadeIn delay={0.4} className="h-full">
              <SpotlightCard className="h-full flex flex-col justify-center p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold text-white">Formación Académica</h3>
                </div>
                <div className="pl-5 border-l border-white/10">
                  <h4 className="text-lg font-medium text-zinc-200">Tecnólogo en Desarrollo de Software</h4>
                  <p className="text-primary text-sm font-medium mt-1">Instituto Tecnológico de las Américas (ITLA)</p>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.5} className="h-full">
              <SpotlightCard className="h-full flex flex-col justify-center p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary" />
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
