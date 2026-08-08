"use client";

import { useViewStore } from "@/store/useViewStore";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/TechIcons";

export default function Hero() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-20 w-full">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] text-xs font-mono mb-8 text-foreground/70">
          <span>Disponible para nuevos proyectos</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-foreground">
          Ricardo <br className="hidden sm:inline" />
          <span className="text-foreground/40">Gratereaux</span>
        </h1>

        {/* Role Tagline */}
        <p className="text-xl md:text-2xl font-mono text-foreground/80 mb-8 tracking-tight">
          Full Stack Software Developer
        </p>

        {/* Bio Copy */}
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl font-normal leading-relaxed mb-12">
          {isDeveloper
            ? "Especializado en Next.js, React, TypeScript y Node.js con sólida base en arquitectura C#/.NET y desarrollo de sistemas escalables."
            : "Transformando ideas complejas en experiencias digitales limpias, rápidas y efectivas desde 2021."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <span>Ver Proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-foreground/15 text-foreground font-medium text-sm hover:bg-foreground/[0.05] transition-colors"
          >
            <span>Descargar CV</span>
            <Download className="w-4 h-4 text-foreground/70" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 pt-6 border-t border-foreground/10 text-foreground/50">
          <a
            href="https://github.com/RicardoGratereaux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://do.linkedin.com/in/ricardo-gratereaux-baez-2a5915158"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:ricardogratereauxbaez@gmail.com"
            className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
