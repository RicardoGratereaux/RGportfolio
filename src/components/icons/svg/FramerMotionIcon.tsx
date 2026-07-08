import React from "react";

export function FramerMotionIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 21" fill="currentColor">
      <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"/>
    </svg>
  );
}