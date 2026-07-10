"use client";

import { FadeIn } from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import LiquidGlass from "@/components/ui/LiquidGlass";
import GlassButton from "@/components/ui/GlassButton";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const isDeveloper = true;
  return (
    <section id="contact" className="py-20 md:py-32 relative w-full">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 md:mb-20">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Contacto</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ponte en <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Contacto</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente o buscas un desarrollador Full Stack para tu equipo?
              Envíame un mensaje y hablemos.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <FadeIn delay={0.2} className="md:col-span-2 space-y-6">
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-4 group hover:border-primary/30 transition-all"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1 text-sm">Email</h4>
                <p className="text-zinc-400 text-sm group-hover:text-white transition-colors">
                  hello@example.com
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-primary transition-colors mt-1" />
            </motion.a>

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 text-sm">Ubicación</h4>
                <p className="text-zinc-400 text-sm">República Dominicana</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl">
              <p className="text-zinc-600 text-xs font-mono leading-relaxed">
                Respondo generalmente en menos de 24 horas. También puedes encontrarme en GitHub y LinkedIn.
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.3} className="md:col-span-3">
            <form className="glass-panel p-8 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-medium text-zinc-400 font-mono uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full bg-zinc-950/60 border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-medium text-zinc-400 font-mono uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full bg-zinc-950/60 border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-medium text-zinc-400 font-mono uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="w-full bg-zinc-950/60 border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Hola Ricardo, me gustaría hablar contigo sobre..."
                />
              </div>

              <GlassButton wrapperClassName="w-full" className="w-full">
                <span>Enviar Mensaje</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </GlassButton>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
