"use client";

import { useViewStore } from "@/store/useViewStore";
import type { TechIconComponent } from "@/components/icons/TechIcons";
import {
  NextjsIcon, ReactIcon, TypeScriptIcon,
  TailwindIcon, HTML5Icon, CSS3Icon,
  JavaScriptIcon, NodejsIcon, RestAPIIcon,
  PrismaIcon, PostgreSQLIcon, NextAuthIcon,
  ZodIcon, BcryptIcon, StripeIcon,
  VercelBlobIcon, VitestIcon, ESLintIcon, GitIcon,
  GitHubIcon, VercelIcon, VSCodeIcon, PnpmIcon,
  CSharpIcon, DotNetIcon, PythonIcon, SQLServerIcon,
  SEOIcon, BootstrapIcon, ResendIcon,
} from "@/components/icons/TechIcons";

const techIconMap: Record<string, TechIconComponent> = {
  "Next.js 16": NextjsIcon,
  "React 19": ReactIcon,
  "TypeScript": TypeScriptIcon,
  "Tailwind CSS v4": TailwindIcon,
  "HTML5/CSS3": HTML5Icon,
  "JavaScript ES6": JavaScriptIcon,
  "Bootstrap": BootstrapIcon,
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
  "Vercel": VercelIcon,
  "pnpm": PnpmIcon,
  "C#": CSharpIcon,
  ".NET": DotNetIcon,
  "Python": PythonIcon,
  "SQL Server": SQLServerIcon,
  "REST APIs": RestAPIIcon,
  "SEO": SEOIcon,
};

interface TechCategory {
  title: string;
  items: { name: string; level: string; desc: string }[];
}

const categories: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js 16", level: "Avanzado", desc: "App Router, SSR, Server Components" },
      { name: "React 19", level: "Avanzado", desc: "Hooks, state management, UI patterns" },
      { name: "TypeScript", level: "Avanzado", desc: "Tipado estricto, interfaces, generics" },
      { name: "Tailwind CSS v4", level: "Avanzado", desc: "Sistemas de diseño utility-first y layouts responsivos" },
      { name: "HTML5/CSS3", level: "Avanzado", desc: "Semántica web, accesibilidad y layouts" },
      { name: "JavaScript ES6", level: "Avanzado", desc: "Modulos, async/await y manipulación DOM" },
    ],
  },
  {
    title: "Backend & Datos",
    items: [
      { name: "Node.js", level: "Avanzado", desc: "Event loop, REST APIs, runtime" },
      { name: "Next.js Server Actions", level: "Avanzado", desc: "Mutaciones de datos seguras" },
      { name: "Prisma", level: "Avanzado", desc: "ORM type-safe y migraciones" },
      { name: "PostgreSQL", level: "Avanzado", desc: "Diseño relacional y consultas" },
      { name: "NextAuth", level: "Avanzado", desc: "Autenticación, JWT y roles" },
      { name: "Zod", level: "Avanzado", desc: "Validación de esquemas" },
    ],
  },
  {
    title: "Herramientas & Ecosistema",
    items: [
      { name: "Stripe", level: "Avanzado", desc: "Pagos y suscripciones" },
      { name: "Resend", level: "Intermedio", desc: "Emails transaccionales" },
      { name: "Git / GitHub", level: "Avanzado", desc: "Control de versiones y workflows" },
      { name: "Vercel", level: "Avanzado", desc: "Despliegues continuos y CDN" },
      { name: "pnpm", level: "Avanzado", desc: "Gestión eficiente de paquetes" },
      { name: "Vitest", level: "Intermedio", desc: "Pruebas unitarias" },
    ],
  },
  {
    title: "Arquitectura & Backend .NET",
    items: [
      { name: "C#", level: "Avanzado", desc: "POO, SOLID y diseño modular" },
      { name: ".NET", level: "Avanzado", desc: "Clean Architecture, Web APIs" },
      { name: "SQL Server", level: "Avanzado", desc: "T-SQL, procedimientos almacenados" },
      { name: "REST APIs", level: "Avanzado", desc: "Diseño e integración de servicios" },
      { name: "Python", level: "Básico", desc: "Scripting y automatizaciones" },
      { name: "SEO", level: "Avanzado", desc: "Core Web Vitals y metadatos" },
    ],
  },
];

export default function Stack() {
  const { viewMode } = useViewStore();
  const resendIconColor = viewMode === "recruiter" ? "#000000" : "#ffffff";

  return (
    <section id="stack" className="py-24 relative w-full border-t border-foreground/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono text-foreground/50 mb-2 uppercase tracking-widest">
          02. Tecnologías
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-foreground">
          Stack Principal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 md:p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] min-w-0 overflow-hidden"
            >
              <h3 className="text-lg font-bold text-foreground mb-6 pb-3 border-b border-foreground/10">
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.items.map((item) => {
                  const IconComp = techIconMap[item.name];
                  return (
                    <div
                      key={item.name}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-foreground/[0.03] transition-colors min-w-0"
                    >
                      <div className="w-8 h-8 rounded-lg border border-foreground/10 bg-foreground/[0.03] flex items-center justify-center shrink-0 mt-0.5">
                        {IconComp ? (
                          <IconComp
                            className="w-4 h-4"
                            color={item.name === "Resend" ? resendIconColor : undefined}
                          />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium text-foreground break-words">{item.name}</span>
                          <span className="text-[10px] font-mono text-foreground/50 border border-foreground/10 px-2 py-0.5 rounded-full">
                            {item.level}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/50 break-words mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
