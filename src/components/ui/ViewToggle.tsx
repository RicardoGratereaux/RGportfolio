"use client";

import { useViewStore } from "@/store/useViewStore";
import { Code2, Briefcase } from "lucide-react";

export default function ViewToggle() {
  const { viewMode, toggleViewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";

  return (
    <div className="fixed top-24 right-6 md:right-10 z-50 flex items-center p-1 rounded-full bg-background/80 backdrop-blur-md border border-foreground/15 shadow-sm">
      <button
        onClick={() => !isDeveloper && toggleViewMode()}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full transition-all ${
          isDeveloper
            ? "bg-foreground text-background font-medium"
            : "text-foreground/60 hover:text-foreground"
        }`}
        title="Modo Desarrollador"
      >
        <Code2 className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Dev</span>
      </button>

      <button
        onClick={() => isDeveloper && toggleViewMode()}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full transition-all ${
          !isDeveloper
            ? "bg-foreground text-background font-medium"
            : "text-foreground/60 hover:text-foreground"
        }`}
        title="Modo Reclutador"
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Recruiter</span>
      </button>
    </div>
  );
}
