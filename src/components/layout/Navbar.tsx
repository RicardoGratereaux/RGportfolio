"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ExternalLink, ChevronDown, Layers, Sparkles, Code2, Database } from "lucide-react";
import { GitHubIcon } from "@/components/icons/TechIcons";

const projectsList = [
  {
    title: "Gold Ocean Lures",
    category: "Ecommerce Full Stack",
    description: "Plataforma de comercio electrónico con Next.js 16, Stripe y Prisma.",
    href: "#projects",
    techs: ["Next.js", "Stripe", "Prisma"],
    featured: true,
    icon: Sparkles,
  },
  {
    title: "Internet Banking System",
    category: "Arquitectura .NET & C#",
    description: "Sistema bancario simulado con Clean Architecture y SQL Server.",
    href: "#projects",
    techs: ["C#", ".NET", "SQL Server"],
    featured: false,
    icon: Database,
  },
  {
    title: "Movie Streaming App",
    category: "Plataforma Multimedia",
    description: "Aplicación de streaming con catálogo interactivo y consumo de API.",
    href: "#projects",
    techs: ["React", "Node.js", "REST API"],
    featured: false,
    icon: Layers,
  },
  {
    title: "Virtual Bookstore",
    category: "Biblioteca Digital",
    description: "Tienda y gestor de libros virtuales con TypeScript estricto.",
    href: "#projects",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    featured: false,
    icon: Code2,
  },
];

const navLinks = [
  { label: "Sobre Mí", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects", hasDropdown: true },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setDropdownOpen(false);
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || dropdownOpen
            ? "bg-background/90 backdrop-blur-xl border-b border-foreground/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollClick(e, "#")}
            className="text-lg font-bold tracking-tight text-foreground"
          >
            RG<span className="text-foreground/40">.dev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollClick(e, link.href)}
                      className={`text-sm inline-flex items-center gap-1 transition-colors py-1 ${
                        dropdownOpen ? "text-foreground font-medium" : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-foreground" : "text-foreground/40"
                        }`}
                      />
                    </a>
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollClick(e, link.href)}
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, "#contact")}
              className="px-4 py-2 text-xs font-mono border border-foreground/20 rounded-full text-foreground hover:bg-foreground/10 transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* ─── Apple-style Mega Dropdown ────────────────────────────── */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute left-0 right-0 top-full bg-background/95 backdrop-blur-2xl border-b border-foreground/10 transition-all duration-300 ease-out overflow-hidden hidden md:block ${
            dropdownOpen
              ? "opacity-100 max-h-[500px] pointer-events-auto shadow-2xl"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-8 max-w-6xl">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Side: Projects Grid (8 cols) */}
              <div className="col-span-8 space-y-4">
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-foreground/50">
                    Explorar Proyectos
                  </span>
                  <a
                    href="#projects"
                    onClick={(e) => handleScrollClick(e, "#projects")}
                    className="text-xs font-mono text-foreground/70 hover:text-foreground inline-flex items-center gap-1"
                  >
                    <span>Ver todos</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {projectsList.map((project) => (
                    <a
                      key={project.title}
                      href={project.href}
                      onClick={(e) => handleScrollClick(e, project.href)}
                      className="group p-4 rounded-xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/20 transition-all block"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <project.icon className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
                          <span className="text-sm font-bold text-foreground group-hover:underline decoration-foreground/30 underline-offset-4">
                            {project.title}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-foreground/30 group-hover:text-foreground/80 transition-colors" />
                      </div>

                      <p className="text-xs text-foreground/60 mb-3 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.techs.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-foreground/50 border border-foreground/10 px-2 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side: Featured Spotlight & Quick Links (4 cols) */}
              <div className="col-span-4 border-l border-foreground/10 pl-8 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-foreground/50 block mb-3">
                    Proyecto Destacado
                  </span>
                  <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.03] space-y-2">
                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block">
                      Case Study Principal
                    </span>
                    <h4 className="text-base font-bold text-foreground">Gold Ocean Lures</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      Ecommerce completo con Next.js 16, Server Actions, Prisma y pasarela de pagos Stripe.
                    </p>
                    <a
                      href="#projects"
                      onClick={(e) => handleScrollClick(e, "#projects")}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground pt-1 hover:underline underline-offset-4"
                    >
                      <span>Leer arquitectura completa</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-foreground/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-foreground/40 block mb-2">
                    Recursos
                  </span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs text-foreground/70 hover:text-foreground py-1 transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span>Repositorios en GitHub</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-foreground/30" />
                  </a>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    className="flex items-center justify-between text-xs text-foreground/70 hover:text-foreground py-1 transition-colors"
                  >
                    <span>Descargar Curriculum Vitae</span>
                    <ArrowRight className="w-3 h-3 text-foreground/30" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for Apple-style focus effect */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-xs z-40 transition-opacity duration-300 hidden md:block ${
          dropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDropdownOpen(false)}
      />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setMobileOpen(false);
                handleScrollClick(e, link.href);
              }}
              className="text-2xl font-bold text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
