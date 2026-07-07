"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useAnimationFrame } from "framer-motion";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn, TextReveal } from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon, heroTechItems } from "@/components/icons/TechIcons";
import GlassButton from "@/components/ui/GlassButton";
import { TypeAnimation } from 'react-type-animation';

function FloatingTechItem({
  tech,
  i,
  smoothX,
  smoothY,
  mousePixelX,
  mousePixelY,
}: {
  tech: any;
  i: number;
  smoothX: any;
  smoothY: any;
  mousePixelX: any;
  mousePixelY: any;
  total: number;
}) {
  const random = (seed: number) => {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
  };

  let startX = random(i) * 100;
  let startY = random(i + 100) * 100;
  
  // Allow them slightly closer to center
  if (startX > 35 && startX < 65 && startY > 35 && startY < 65) {
    startX = startX < 50 ? startX - 20 : startX + 20;
    startY = startY < 50 ? startY - 20 : startY + 20;
  }

  const duration = 10 + random(i + 200) * 15;
  const floatX = (random(i + 300) - 0.5) * 180;
  const floatY = (random(i + 400) - 0.5) * 180;
  const delay = random(i + 500) * 5;

  const parallaxFactor = 20 + random(i + 600) * 40;
  const parallaxX = useTransform(smoothX, (v: number) => v * parallaxFactor);
  const parallaxY = useTransform(smoothY, (v: number) => v * parallaxFactor);

  const size = 24 + random(i + 700) * 32;
  const opacity = 0.4 + random(i + 800) * 0.4; // Increased visibility

  const ref = useRef<HTMLDivElement>(null);
  const repulseX = useSpring(0, { damping: 25, stiffness: 90, mass: 1.2 });
  const repulseY = useSpring(0, { damping: 25, stiffness: 90, mass: 1.2 });

  useAnimationFrame(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mx = mousePixelX.get();
    const my = mousePixelY.get();

    const dx = centerX - mx;
    const dy = centerY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 600;

    if (distance < maxDistance && distance > 0) {
      const force = (maxDistance - distance) / maxDistance;
      repulseX.set((dx / distance) * force * 290); 
      repulseY.set((dy / distance) * force * 290);
    } else {
      repulseX.set(0);
      repulseY.set(0);
    }
  });

  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [opacity * 0.7, opacity, opacity * 0.7],
        x: [0, floatX, 0],
        y: [0, floatY, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <motion.div style={{ x: parallaxX, y: parallaxY }}>
        <motion.div
          ref={ref}
          style={{ width: size, height: size, x: repulseX, y: repulseY }}
          className="rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-center justify-center"
        >
          <tech.Icon className="w-1/2 h-1/2 opacity-70" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function FloatingTechOrbit() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mousePixelX = useMotionValue(-1000);
  const mousePixelY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(nx);
      mouseY.set(ny);
      
      mousePixelX.set(e.clientX);
      mousePixelY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    setMounted(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, mousePixelX, mousePixelY]);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  if (!mounted) return null;

  const extendedTechItems = [...heroTechItems, ...heroTechItems, ...heroTechItems];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {extendedTechItems.map((tech, i) => (
        <FloatingTechItem
          key={`${tech.name}-${i}`}
          tech={tech}
          i={i}
          smoothX={smoothX}
          smoothY={smoothY}
          mousePixelX={mousePixelX}
          mousePixelY={mousePixelY}
          total={extendedTechItems.length}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full">
      {/* Background Wrapper with Fade-Out at Bottom */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'
        }}
      >
        {/* Background Effects */}
        <motion.div style={{ y: y1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px]" />
        <motion.div style={{ y: y2 }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: y1 }} className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]" />

        {/* Dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle at center, var(--color-white) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating interactive background */}
        <FloatingTechOrbit />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">

        <h1 className="relative flex flex-col text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/20 blur-[80px] pointer-events-none -z-10 rounded-full" />
          <TextReveal delay={0.2} className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent pb-2 pr-4">
            Ricardo
          </TextReveal>
          <TextReveal delay={0.35} className={`pb-2 pr-4 bg-clip-text text-transparent ${isDeveloper ? 'bg-gradient-to-r from-primary via-violet-300 to-primary' : 'bg-gradient-to-r from-primary via-sky-300 to-primary'}`}>
            Gratereaux
          </TextReveal>
        </h1>

        {/* Role */}
        <FadeIn delay={0.5}>
          <div className="h-[28px] md:h-[28px] mb-6 flex items-center justify-center min-w-[300px]">
            <TypeAnimation
              sequence={[
                'Full Stack Software Developer',
                2500,
                'Especialista en React & Next.js',
                2000,
                'Arquitectura .NET & Node.js',
                2000,
                'Apasionado por la UI/UX',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-lg md:text-xl text-primary font-mono tracking-wider uppercase inline-block m-0 leading-none"
              repeat={Infinity}
            />
          </div>
        </FadeIn>

        {/* Description (adapts to view mode) */}
        <div className="min-h-[80px] mb-10 max-w-2xl mx-auto flex items-center justify-center">
          <FadeIn delay={0.6} key={viewMode}>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              {isDeveloper
                ? "Formado en C#/.NET y Clean Architecture, ahora construyo aplicaciones modernas y escalables con Next.js, TypeScript y Node.js."
                : "Desde 2021 construyendo software en el ITLA y en la industria. Experiencia en liderazgo de equipos y desarrollo Full Stack."}
            </p>
          </FadeIn>
        </div>

        {/* CTAs */}
        <FadeIn delay={0.7} className="flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton>
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_30px_var(--primary-glow)] hover:shadow-[0_0_50px_var(--primary-glow-hover)]"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          <GlassButton href="/cv.pdf" target="_blank">
            Descargar CV
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </GlassButton>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.9} className="flex items-center gap-8 mt-14">
          <MagneticButton>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
