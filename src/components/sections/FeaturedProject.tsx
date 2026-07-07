"use client";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn } from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { techIconMap, NextjsIcon, ReactIcon, TypeScriptIcon, TailwindIcon, PrismaIcon, PostgreSQLIcon, StripeIcon, ZodIcon } from "@/components/icons/TechIcons";
import { ExternalLink, Code2, Database, LayoutTemplate, Shield, ShoppingCart, CreditCard, BarChart3, Layers, Server, Palette, Search } from "lucide-react";
import { motion } from "framer-motion";

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
  { icon: Shield, label: "Auth completa", desc: "Login, registro y roles" },
  { icon: ShoppingCart, label: "Carrito & Checkout", desc: "Flujo de compra optimizado" },
  { icon: CreditCard, label: "Pagos con Stripe", desc: "Checkout seguro integrado" },
  { icon: BarChart3, label: "Dashboard Admin", desc: "Gestión de productos" },
  { icon: Layers, label: "Server Components", desc: "SSR & Server Actions" },
  { icon: Search, label: "SEO Optimizado", desc: "Core Web Vitals 100" },
];

export default function FeaturedProject() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  return (
    <section id="projects" className="py-32 relative w-full">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-6 mb-16">
            <div>
              <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Case Study</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Proyecto <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">Destacado</span>
              </h2>
            </div>
            <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-1 ml-4 hidden md:block" />
          </div>
        </FadeIn>

        {/* Project Header */}
        <FadeIn delay={0.1}>
          <div className="glass-panel rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Info */}
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-6">
                  {isDeveloper ? <Database className="w-4 h-4" /> : <LayoutTemplate className="w-4 h-4" />}
                  {isDeveloper ? "Arquitectura Full Stack" : "Producto Digital Completo"}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Plataforma Ecommerce
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-8">
                  {isDeveloper
                    ? "Sistema de comercio electrónico end-to-end construido con Next.js App Router. Implementa Server Actions para mutaciones optimistas, Prisma como ORM type-safe, Stripe para procesamiento de pagos y NextAuth para autenticación basada en roles. Arquitectura modular siguiendo principios SOLID con validación Zod en cada capa."
                    : "Una experiencia de compra moderna, fluida e interactiva. Los usuarios pueden explorar el catálogo, gestionar su carrito y completar pagos de forma segura. Incluye un dashboard de administración intuitivo para gestión de productos, inventario y pedidos. Diseño responsive y optimizado para SEO."}
                </p>

                {/* Tech pills with icons */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projectTechs.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.06] hover:border-primary/30 transition-all"
                    >
                      <tech.Icon className="w-3.5 h-3.5" />
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <MagneticButton>
                    <a href="#" className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                      <Code2 className="w-4 h-4" />
                      Ver Código
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a href="#" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </MagneticButton>
                </div>
              </div>

              {/* Visual Mockup */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/3] shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-6 flex flex-col">
                    {/* Browser chrome */}
                    <div className="w-full flex items-center gap-2 mb-6">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <div className="flex-1 bg-white/5 h-5 rounded-md ml-3 max-w-xs" />
                    </div>
                    {/* Layout */}
                    <div className="flex-1 flex gap-4">
                      <div className="w-1/5 space-y-3">
                        <div className="h-6 bg-white/5 rounded" />
                        <div className="h-4 bg-white/[0.03] rounded w-3/4" />
                        <div className="h-4 bg-white/[0.03] rounded w-2/3" />
                        <div className="h-4 bg-white/[0.03] rounded w-4/5" />
                        <div className="h-4 bg-white/[0.03] rounded w-1/2" />
                      </div>
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="h-2/5 bg-white/5 rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30" />
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((n) => (
                            <div key={n} className="bg-white/[0.04] rounded-lg p-3 flex flex-col justify-between">
                              <div className="w-full h-1/2 bg-white/5 rounded" />
                              <div className="space-y-1 mt-2">
                                <div className="h-2 bg-white/5 rounded w-3/4" />
                                <div className="h-2 bg-white/[0.03] rounded w-1/2" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {features.map((feature, i) => (
            <FadeIn key={feature.label} delay={0.1 + i * 0.05}>
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{feature.label}</h4>
                    <p className="text-xs text-zinc-500">{feature.desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
