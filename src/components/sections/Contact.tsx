"use client";

import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative w-full border-t border-foreground/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono text-foreground/50 mb-2 uppercase tracking-widest">
          05. Contacto
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Ponte en Contacto
        </h2>
        <p className="text-foreground/60 max-w-xl leading-relaxed mb-12 text-base">
          ¿Tienes un proyecto en mente o buscas un desarrollador Full Stack para tu equipo? Envíame un mensaje.
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info Side */}
          <div className="md:col-span-2 space-y-6">
            <a
              href="mailto:ricardogratereauxbaez@gmail.com"
              className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] block hover:border-foreground/25 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-foreground/60" />
                <h4 className="text-sm font-bold text-foreground">Email</h4>
              </div>
              <p className="text-sm font-mono text-foreground/80">ricardogratereauxbaez@gmail.com</p>
            </a>

            <div className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-4 h-4 text-foreground/60" />
                <h4 className="text-sm font-bold text-foreground">Ubicación</h4>
              </div>
              <p className="text-sm text-foreground/80">República Dominicana, Santo Domingo</p>
            </div>
          </div>

          {/* Form Side */}
          <form
            className="md:col-span-3 p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-foreground/60 mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-background border border-foreground/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-foreground/60 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-background border border-foreground/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-foreground/60 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Hola Ricardo, me gustaría hablar sobre..."
                className="w-full bg-background border border-foreground/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <span>Enviar Mensaje</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
