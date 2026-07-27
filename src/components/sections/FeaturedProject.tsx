"use client";

import { useViewStore } from "@/store/useViewStore";
import {
  NextjsIcon, ReactIcon, TypeScriptIcon, TailwindIcon, PrismaIcon, PostgreSQLIcon, StripeIcon, ZodIcon, GitHubIcon
} from "@/components/icons/TechIcons";
import { ExternalLink } from "lucide-react";

const projectTechs = [
  { name: "Next.js 16", Icon: NextjsIcon },
  { name: "React 19", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Tailwind v4", Icon: TailwindIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "PostgreSQL", Icon: PostgreSQLIcon },
  { name: "Stripe", Icon: StripeIcon },
  { name: "Zod", Icon: ZodIcon },
];

const features = [
  { label: "Autenticación & Roles", desc: "Login, registro y gestión de permisos con NextAuth" },
  { label: "Carrito & Checkout", desc: "Flujo de compra optimizado con mutaciones de estado" },
  { label: "Procesamiento de Pagos", desc: "Integración completa con Stripe Webhooks" },
  { label: "Dashboard Administrativo", desc: "Gestión en tiempo real de catálogo e inventario" },
  { label: "Server Components", desc: "Renderizado híbrido SSR/ISR y Server Actions" },
  { label: "Optimizaciones Web", desc: "Puntuación de Core Web Vitals 100 y SEO amplio" },
];

export default function FeaturedProject() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  return (
    <section id="projects" className="py-24 relative w-full border-t border-foreground/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono text-foreground/50 mb-2 uppercase tracking-widest">
          04. Case Study
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-foreground">
          Proyecto Destacado
        </h2>

        {/* Main Card */}
        <div className="p-8 md:p-12 rounded-2xl border border-foreground/10 bg-foreground/[0.02] mb-8">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-foreground/50 uppercase tracking-wider block mb-2">
                Ecommerce Platform
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Gold Ocean Lures
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-xs font-mono hover:bg-foreground/10 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-mono font-medium hover:opacity-90 transition-opacity"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>Código</span>
              </a>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-8 text-base">
            {isDeveloper
              ? "Sistema de comercio electrónico full stack con Next.js App Router. Implementa Server Actions para mutaciones optimistas, Prisma ORM, Stripe para transacciones y NextAuth para roles. Arquitectura modular con validación estricta Zod."
              : "Plataforma web moderna de ventas con catálogo interactivo, carrito de compras, pasarela de pagos segura y panel administrativo completo."}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-foreground/10">
            {projectTechs.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground/70 border border-foreground/10 px-3 py-1 rounded-full"
              >
                <tech.Icon className="w-3.5 h-3.5" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat) => (
            <div
              key={feat.label}
              className="p-6 rounded-xl border border-foreground/10 bg-foreground/[0.02]"
            >
              <h4 className="text-sm font-bold text-foreground mb-1">{feat.label}</h4>
              <p className="text-xs text-foreground/60 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
