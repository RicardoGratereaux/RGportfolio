"use client";

import React, { useId, useState, useEffect } from "react";

interface LiquidGlassProps {
  className?: string;
  blurAmount?: number;
  distortionScale?: number;
  edgeMask?: string;
  noShadow?: boolean;
  filterX?: string;
  filterY?: string;
  filterWidth?: string;
  filterHeight?: string;
}

export default function LiquidGlass({
  className = "",
  blurAmount = 12,
  distortionScale = 25,
  edgeMask,
  noShadow = false,
  filterX = "-20%",
  filterY = "-20%",
  filterWidth = "140%",
  filterHeight = "140%",
}: LiquidGlassProps) {
  const filterId = useId().replace(/:/g, "");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const glassBackdropStyle = {
    backdropFilter: `blur(${blurAmount}px) saturate(140%)`,
    WebkitBackdropFilter: `blur(${blurAmount}px) saturate(140%)`,
  };
  const noiseBlur = Math.max(1, blurAmount / 6);

  useEffect(() => {
    // Detect mobile/tablet/touch
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || (navigator && navigator.maxTouchPoints > 0));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Detect scroll to bypass filter on desktop for 60fps scrolling
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Standard high-performance CSS glass fallback (for mobile/touch or during scroll)
  if (isMobile || isScrolling) {
    return (
      <>
        <div
          className={`absolute inset-0 pointer-events-none ${className}`}
          style={{
            background: "var(--glass-liquid-bg, rgba(255, 255, 255, 0.02))",
            WebkitMaskImage: edgeMask,
            maskImage: edgeMask,
            ...glassBackdropStyle,
          }}
        />
        <div
          className={`absolute inset-0 pointer-events-none ${className}`}
          style={{
            border: "1px solid var(--glass-liquid-border, rgba(255, 255, 255, 0.15))",
            boxShadow: noShadow ? "none" : "var(--glass-liquid-shadow, inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.2))",
          }}
        />
      </>
    );
  }

  // Optimized Liquid Glass for Desktop when stationary
  return (
    <>
      {/* Base Layer: Clean, highly transparent center */}
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          background: "var(--glass-liquid-bg, rgba(255, 255, 255, 0.02))",
          ...glassBackdropStyle,
        }}
      />

      {/* Distortion Layer: Strong at edges, softly fading to center */}
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          WebkitMaskImage: edgeMask || "radial-gradient(ellipse at center, transparent 20%, black 90%)",
          maskImage: edgeMask || "radial-gradient(ellipse at center, transparent 20%, black 90%)",
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Border & Shadow Layer (Top level so it stays perfectly straight) */}
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          border: "1px solid var(--glass-liquid-border, rgba(255, 255, 255, 0.15))",
          boxShadow: noShadow ? "none" : "var(--glass-liquid-shadow, inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.2))",
        }}
      />

      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id={filterId} x={filterX} y={filterY} width={filterWidth} height={filterHeight} colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008"
            numOctaves="1"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation={noiseBlur.toString()} result="smoothNoise" />
          
          {/* Optimized Single Displacement Map (3x faster than chromatic aberration splits) */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="smoothNoise"
            scale={distortionScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  );
}
