"use client";

import { motion } from "framer-motion";

export function TextReveal({
  children,
  delay = 0,
}: {
  children: string;
  delay?: number;
}) {
  const words = children.split(" ");

  return (
    <div className="overflow-hidden flex flex-wrap gap-1">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: delay + i * 0.05,
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
