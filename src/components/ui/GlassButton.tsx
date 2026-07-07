import React, { ReactNode } from "react";
import MagneticButton from "./MagneticButton";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  target?: string;
  className?: string;
  wrapperClassName?: string;
  distortionScale?: number;
}

export default function GlassButton({
  children,
  href,
  target,
  className = "",
  wrapperClassName = "",
  distortionScale = 90,
  ...props
}: GlassButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const baseClasses = `relative isolate overflow-hidden group flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-medium hover:scale-[1.02] transition-all cursor-pointer ${className}`;

  const innerContent = (
    <>
      <div className="absolute inset-0 z-[-1] rounded-[inherit] bg-white/5 backdrop-blur-[12px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300" />
      {children}
    </>
  );

  return (
    <MagneticButton className={wrapperClassName}>
      {href ? (
        <a href={href} target={target} className={baseClasses} {...(props as any)}>
          {innerContent}
        </a>
      ) : (
        <button className={baseClasses} {...(props as any)}>
          {innerContent}
        </button>
      )}
    </MagneticButton>
  );
}
