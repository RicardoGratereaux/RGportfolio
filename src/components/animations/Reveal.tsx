"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

let globalScrollDirection = 1;

if (typeof window !== "undefined") {
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      globalScrollDirection = 1; // Scrolling down
    } else if (window.scrollY < lastScrollY) {
      globalScrollDirection = -1; // Scrolling up
    }
    lastScrollY = window.scrollY;
  }, { passive: true });
}

export function TextReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  const words = children.split(" ");

  return (
    <span className="overflow-hidden inline-flex flex-wrap gap-1 align-bottom">
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={{
            hidden: () => ({ y: globalScrollDirection === 1 ? "100%" : "-100%", opacity: 0 }),
            visible: { y: 0, opacity: 1 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: delay + i * 0.05,
          }}
          className={`inline-block ${className}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: () => ({ opacity: 0, y: globalScrollDirection === 1 ? 30 : -30, scale: 0.98 }),
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
