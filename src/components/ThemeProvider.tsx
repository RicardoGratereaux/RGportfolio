"use client";

import { useEffect } from "react";
import { useViewStore } from "@/store/useViewStore";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { viewMode } = useViewStore();

  useEffect(() => {
    if (viewMode === "recruiter") {
      document.body.classList.add("theme-recruiter");
      document.body.classList.remove("theme-developer");
    } else {
      document.body.classList.add("theme-developer");
      document.body.classList.remove("theme-recruiter");
    }
  }, [viewMode]);

  return <>{children}</>;
}
