import { memo, type ComponentType, type CSSProperties } from "react";
import {
  SiBootstrap,
  SiCss,
  SiEslint,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCloud,
  FaCss3,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaKey,
  FaLinkedin,
  FaLock,
  FaNodeJs,
  FaSearchengin,
} from "react-icons/fa6";
import { TbTimelineEventFilled } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { PiCertificateBold } from "react-icons/pi";
import { PythonLogoIcon } from "./Svgs/PythonLogoIcon";
import { SQLServerLogoIcon } from "./Svgs/SQLServerLogoIcon";
import { DotNetLogoIcon } from "./Svgs/DotNetLogoIcon";
import { CSharpLogoIcon } from "./Svgs/CSharpLogoIcon";
import { ZodLogoIcon } from "./Svgs/ZodLogoIcon";
import { RestApiBlueLogoIcon } from "./Svgs/RestApiBlueLogoIcon";
import { NextAuthLogoIcon } from "./Svgs/NextAuthLogoIcon";

export type TechIconComponent = ComponentType<{ className?: string; color?: string; style?: CSSProperties }>;

const createIcon = (Icon: TechIconComponent, brandColor?: string) =>
  memo(function TechIconComponentWrapper({
    className = "h-6 w-6",
    color,
    style,
  }: {
    className?: string;
    color?: string;
    style?: CSSProperties;
  }) {
    const resolvedColor = color ?? brandColor;

    return <Icon className={className} color={resolvedColor} style={resolvedColor ? { color: resolvedColor, ...style } : style} />;
  });

export const BcryptIcon = createIcon(FaLock, "#e11d48");
export const BootstrapIcon = createIcon(FaBootstrap, "#7952B3");
export const CSS3Icon = createIcon(FaCss3, "#1572B6");
export const CSharpIcon = createIcon(CSharpLogoIcon);
export const DotNetIcon = createIcon(DotNetLogoIcon);
export const ESLintIcon = createIcon(SiEslint, "#4B32C3");
export const FramerMotionIcon = createIcon(SiFramer, "#0055FF");
export const GitHubIcon = createIcon(FaGithub, "currentColor");
export const GitIcon = createIcon(FaGitAlt, "#F05032");
export const HTML5Icon = createIcon(FaHtml5, "#E34F26");
export const JavaScriptIcon = createIcon(SiJavascript, "#F7DF1E");
export const LenisIcon = createIcon(TbTimelineEventFilled, "#6366F1");
export const LinkedInIcon = createIcon(FaLinkedin, "#0A66C2");
export const NextAuthIcon = createIcon(NextAuthLogoIcon);
export const NextjsIcon = createIcon(SiNextdotjs, "currentColor");
export const NodejsIcon = createIcon(FaNodeJs, "#5FA04E");
export const PnpmIcon = createIcon(SiPnpm, "#F69220");
export const PostgreSQLIcon = createIcon(SiPostgresql, "#336791");
export const PrismaIcon = createIcon(SiPrisma, "#2D3748");
export const PythonIcon = createIcon(PythonLogoIcon);
export const ReactIcon = createIcon(SiReact, "#61DAFB");
import { ResendIconSvg } from "./Svgs/ResendIcon";

export const ResendIcon = memo(function ResendIcon({
  className = "h-6 w-6",
  color = "#F43F5E",
  style,
}: {
  className?: string;
  color?: string;
  style?: CSSProperties;
}) {
  return <ResendIconSvg className={className} fill={color} style={style} />;
});
export const RestAPIIcon = createIcon(RestApiBlueLogoIcon);
export const SEOIcon = createIcon(FaSearchengin, "#10B981");
export const SQLServerIcon = createIcon(SQLServerLogoIcon);
export const StripeIcon = createIcon(SiStripe, "#635BFF");
export const TailwindIcon = createIcon(SiTailwindcss, "#06B6D4");
export const TypeScriptIcon = createIcon(SiTypescript, "#3178C6");
export const VSCodeIcon = createIcon(VscVscode, "#007ACC");
export const VercelBlobIcon = createIcon(FaCloud, "currentColor");
export const VercelIcon = createIcon(SiVercel, "currentColor");
export const VitestIcon = createIcon(SiVitest, "#6E9F18");
export const ZodIcon = createIcon(ZodLogoIcon);

export const TechIcon = memo(function TechIcon({
  icon: Icon,
  className = "h-6 w-6",
  color,
}: {
  icon: TechIconComponent;
  className?: string;
  color?: string;
}) {
  return (
    <div className={["flex h-full w-full items-center justify-center shrink-0", className].filter(Boolean).join(" ")}>
      <Icon className="h-full w-full object-contain" color={color} style={color ? { color } : undefined} />
    </div>
  );
});








