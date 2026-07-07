"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { Menu, X } from "lucide-react";

import LiquidGlass from "@/components/ui/LiquidGlass";

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
              <LiquidGlass 
                className="border-x-0 border-t-0" 
                distortionScale={120} 
                edgeMask="linear-gradient(to bottom, transparent 15%, black 85%)" 
                noShadow 
                filterX="0" 
                filterWidth="100%" 
              />
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
            <MagneticButton>
              <a
                href="#contact"
                className="relative isolate overflow-hidden group px-6 py-2.5 text-sm font-medium text-white rounded-full hover:scale-105 transition-all flex items-center justify-center"
              >
                <LiquidGlass className="z-[-1] rounded-full" distortionScale={30} />
                Hablemos
              </a>
            </MagneticButton>
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
            <LiquidGlass className="z-[-1]" distortionScale={80} />
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


