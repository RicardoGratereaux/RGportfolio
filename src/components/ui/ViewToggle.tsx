"use client";

import { useViewStore } from "@/store/useViewStore";
import { motion } from "framer-motion";
import { Code2, Briefcase } from "lucide-react";
import LiquidGlass from "@/components/ui/LiquidGlass";

export default function ViewToggle() {
  const { viewMode, toggleViewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  return (
    <div className="fixed top-24 right-6 md:right-10 z-50 flex items-center p-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10">
      <LiquidGlass className="rounded-full z-[-1]" distortionScale={120} />
      
      <motion.div
        className="absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-primary shadow-[0_0_20px_var(--primary-glow)] z-0"
        initial={false}
        animate={{ x: isDeveloper ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      <button
        onClick={() => !isDeveloper && toggleViewMode()}
        className={`relative flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-500 z-10 outline-none ${
          isDeveloper ? "text-white" : "text-zinc-400 hover:text-zinc-200"
        }`}
      >
        <Code2 className="w-4 h-4" />
      </button>

      <button
        onClick={() => isDeveloper && toggleViewMode()}
        className={`relative flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-500 z-10 outline-none ${
          !isDeveloper ? "text-white" : "text-zinc-400 hover:text-zinc-200"
        }`}
      >
        <Briefcase className="w-4 h-4" />
      </button>
    </div>
  );
}
