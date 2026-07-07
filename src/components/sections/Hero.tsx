"use client";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn, TextReveal } from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon, heroTechItems } from "@/components/icons/TechIcons";
import { motion } from "framer-motion";

function FloatingTechOrbit() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {heroTechItems.map((tech, i) => {
        const total = heroTechItems.length;
        const angle = (i / total) * 360;
        const radius = 38 + (i % 3) * 8;
        const duration = 45 + (i % 5) * 10;
        const delay = i * 0.15;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={tech.name}
            className="absolute flex items-center justify-center"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0.3, 0.5, 0],
              scale: [0.6, 1, 0.8, 1, 0.6],
              x: [0, 30 * Math.cos(angle), -20, 15 * Math.sin(angle), 0],
              y: [0, -25 * Math.sin(angle), 20, -10 * Math.cos(angle), 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          >
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm group hover:bg-white/[0.06] transition-all">
              <tech.Icon className="w-6 h-6 md:w-8 md:h-8 opacity-40" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating Tech Icons */}
      <FloatingTechOrbit />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        {/* Status Badge */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/20 text-primary text-sm font-medium mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Disponible para nuevas oportunidades
          </div>
        </FadeIn>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
          <TextReveal delay={0.2}>Ricardo</TextReveal>
          <TextReveal delay={0.35}>Gratereaux</TextReveal>
        </h1>

        {/* Role */}
        <FadeIn delay={0.5}>
          <p className="text-lg md:text-xl text-primary font-mono tracking-wider uppercase mb-6">
            Full Stack Software Developer
          </p>
        </FadeIn>

        {/* Description (adapts to view mode) */}
        <div className="min-h-[80px] mb-10 max-w-2xl mx-auto flex items-center justify-center">
          <FadeIn delay={0.6} key={viewMode}>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              {isDeveloper
                ? "Diseñando arquitecturas limpias y construyendo aplicaciones modernas, rápidas y escalables con Next.js, TypeScript y Node.js."
                : "Transformo ideas en productos digitales reales. Experiencia en liderazgo, diseño de producto y desarrollo Full Stack."}
            </p>
          </FadeIn>
        </div>

        {/* CTAs */}
        <FadeIn delay={0.7} className="flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton>
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)]"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/cv.pdf"
              target="_blank"
              className="group flex items-center gap-2 px-8 py-4 bg-zinc-900/80 border border-white/10 text-white rounded-full font-medium hover:bg-zinc-800 hover:border-white/20 transition-all"
            >
              Descargar CV
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.9} className="flex items-center gap-8 mt-14">
          <MagneticButton>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
          </MagneticButton>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1.1}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-16 flex flex-col items-center gap-2 text-zinc-600"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
