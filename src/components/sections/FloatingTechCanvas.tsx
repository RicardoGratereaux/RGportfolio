"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { renderToString } from "react-dom/server";
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodejsIcon,
  PrismaIcon,
  PostgreSQLIcon,
  StripeIcon,
  FramerMotionIcon,
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  GitIcon,
  VercelIcon,
  PythonIcon,
  CSharpIcon,
  DotNetIcon,
  ZodIcon,
  ESLintIcon,
  VSCodeIcon,
  BcryptIcon,
  LenisIcon,
  NextAuthIcon,
  PnpmIcon,
  ResendIcon,
  RestAPIIcon,
  SEOIcon,
  SQLServerIcon,
  VercelBlobIcon,
  VitestIcon,
  type TechIconComponent,
} from "@/components/icons/TechIcons";

interface TechItemDef {
  name: string;
  Icon: TechIconComponent;
  color: string;
}

const TECH_ITEMS: TechItemDef[] = [
  { name: "Next.js", Icon: NextjsIcon, color: "#ffffff" },
  { name: "React", Icon: ReactIcon, color: "#61DAFB" },
  { name: "TypeScript", Icon: TypeScriptIcon, color: "#3178C6" },
  { name: "Tailwind", Icon: TailwindIcon, color: "#06B6D4" },
  { name: "Node.js", Icon: NodejsIcon, color: "#5FA04E" },
  { name: "Prisma", Icon: PrismaIcon, color: "#2D3748" },
  { name: "PostgreSQL", Icon: PostgreSQLIcon, color: "#336791" },
  { name: "Stripe", Icon: StripeIcon, color: "#635BFF" },
  { name: "Framer", Icon: FramerMotionIcon, color: "#0055FF" },
  { name: "JavaScript", Icon: JavaScriptIcon, color: "#F7DF1E" },
  { name: "HTML5", Icon: HTML5Icon, color: "#E34F26" },
  { name: "CSS3", Icon: CSS3Icon, color: "#1572B6" },
  { name: "Git", Icon: GitIcon, color: "#F05032" },
  { name: "Vercel", Icon: VercelIcon, color: "#ffffff" },
  { name: "Python", Icon: PythonIcon, color: "#3776AB" },
  { name: "C#", Icon: CSharpIcon, color: "#239120" },
  { name: ".NET", Icon: DotNetIcon, color: "#512BD4" },
  { name: "Zod", Icon: ZodIcon, color: "#3E67B1" },
  { name: "ESLint", Icon: ESLintIcon, color: "#4B32C3" },
  { name: "VS Code", Icon: VSCodeIcon, color: "#007ACC" },
  { name: "Bcrypt", Icon: BcryptIcon, color: "#e11d48" },
  { name: "Lenis", Icon: LenisIcon, color: "#6366F1" },
  { name: "NextAuth", Icon: NextAuthIcon, color: "#F59E0B" },
  { name: "Pnpm", Icon: PnpmIcon, color: "#F69220" },
  { name: "Resend", Icon: ResendIcon, color: "#F43F5E" },
  { name: "Rest API", Icon: RestAPIIcon, color: "#6366F1" },
  { name: "SEO", Icon: SEOIcon, color: "#10B981" },
  { name: "SQL Server", Icon: SQLServerIcon, color: "#CC2927" },
  { name: "Vercel Blob", Icon: VercelBlobIcon, color: "#0070F3" },
  { name: "Vitest", Icon: VitestIcon, color: "#6E9F18" },
];

function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

// ─── Generate icon texture using actual SVG component ─────────────────
function createSvgIconTexture(
  Icon: TechIconComponent,
  brandColor: string,
  size: number = 256
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 8;

  // Render SVG background card base
  const drawCardBase = () => {
    ctx.clearRect(0, 0, size, size);

    const radius = size * 0.22;
    const padding = size * 0.05;
    const w = size - padding * 2;
    const h = size - padding * 2;

    ctx.save();
    ctx.translate(padding, padding);

    // Rounded card path
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, radius);
    ctx.closePath();

    // Dark glass fill
    ctx.fillStyle = "rgba(18, 18, 24, 0.65)";
    ctx.fill();

    // Border stroke
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = size * 0.015;
    ctx.stroke();

    // Inner glow
    const gradient = ctx.createRadialGradient(
      w / 2, h / 2, 0,
      w / 2, h / 2, w * 0.55
    );
    const glowColor = brandColor === "#ffffff" ? "rgba(255,255,255,0.2)" : brandColor + "30";
    gradient.addColorStop(0, glowColor);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, radius);
    ctx.fill();

    ctx.restore();
  };

  drawCardBase();

  // Render React Icon to SVG string
  try {
    const rawSvgStr = renderToString(<Icon color={brandColor} className="w-full h-full" />);
    // Ensure standard SVG attributes
    let svgStr = rawSvgStr;
    if (!svgStr.includes("xmlns=")) {
      svgStr = svgStr.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!svgStr.includes("width=")) {
      svgStr = svgStr.replace("<svg", `svg width="128" height="128"`);
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);

    img.onload = () => {
      drawCardBase();
      const iconSize = size * 0.52;
      const offset = (size - iconSize) / 2;
      ctx.drawImage(img, offset, offset, iconSize, iconSize);
      texture.needsUpdate = true;
    };
  } catch (err) {
    console.error("Error rendering icon texture:", err);
  }

  return texture;
}

interface IconItemData {
  index: number;
  name: string;
  brandColor: string;
  baseX: number;
  baseY: number;
  baseZ: number;
  floatAmplitudeX: number;
  floatAmplitudeY: number;
  floatFreqX: number;
  floatFreqY: number;
  floatPhase: number;
  parallaxFactor: number;
  scale: number;
  opacity: number;
}

function FloatingIcon({
  data,
  mouseRef,
  texture,
}: {
  data: IconItemData;
  mouseRef: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
  texture: THREE.CanvasTexture;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const currentPos = useRef(new THREE.Vector3(data.baseX, data.baseY, data.baseZ));
  const velocity = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Floating motion
    const floatX = Math.sin(t * data.floatFreqX + data.floatPhase) * data.floatAmplitudeX;
    const floatY = Math.cos(t * data.floatFreqY + data.floatPhase * 1.3) * data.floatAmplitudeY;
    const floatZ = Math.sin(t * 0.4 + data.floatPhase * 2) * 0.2;

    let targetX = data.baseX + floatX;
    let targetY = data.baseY + floatY;
    let targetZ = data.baseZ + floatZ;

    // Rich mouse parallax based on depth
    if (mouseRef.current.active) {
      const depthMultiplier = 1.2 + (data.baseZ + 2) * 0.35;
      targetX += mouseRef.current.x * data.parallaxFactor * depthMultiplier;
      targetY += mouseRef.current.y * data.parallaxFactor * depthMultiplier;

      // Cursor repulsion in exact 3D world space
      const mouseWorldX = mouseRef.current.x * (viewport.width / 2);
      const mouseWorldY = mouseRef.current.y * (viewport.height / 2);

      const dx = targetX - mouseWorldX;
      const dy = targetY - mouseWorldY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulseRadius = 2.8;

      if (dist < repulseRadius && dist > 0.01) {
        const force = Math.pow((repulseRadius - dist) / repulseRadius, 1.4) * 2.2;
        targetX += (dx / dist) * force;
        targetY += (dy / dist) * force;
        targetZ += force * 0.4;
      }
    }

    // Smooth spring physics dampening
    const stiffness = 4.5;
    const damping = 4.8;
    const dt = Math.min(state.clock.getDelta(), 0.05);

    const spring = currentPos.current;
    velocity.current.x += (targetX - spring.x) * stiffness * dt;
    velocity.current.y += (targetY - spring.y) * stiffness * dt;
    velocity.current.z += (targetZ - spring.z) * stiffness * dt;
    velocity.current.multiplyScalar(Math.exp(-damping * dt));
    spring.add(velocity.current);

    meshRef.current.position.set(spring.x, spring.y, spring.z);

    // Follow rotation
    meshRef.current.rotation.z = velocity.current.x * 0.18;
    meshRef.current.rotation.x = -velocity.current.y * 0.12;

    // Scale pulse
    const scalePulse = 1 + Math.sin(t * 1.2 + data.floatPhase) * 0.04;
    const s = data.scale * scalePulse;
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={meshRef} position={[data.baseX, data.baseY, data.baseZ]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={data.opacity}
        side={THREE.DoubleSide}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}

function FloatingScene({ itemCount }: { itemCount: number }) {
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const smoothMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      smoothMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      smoothMouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useFrame(() => {
    if (mouseRef.current.active) {
      mouseRef.current.x += (smoothMouse.current.x - mouseRef.current.x) * 0.12;
      mouseRef.current.y += (smoothMouse.current.y - mouseRef.current.y) * 0.12;
    } else {
      mouseRef.current.x *= 0.92;
      mouseRef.current.y *= 0.92;
    }
  });

  const { items, textures } = useMemo(() => {
    const aspectRatio = typeof window !== "undefined" ? window.innerWidth / window.innerHeight : 16 / 9;
    const spreadX = 8 * Math.min(aspectRatio, 2);
    const spreadY = 4.8;

    const items: IconItemData[] = [];
    const textures: THREE.CanvasTexture[] = [];

    const count = Math.min(itemCount, TECH_ITEMS.length);

    for (let i = 0; i < count; i++) {
      const itemDef = TECH_ITEMS[i];

      let bx = (seededRandom(i * 9) - 0.5) * spreadX * 2;
      let by = (seededRandom(i * 9 + 100) - 0.5) * spreadY * 2;

      // Keep center clear for hero text
      const centerDist = Math.sqrt(bx * bx + by * by);
      if (centerDist < 2.8) {
        const angle = Math.atan2(by, bx);
        bx = Math.cos(angle) * (2.8 + seededRandom(i * 9 + 200) * 2.2);
        by = Math.sin(angle) * (2.8 + seededRandom(i * 9 + 300) * 1.6);
      }

      const bz = (seededRandom(i * 9 + 400) - 0.5) * 3.5;
      const depthScale = 0.65 + (bz + 1.75) / 3.5 * 0.45;
      const baseScale = (0.75 + seededRandom(i * 9 + 500) * 0.35) * depthScale;
      const depthOpacity = 0.5 + (bz + 1.75) / 3.5 * 0.45;

      items.push({
        index: i,
        name: itemDef.name,
        brandColor: itemDef.color,
        baseX: bx,
        baseY: by,
        baseZ: bz,
        floatAmplitudeX: 0.25 + seededRandom(i * 9 + 600) * 0.65,
        floatAmplitudeY: 0.25 + seededRandom(i * 9 + 700) * 0.55,
        floatFreqX: 0.2 + seededRandom(i * 9 + 800) * 0.35,
        floatFreqY: 0.18 + seededRandom(i * 9 + 900) * 0.3,
        floatPhase: seededRandom(i * 9 + 1000) * Math.PI * 2,
        parallaxFactor: 1.2 + seededRandom(i * 9 + 1100) * 1.5,
        scale: baseScale,
        opacity: depthOpacity,
      });

      textures.push(createSvgIconTexture(itemDef.Icon, itemDef.color));
    }

    return { items, textures };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCount]);

  useEffect(() => {
    return () => {
      textures.forEach((t) => t.dispose());
    };
  }, [textures]);

  return (
    <>
      {items.map((item, i) => (
        <FloatingIcon
          key={`tech-icon-${i}`}
          data={item}
          mouseRef={mouseRef}
          texture={textures[i]}
        />
      ))}
    </>
  );
}

export default function FloatingTechCanvas() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [itemCount, setItemCount] = useState(20);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const w = window.innerWidth;
      setIsDesktop(w >= 1024);
      setItemCount(w >= 1536 ? 26 : w >= 1280 ? 20 : w >= 1024 ? 14 : 8);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted || !isDesktop) return null;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ contain: "strict" }}
    >
      <div className="w-full h-full">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
          resize={{ scroll: false }}
        >
          <FloatingScene itemCount={itemCount} />
        </Canvas>
      </div>
    </div>
  );
}
