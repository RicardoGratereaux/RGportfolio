"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useMotionValueEvent, animate } from "framer-motion";

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
import LiquidGlass from "@/components/ui/LiquidGlass";

const HERO_ROLES = [
  'Full Stack Software Developer',
  'Especialista en React & Next.js',
  'Arquitectura .NET & Node.js',
  'Apasionado por la UI/UX',
];

function TypewriterScroller() {
  const [index, setIndex] = useState(0);
  const textIndex = useMotionValue(0);
  const textRef = useRef<HTMLSpanElement>(null);
  
  const displayText = useTransform(textIndex, (latest) => HERO_ROLES[index].slice(0, Math.round(latest)));

  // Safely update the DOM without passing objects as React children
  useMotionValueEvent(displayText, "change", (latest) => {
    if (textRef.current) {
      textRef.current.textContent = latest;
    }
  });

  useEffect(() => {
    // Reset to 0 when index changes
    textIndex.set(0);
    
    // Type out forward
    const controls = animate(textIndex, HERO_ROLES[index].length, {
      type: "tween",
      duration: HERO_ROLES[index].length * 0.05, // 50ms per char
      ease: "linear",
      onComplete: () => {
        // Wait 2 seconds, then delete fast
        setTimeout(() => {
          animate(textIndex, 0, {
            type: "tween",
            duration: HERO_ROLES[index].length * 0.02, // 20ms per char deletion
            ease: "linear",
            onComplete: () => {
              setIndex((prev) => (prev + 1) % HERO_ROLES.length);
            }
          });
        }, 2000); 
      }
    });

    return () => controls.stop();
  }, [index, textIndex]);

  return (
    <div 
      className="relative h-[28px] flex items-center justify-center min-w-[300px]"
      style={{ contain: "content" }}
    >
      <p className="text-lg md:text-xl text-primary font-mono tracking-wider uppercase inline-block m-0 leading-none">
        <span ref={textRef}></span>
        <span className="animate-pulse ml-[2px] font-bold">|</span>
      </p>
    </div>
  );
}

interface FloatingTechItemProps {
  tech: any;
  i: number;
  itemsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  size: number;
  opacity: number;
  startX: number;
  startY: number;
  floatX: number;
  floatY: number;
  duration: number;
  delay: number;
}

function FloatingTechItem({
  tech,
  i,
  itemsRef,
  size,
  opacity,
  startX,
  startY,
  floatX,
  floatY,
  duration,
  delay,
}: FloatingTechItemProps) {
  return (
    <div
      className="absolute flex items-center justify-center pointer-events-none z-0"
      style={{ left: `${startX}%`, top: `${startY}%` }}
    >
      <div 
        style={{
          '--float-x': `${floatX}px`,
          '--float-y': `${floatY}px`,
          '--op-min': opacity * 0.7,
          '--op-max': opacity,
          animation: `ambient-float ${duration}s ease-in-out ${delay}s infinite`,
          willChange: 'transform, opacity'
        } as any}
      >
        <div 
          ref={el => { itemsRef.current[i] = el; }}
          className="transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: 'translate3d(calc(var(--parallax-x, 0px) + var(--repulse-x, 0px)), calc(var(--parallax-y, 0px) + var(--repulse-y, 0px)), 0)',
            willChange: 'transform'
          }}
        >
          <div
            className="tech-card rounded-2xl bg-foreground/[0.03] border border-foreground/[0.08] flex items-center justify-center overflow-hidden pointer-events-none shadow-[0_0_15px_var(--primary-spotlight)]"
            style={{ width: size, height: size }}
          >
            <tech.Icon className="w-3/5 h-3/5 opacity-80 drop-shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingTechOrbit() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Pre-calculate deterministic random layouts on mount to share with loop and items
  const itemsData = useMemo(() => {
    return heroTechItems.map((tech, i) => {
      const random = (seed: number) => {
        const x = Math.sin(seed + 1) * 10000;
        return x - Math.floor(x);
      };

      let startX = 5 + random(i) * 90;
      let startY = 5 + random(i + 100) * 90;
      
      if (startX > 35 && startX < 65 && startY > 35 && startY < 65) {
        startX = startX < 50 ? startX - 25 : startX + 25;
        startY = startY < 50 ? startY - 25 : startY + 25;
      }

      return {
        tech,
        startX,
        startY,
        floatX: (random(i + 300) - 0.5) * 600,
        floatY: (random(i + 400) - 0.5) * 600,
        parallaxFactor: 20 + random(i + 600) * 40,
        size: 36 + random(i + 700) * 28,
        opacity: 0.6 + random(i + 800) * 0.4,
        duration: 15 + random(i + 200) * 25,
        delay: random(i + 500) * 5,
      };
    });
  }, []);

  // Determine current active subset size depending on screen size to reduce compositor load
  const activeItemsCount = windowWidth >= 1536 
    ? 24 
    : windowWidth >= 1280 
      ? 15 
      : 8;

  const activeCountRef = useRef(activeItemsCount);
  activeCountRef.current = activeItemsCount;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setMounted(true);

    let rafId: number | null = null;
    let pendingEvent: MouseEvent | null = null;

    // Single central RAF loop to update element CSS variables directly, bypassing React renders
    const updateMouse = () => {
      if (!pendingEvent) return;
      const e = pendingEvent;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nx = (e.clientX / w) * 2 - 1;
      const ny = (e.clientY / h) * 2 - 1;

      const time = Date.now() / 1000;

      // Only iterate over the active sliced subset to match DOM render count
      for (let i = 0; i < activeCountRef.current; i++) {
        const item = itemsData[i];
        if (!item) continue;
        const el = itemsRef.current[i];
        if (!el) continue;

        // Parallax offset
        const px = nx * item.parallaxFactor;
        const py = ny * item.parallaxFactor;

        // Mathematical model of the CSS ambient floating offset to determine precise repulsion centers
        const cycle = (time + item.delay) % item.duration;
        const progress = cycle / item.duration;
        const fx = item.floatX * Math.sin(progress * Math.PI);
        const fy = item.floatY * Math.sin(progress * Math.PI);

        const centerX = (item.startX / 100) * w + px + fx;
        const centerY = (item.startY / 100) * h + py + fy;

        const dx = centerX - e.clientX;
        const dy = centerY - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const maxDistance = 350;
        let rx = 0;
        let ry = 0;

        const card = el.firstElementChild as HTMLElement;

        if (distance < maxDistance && distance > 0) {
          const force = Math.pow((maxDistance - distance) / maxDistance, 1.2);
          rx = (dx / distance) * force * 350;
          ry = (dy / distance) * force * 350;
          
          // Dynamically enable backdrop-blur only when close to cursor
          if (card) card.classList.add('near-mouse');
        } else {
          if (card) card.classList.remove('near-mouse');
        }

        // Direct style writes avoid Framer Motion listener overhead
        el.style.setProperty('--parallax-x', `${px}px`);
        el.style.setProperty('--parallax-y', `${py}px`);
        el.style.setProperty('--repulse-x', `${rx}px`);
        el.style.setProperty('--repulse-y', `${ry}px`);
      }

      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      pendingEvent = e;
      if (rafId === null) {
        rafId = requestAnimationFrame(updateMouse);
      }
    };

    // Clean up glass effects when mouse leaves page completely
    const handleMouseLeave = () => {
      for (let i = 0; i < activeCountRef.current; i++) {
        const el = itemsRef.current[i];
        if (!el) continue;
        el.style.setProperty('--repulse-x', '0px');
        el.style.setProperty('--repulse-y', '0px');
        const card = el.firstElementChild as HTMLElement;
        if (card) card.classList.remove('near-mouse');
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [itemsData]);

  if (!mounted || !isDesktop) return null;

  const itemsToRender = itemsData.slice(0, activeItemsCount);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="pointer-events-auto w-full h-full">
        {itemsToRender.map((item, i) => (
          <FloatingTechItem
            key={`${item.tech.name}-${i}`}
            tech={item.tech}
            i={i}
            itemsRef={itemsRef}
            size={item.size}
            opacity={item.opacity}
            startX={item.startX}
            startY={item.startY}
            floatX={item.floatX}
            floatY={item.floatY}
            duration={item.duration}
            delay={item.delay}
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
      {/* Background Wrapper (Removed GPU-melting mask-image) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Fade overlays to replace mask-image without killing mobile GPU */}
        <div className="absolute top-0 left-0 right-0 h-[15%] bg-gradient-to-b from-background to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-background to-transparent z-10" />
        {/* Ambient Glowing Blobs - Animated with CSS for zero CPU overhead */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-float-blob-1" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-float-blob-2" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-float-blob-3" />

        {/* Diagonal Tech Beams */}
        <div className="absolute top-0 left-[12%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-60" />
        <div className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-40" />
        <div className="absolute left-0 top-[35%] w-full h-[1px] bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-40" />

        {/* Floating Glassmorphic Rings & Decorative Orbs */}
        {mounted && isDesktop ? (
          <>
            <div className="absolute top-[18%] right-[15%] w-72 h-72 animate-float-blob-1">
              <LiquidGlass
                distortionScale={60}
                className="bg-white/[0.02] border border-white/5 rounded-full"
              />
            </div>
            <div className="absolute bottom-[22%] left-[10%] w-96 h-96 animate-float-blob-2">
              <LiquidGlass
                distortionScale={70}
                className="bg-white/[0.02] border border-white/5 rounded-full"
              />
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-[18%] right-[15%] w-72 h-72 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[2px] animate-float-blob-1" />
            <div className="absolute bottom-[22%] left-[10%] w-96 h-96 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[2px] animate-float-blob-2" />
          </>
        )}
        
        {/* Spinning technical HUD circles (Optimized with SVG to prevent Chromium border-dashed rasterization bug) */}
        <svg className="absolute top-[25%] left-[8%] w-80 h-80 animate-spin" style={{ animationDuration: '90s', willChange: 'transform' }} viewBox="0 0 320 320">
          <circle cx="160" cy="160" r="159" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-primary/30" />
        </svg>
        <svg className="absolute bottom-[15%] right-[8%] w-[450px] h-[450px] animate-spin" style={{ animationDuration: '120s', animationDirection: 'reverse', willChange: 'transform' }} viewBox="0 0 450 450">
          <circle cx="225" cy="225" r="224" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="text-primary/20" />
        </svg>

        {/* Dots pattern (Optimized with SVG Pattern for native GPU tiling and 0 shader overhead) */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" 
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="var(--color-white)" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>

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
        <FadeIn delay={0.5} className="mb-6">
          <TypewriterScroller />
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
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#projects");
                if (target) {
                  if ((window as any).portfolioLenis) {
                    (window as any).portfolioLenis.scrollTo(target, { offset: -40 });
                  } else {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
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
