"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";
import { Menu, X } from "lucide-react";

import dynamic from 'next/dynamic';

const LiquidGlass = dynamic(() => import('liquid-glass-react'), { ssr: false });

const navLinks = [
  { label: "Sobre Mí", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      >
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute inset-0 pointer-events-none" style={{
                WebkitMaskImage: "linear-gradient(to bottom, transparent 15%, black 85%)",
                maskImage: "linear-gradient(to bottom, transparent 15%, black 85%)"
              }}>
                <LiquidGlass 
                  className="bg-white/[0.02]" 
                  displacementScale={120} 
                  blurAmount={0.05}
                  cornerRadius={0}
                >
                  <div className="w-screen h-16" />
                </LiquidGlass>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <nav className="relative z-10 container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-tight text-white group">
            <span className="text-primary">R</span>
            <span className="group-hover:text-primary transition-colors">G</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-px bg-primary transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <GlassButton href="#contact" className="!px-5 !py-2 text-sm">
              Hablemos
            </GlassButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
              <LiquidGlass displacementScale={80} blurAmount={0.1} cornerRadius={0} className="bg-black/50">
                <div className="w-screen h-screen" />
              </LiquidGlass>
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


