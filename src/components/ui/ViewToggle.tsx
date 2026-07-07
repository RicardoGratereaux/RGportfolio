"use client";

import { useViewStore } from "@/store/useViewStore";
import { motion } from "framer-motion";
import { Code2, Briefcase } from "lucide-react";

export default function ViewToggle() {
  const { viewMode, toggleViewMode } = useViewStore();

  const isDeveloper = viewMode === "developer";

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center p-1 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl">
      <button
        onClick={() => {
          if (!isDeveloper) toggleViewMode();
        }}
        className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
          isDeveloper ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        <Code2 className="w-4 h-4" />
        <span className="hidden sm:inline">Developer</span>
      </button>

      <button
        onClick={() => {
          if (isDeveloper) toggleViewMode();
        }}
        className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
          !isDeveloper ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        <Briefcase className="w-4 h-4" />
        <span className="hidden sm:inline">Recruiter</span>
      </button>

      <div className="absolute inset-y-1 inset-x-1 pointer-events-none flex" aria-hidden="true">
        <motion.div
          className="bg-primary/90 h-full rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)]"
          initial={false}
          animate={{
            x: isDeveloper ? "0%" : "100%",
            width: "50%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    </div>
  );
}
