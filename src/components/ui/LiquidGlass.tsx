"use client";

import React, { useId, useState, useEffect } from "react";

interface LiquidGlassProps {
  className?: string;
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
  distortionScale = 25,
  edgeMask,
  noShadow = false,
  filterX = "-20%",
  filterY = "-20%",
  filterWidth = "140%",
  filterHeight = "140%",
}: LiquidGlassProps) {
  const filterId = useId().replace(/:/g, "");

  return (
    <>
      {/* Base Layer: Clean, highly transparent center */}
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          backdropFilter: `blur(2px)`,
          WebkitBackdropFilter: `blur(2px)`,
          background: "var(--glass-liquid-bg, rgba(255, 255, 255, 0.02))",
        }}
      />

      {/* Distortion Layer: Strong at edges, softly fading to center */}
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          backdropFilter: `blur(8px) url(#${filterId})`,
          WebkitBackdropFilter: `blur(8px) url(#${filterId})`,
          WebkitMaskImage: edgeMask || "radial-gradient(ellipse at center, transparent 20%, black 90%)",
          maskImage: edgeMask || "radial-gradient(ellipse at center, transparent 20%, black 90%)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform, backdrop-filter, mask-image"
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
              numOctaves="2"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2.5" result="smoothNoise" />
            
            {/* Chromatic Aberration */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="smoothNoise"
              scale={distortionScale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="redMap"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="smoothNoise"
              scale={distortionScale * 0.8}
              xChannelSelector="R"
              yChannelSelector="G"
              result="greenMap"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="smoothNoise"
              scale={distortionScale * 0.6}
              xChannelSelector="R"
              yChannelSelector="G"
              result="blueMap"
            />

            <feColorMatrix in="redMap" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="R" />
            <feColorMatrix in="greenMap" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="G" />
            <feColorMatrix in="blueMap" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="B" />

            <feComposite in="R" in2="G" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="RG" />
            <feComposite in="RG" in2="B" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="finalRGB" />
          </filter>
      </svg>
    </>
  );
}
