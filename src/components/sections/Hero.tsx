"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useViewStore } from "@/store/useViewStore";
import { FadeIn, TextReveal } from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon, NextjsIcon, ReactIcon, TypeScriptIcon, TailwindIcon, NodejsIcon, PrismaIcon, PostgreSQLIcon, StripeIcon, FramerMotionIcon, JavaScriptIcon, HTML5Icon, CSS3Icon, GitIcon, VercelIcon, PythonIcon, CSharpIcon, DotNetIcon, ZodIcon, ESLintIcon, VSCodeIcon, BcryptIcon, LenisIcon, NextAuthIcon, PnpmIcon, ResendIcon, RestAPIIcon, SEOIcon, SQLServerIcon, VercelBlobIcon, VitestIcon } from "@/components/icons/TechIcons";

const heroTechItems = [
  { name: "Next.js", Icon: NextjsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "Node.js", Icon: NodejsIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "PostgreSQL", Icon: PostgreSQLIcon },
  { name: "Stripe", Icon: StripeIcon },
  { name: "Framer Motion", Icon: FramerMotionIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "HTML5", Icon: HTML5Icon },
  { name: "CSS3", Icon: CSS3Icon },
  { name: "Git", Icon: GitIcon },
  { name: "Vercel", Icon: VercelIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "C#", Icon: CSharpIcon },
  { name: ".NET", Icon: DotNetIcon },
  { name: "Zod", Icon: ZodIcon },
  { name: "ESLint", Icon: ESLintIcon },
  { name: "VS Code", Icon: VSCodeIcon },
  { name: "Bcrypt", Icon: BcryptIcon },
  { name: "Lenis", Icon: LenisIcon },
  { name: "NextAuth", Icon: NextAuthIcon },
  { name: "Pnpm", Icon: PnpmIcon },
  { name: "Resend", Icon: ResendIcon },
  { name: "Rest API", Icon: RestAPIIcon },
  { name: "SEO", Icon: SEOIcon },
  { name: "SQL Server", Icon: SQLServerIcon },
  { name: "Vercel Blob", Icon: VercelBlobIcon },
  { name: "Vitest", Icon: VitestIcon },
];
import GlassButton from "@/components/ui/GlassButton";
import { TypeAnimation } from 'react-type-animation';
import LiquidGlass from "@/components/ui/LiquidGlass";

function FloatingTechItem({
  tech,
  i,
  smoothX,
  smoothY,
  mousePixelX,
  mousePixelY,
  total,
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

  // Generate between 5% and 95% for a wide, even dispersion across the screen
  let startX = 5 + random(i) * 90;
  let startY = 5 + random(i + 100) * 90;
  
  // Wider exclusion zone for the center text to keep the main title clean
  if (startX > 35 && startX < 65 && startY > 35 && startY < 65) {
    startX = startX < 50 ? startX - 25 : startX + 25;
    startY = startY < 50 ? startY - 25 : startY + 25;
  }

  const duration = 15 + random(i + 200) * 25; // Slightly varied duration for larger movement
  const floatX = (random(i + 300) - 0.5) * 600; // Massively increased ambient travel range
  const floatY = (random(i + 400) - 0.5) * 600;
  const delay = random(i + 500) * 5;

  const parallaxFactor = 20 + random(i + 600) * 40;
  const parallaxX = useTransform(smoothX, (v: number) => v * parallaxFactor);
  const parallaxY = useTransform(smoothY, (v: number) => v * parallaxFactor);

  const size = 36 + random(i + 700) * 28;
  const opacity = 0.6 + random(i + 800) * 0.4;

  const baseRef = useRef<HTMLDivElement>(null);
  
  // Fluid, organic springs for a smooth repulsion (higher mass/damping, lower stiffness)
  const repulseX = useSpring(0, { damping: 35, stiffness: 80, mass: 1.2 });
  const repulseY = useSpring(0, { damping: 35, stiffness: 80, mass: 1.2 });

  useEffect(() => {
    const handleMouseChange = () => {
      if (!baseRef.current) return;
      
      // Calculate true baseline position (including float/parallax, excluding repulsion)
      const rect = baseRef.current.getBoundingClientRect();
      const mx = mousePixelX.get();
      const my = mousePixelY.get();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = centerX - mx;
      const dy = centerY - my;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const maxDistance = 350; // Increased radius to start moving earlier

      if (distance < maxDistance && distance > 0) {
        // Smooth easing curve
        const force = Math.pow((maxDistance - distance) / maxDistance, 1.2);
        const rx = (dx / distance) * force * 350; // Pushes further away
        const ry = (dy / distance) * force * 350;
        repulseX.set(rx);
        repulseY.set(ry);
      } else {
        if (repulseX.get() !== 0) repulseX.set(0);
        if (repulseY.get() !== 0) repulseY.set(0);
      }
    };

    const unsubX = mousePixelX.on("change", handleMouseChange);
    const unsubY = mousePixelY.on("change", handleMouseChange);

    return () => {
      unsubX();
      unsubY();
    };
  }, [mousePixelX, mousePixelY, repulseX, repulseY]);

  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none z-0"
      style={{ left: `${startX}%`, top: `${startY}%` }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [opacity * 0.7, opacity, opacity * 0.7],
        x: [0, floatX, 0],
        y: [0, floatY, 0],
      }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="relative flex items-center justify-center">
        {/* Invisible tracking element for accurate baseline coordinates */}
        <div ref={baseRef} className="absolute pointer-events-none" style={{ width: size, height: size }} />
        
        <motion.div
          className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.08] backdrop-blur-xl flex items-center justify-center overflow-hidden pointer-events-none shadow-[0_0_15px_var(--primary-spotlight)]"
          style={{ width: size, height: size, x: repulseX, y: repulseY }}
        >
          <tech.Icon className="w-3/5 h-3/5 opacity-80 drop-shadow-md" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function FloatingTechOrbit() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mousePixelX = useMotionValue(-1000);
  const mousePixelY = useMotionValue(-1000);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(nx);
      mouseY.set(ny);
      
      mousePixelX.set(e.clientX);
      mousePixelY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, mousePixelX, mousePixelY]);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  if (!mounted || !isDesktop) return null;

  const itemsToRender = heroTechItems;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="pointer-events-auto w-full h-full">
        {itemsToRender.map((tech, i) => (
          <FloatingTechItem
            key={`${tech.name}-${i}`}
            tech={tech}
            i={i}
            smoothX={smoothX}
            smoothY={smoothY}
            mousePixelX={mousePixelX}
            mousePixelY={mousePixelY}
            total={itemsToRender.length}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { viewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-clip w-full">
      {/* Background Wrapper with Fade-Out at Top and a very long Fade-Out at Bottom */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 50%, transparent 100%)'
        }}
      >
        {/* Ambient Glowing Blobs - Animated with CSS for zero CPU overhead */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-float-blob-1" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-float-blob-2" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-float-blob-3" style={{ transform: 'translateZ(0)' }} />

        {/* Diagonal Tech Beams */}
        <div className="absolute top-0 left-[12%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-60" />
        <div className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-40" />
        <div className="absolute left-0 top-[35%] w-full h-[1px] bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-40" />

        {/* Floating Glassmorphic Rings & Decorative Orbs */}
        {mounted && isDesktop ? (
          <>
            <div className="absolute top-[18%] right-[15%] w-72 h-72 animate-float-blob-1" style={{ transform: 'translateZ(0)' }}>
              <LiquidGlass
                distortionScale={60}
                className="bg-white/[0.02] border border-white/5 rounded-full"
              />
            </div>
            <div className="absolute bottom-[22%] left-[10%] w-96 h-96 animate-float-blob-2" style={{ transform: 'translateZ(0)' }}>
              <LiquidGlass
                distortionScale={70}
                className="bg-white/[0.02] border border-white/5 rounded-full"
              />
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-[18%] right-[15%] w-72 h-72 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[2px] animate-float-blob-1" style={{ transform: 'translateZ(0)' }} />
            <div className="absolute bottom-[22%] left-[10%] w-96 h-96 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[2px] animate-float-blob-2" style={{ transform: 'translateZ(0)' }} />
          </>
        )}
        
        {/* Spinning technical HUD circles */}
        <div className="absolute top-[25%] left-[8%] w-80 h-80 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '90s' }} />
        <div className="absolute bottom-[15%] right-[8%] w-[450px] h-[450px] rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: '120s', animationDirection: 'reverse' }} />

        {/* Dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.12]"
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
          <TextReveal delay={0.35} className="pb-2 pr-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/50 to-primary">
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
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_30px_var(--primary-glow)] hover:shadow-[0_0_50px_var(--primary-glow-hover)]"
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
