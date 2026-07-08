import React from "react";

export function HTML5Icon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.757.527-5.783H5.879l.142 1.508h8.418l-.197 2.067H6.164l.22 2.576h7.405l-.266 2.964-1.522.405-1.576-.432-.088-1.084H8.802l.216 2.437 3.017.834 2.982-.836.469-4.736H8.531z"/>
    </svg>
  );
}