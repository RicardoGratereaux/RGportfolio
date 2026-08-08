import type { CSSProperties } from "react";

export function NextAuthLogoIcon({
  className = "h-6 w-6",
  style,
  color,
}: {
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  return (
    <img
      className={className}
      style={style}
      src="/icons/next-auth-icon.png"
      alt="NextAuth logo"
    />
  );
}
