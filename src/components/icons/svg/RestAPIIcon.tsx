import React from "react";

export function RestAPIIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 4H5V9h2zm7-4h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 4h-2V9h2zm5-2v6h2V9h1V7h-4v2z"/>
    </svg>
  );
}