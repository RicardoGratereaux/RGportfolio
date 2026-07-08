import React from "react";

export function PnpmIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F69220">
      <path d="M0 0h7.2v7.2H0zm8.4 0h7.2v7.2H8.4zm8.4 0h7.2v7.2h-7.2zM8.4 8.4h7.2v7.2H8.4zm8.4 0h7.2v7.2h-7.2zM0 16.8h7.2V24H0zm8.4 0h7.2V24H8.4zm8.4 0h7.2V24h-7.2z"/>
    </svg>
  );
}