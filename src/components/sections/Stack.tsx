"use client";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn } from "@/components/animations/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import {
  NextjsIcon, ReactIcon, TypeScriptIcon, TailwindIcon, FramerMotionIcon, LenisIcon, HTML5Icon, CSS3Icon, JavaScriptIcon, NodejsIcon, RestAPIIcon, PrismaIcon, PostgreSQLIcon, NextAuthIcon, ZodIcon, BcryptIcon, StripeIcon, ResendIcon, VercelBlobIcon, VitestIcon, ESLintIcon, GitIcon, GitHubIcon, VercelIcon, VSCodeIcon, PnpmIcon, CSharpIcon, DotNetIcon, PythonIcon, SQLServerIcon, SEOIcon, BootstrapIcon
} from "@/components/icons/TechIcons";

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js 16": NextjsIcon,
  "Next.js": NextjsIcon,
  "React 19": ReactIcon,
  "React": ReactIcon,
  "TypeScript": TypeScriptIcon,
  "Tailwind CSS v4": TailwindIcon,
  "Tailwind CSS": TailwindIcon,
  "Tailwind v4": TailwindIcon,
  "Framer Motion": FramerMotionIcon,
  "Lenis": LenisIcon,
  "HTML5/CSS3": HTML5Icon,
  "HTML5": HTML5Icon,
  "CSS3": CSS3Icon,
  "JavaScript ES6": JavaScriptIcon,
  "JavaScript": JavaScriptIcon,
  "Node.js": NodejsIcon,
  "Next.js Server Actions": NextjsIcon,
  "API Routes": RestAPIIcon,
  "Prisma": PrismaIcon,
  "PostgreSQL": PostgreSQLIcon,
  "NextAuth": NextAuthIcon,
  "Zod": ZodIcon,
  "Bcrypt": BcryptIcon,
  "Stripe": StripeIcon,
  "Resend": ResendIcon,
  "Vercel Blob": VercelBlobIcon,
  "Vitest": VitestIcon,
  "ESLint": ESLintIcon,
  "Git / GitHub": GitIcon,
  "Git": GitIcon,
  "GitHub": GitHubIcon,
  "Vercel": VercelIcon,
  "VS Code": VSCodeIcon,
  "pnpm": PnpmIcon,
  "C#": CSharpIcon,
  ".NET": DotNetIcon,
  "Python": PythonIcon,
  "SQL Server": SQLServerIcon,
  "REST APIs": RestAPIIcon,
  "SEO": SEOIcon,
  "Bootstrap": BootstrapIcon,
  "Responsive Design": CSS3Icon,
};
import { motion } from "framer-motion";
import { useRef } from "react";

interface TechItem {
  name: string;
  level: "Avanzado" | "Intermedio" | "Básico";
  description: string;
}

const stackCategories: {
  key: string;
  title: string;
  subtitle: string;
  devSubtitle: string;
  items: TechItem[];
}[] = [
  {
    key: "frontend",
    title: "Frontend",
    subtitle: "Interfaces modernas y responsivas",
    devSubtitle: "Component architecture & UI optimization",
    items: [
      { name: "Next.js 16", level: "Avanzado", description: "App Router, SSR, ISR" },
      { name: "React 19", level: "Avanzado", description: "Hooks, Server Components" },
      { name: "TypeScript", level: "Avanzado", description: "Tipado estricto, generics" },
      { name: "Tailwind CSS v4", level: "Avanzado", description: "Utility-first, design systems" },
      { name: "Framer Motion", level: "Avanzado", description: "Animaciones declarativas" },
      { name: "Lenis", level: "Intermedio", description: "Smooth scrolling" },
      { name: "HTML5/CSS3", level: "Avanzado", description: "Semántica, accesibilidad" },
      { name: "JavaScript ES6", level: "Avanzado", description: "ES modules, async/await" },
      { name: "Bootstrap", level: "Intermedio", description: "Responsive layouts" },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    subtitle: "APIs robustas y seguras",
    devSubtitle: "Server-side logic & data management",
    items: [
      { name: "Node.js", level: "Avanzado", description: "Runtime, event loop" },
      { name: "Next.js Server Actions", level: "Avanzado", description: "Mutaciones optimistas" },
      { name: "API Routes", level: "Avanzado", description: "RESTful endpoints" },
      { name: "Prisma", level: "Avanzado", description: "ORM type-safe" },
      { name: "PostgreSQL", level: "Avanzado", description: "Relacional, queries" },
      { name: "NextAuth", level: "Avanzado", description: "Auth, roles, sessions" },
      { name: "Zod", level: "Avanzado", description: "Schema validation" },
      { name: "Bcrypt", level: "Intermedio", description: "Password hashing" },
    ],
  },
  {
    key: "tools",
    title: "Herramientas",
    subtitle: "DevOps, pagos y comunicación",
    devSubtitle: "Build tools, CI/CD & integrations",
    items: [
      { name: "Stripe", level: "Avanzado", description: "Pagos, subscripciones" },
      { name: "Resend", level: "Intermedio", description: "Emails transaccionales" },
      { name: "Vercel Blob", level: "Intermedio", description: "Cloud storage" },
      { name: "Vitest", level: "Intermedio", description: "Unit/integration tests" },
      { name: "ESLint", level: "Avanzado", description: "Code quality" },
      { name: "Git / GitHub", level: "Avanzado", description: "Version control, PRs" },
      { name: "Vercel", level: "Avanzado", description: "Deploys, analytics" },
      { name: "pnpm", level: "Avanzado", description: "Package management" },
    ],
  },
  {
    key: "other",
    title: "Otros",
    subtitle: "Conocimientos complementarios",
    devSubtitle: "Cross-platform & additional skills",
    items: [
      { name: "C#", level: "Avanzado", description: "OOP, SOLID, Design Patterns" },
      { name: ".NET", level: "Avanzado", description: "Clean/Onion Architecture, Web APIs" },
      { name: "Python", level: "Básico", description: "Scripting, automation" },
      { name: "SQL Server", level: "Avanzado", description: "T-SQL, procedures, queries" },
      { name: "REST APIs", level: "Avanzado", description: "Design & consumption" },
      { name: "SEO", level: "Avanzado", description: "Core Web Vitals, OG" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Avanzado: "text-emerald-400 bg-emerald-400/10",
  Intermedio: "text-amber-400 bg-amber-400/10",
  Básico: "text-zinc-400 bg-zinc-400/10",
};

export default function Stack() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="stack" ref={containerRef} className="py-32 relative w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" style={{ transform: 'translateZ(0)', willChange: 'transform' }} />

      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Tecnologías</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Stack <span className={isDeveloper ? "bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent" : "bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent"}>Principal</span>
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              {isDeveloper
                ? "Herramientas que utilizo para garantizar tipado estricto, rendimiento óptimo y despliegues sin fricción."
                : "Tecnologías que domino para entregar productos completos, desde la interfaz hasta la base de datos."}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {stackCategories.map((cat, catIdx) => (
            <FadeIn key={cat.key} delay={0.1 + catIdx * 0.1} className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-zinc-500 mt-1 font-mono">
                      {isDeveloper ? cat.devSubtitle : cat.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-600">
                    {cat.items.length} techs
                  </span>
                </div>

                <div className="space-y-1">
                  {cat.items.map((item, i) => {
                    const IconComp = techIconMap[item.name];
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                        className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-all cursor-default"
                      >
                        {/* Icon */}
                        <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                          {IconComp ? (
                            <IconComp className="w-5 h-5" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </div>

                        {/* Name & Description */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                              {item.name}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${levelColors[item.level]}`}>
                              {item.level}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors truncate">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
