"use client";

import { useViewStore } from "@/store/useViewStore";
import { Code2, Briefcase } from "lucide-react";

interface ViewToggleProps {
  className?: string;
  mobile?: boolean;
}

export default function ViewToggle({ className, mobile }: ViewToggleProps) {
  const { viewMode, toggleViewMode } = useViewStore();
  const isDeveloper = viewMode === "developer";
  const labelClass = mobile ? "inline" : "hidden sm:inline";

  return (
    <div className={`flex items-center p-1 rounded-full bg-background/80 backdrop-blur-md border border-foreground/15 shadow-sm ${className ?? ""}`}>
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
        <span className={labelClass}>Dev</span>
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
        <span className={labelClass}>Recruiter</span>
      </button>
    </div>
  );
}
