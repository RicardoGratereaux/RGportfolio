"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFocused) return;
    if (!rectRef.current) {
      if (divRef.current) {
        rectRef.current = divRef.current.getBoundingClientRect();
      } else {
        return;
      }
    }
    setPosition({ x: e.clientX - rectRef.current.left, y: e.clientY - rectRef.current.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    if (divRef.current) {
      rectRef.current = divRef.current.getBoundingClientRect();
    }
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl border border-white/5 bg-zinc-900/40 p-6 overflow-hidden glass",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--primary-spotlight), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
