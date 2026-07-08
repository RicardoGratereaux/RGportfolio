
const fs = require('fs');
const path = require('path');

const svgDir = 'src/components/icons/svg';
const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.tsx'));

let content = `import React from "react";\n\n`;

// Add exports for all icons
files.forEach(f => {
  const name = f.replace('.tsx', '');
  content += `export { ${name} } from './svg/${name}';\n`;
});

content += `\n// We need to import them to use in the map
`;

files.forEach(f => {
  const name = f.replace('.tsx', '');
  content += `import { ${name} } from './svg/${name}';\n`;
});

content += `
// Map from tech name to icon component  
export const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js 16": NextjsIcon,
  "Next.js": NextjsIcon,
  "React 19": ReactIcon,
  "React": ReactIcon,
  "TypeScript": TypeScriptIcon,
  "Tailwind CSS v4": TailwindIcon,
  "Tailwind CSS": TailwindIcon,
  "Tailwind v4": TailwindIcon,
  "Framer Motion": FramerMotionIcon,
  "Lenis": LenisIcon,
  "HTML5/CSS3": HTML5Icon,
  "HTML5": HTML5Icon,
  "CSS3": CSS3Icon,
  "JavaScript ES6": JavaScriptIcon,
  "JavaScript": JavaScriptIcon,
  "Node.js": NodejsIcon,
  "Next.js Server Actions": NextjsIcon,
  "API Routes": RestAPIIcon,
  "Prisma": PrismaIcon,
  "PostgreSQL": PostgreSQLIcon,
  "NextAuth": NextAuthIcon,
  "Zod": ZodIcon,
  "Bcrypt": BcryptIcon,
  "Stripe": StripeIcon,
  "Resend": ResendIcon,
  "Vercel Blob": VercelBlobIcon,
  "Vitest": VitestIcon,
  "ESLint": ESLintIcon,
  "Git / GitHub": GitIcon,
  "Git": GitIcon,
  "GitHub": GitHubIcon,
  "Vercel": VercelIcon,
  "VS Code": VSCodeIcon,
  "pnpm": PnpmIcon,
  "C#": CSharpIcon,
  ".NET": DotNetIcon,
  "Python": PythonIcon,
  "SQL Server": SQLServerIcon,
  "REST APIs": RestAPIIcon,
  "SEO": SEOIcon,
  "Bootstrap": BootstrapIcon,
  "Responsive Design": CSS3Icon,
};

// All hero tech icons for the floating animation
export const heroTechItems = [
  { name: "Next.js", Icon: NextjsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "Node.js", Icon: NodejsIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "PostgreSQL", Icon: PostgreSQLIcon },
  { name: "Stripe", Icon: StripeIcon },
  { name: "Framer Motion", Icon: FramerMotionIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "HTML5", Icon: HTML5Icon },
  { name: "CSS3", Icon: CSS3Icon },
  { name: "Git", Icon: GitIcon },
  { name: "Vercel", Icon: VercelIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "C#", Icon: CSharpIcon },
  { name: ".NET", Icon: DotNetIcon },
  { name: "Zod", Icon: ZodIcon },
  { name: "ESLint", Icon: ESLintIcon },
  { name: "VS Code", Icon: VSCodeIcon },
];
`;

fs.writeFileSync('src/components/icons/TechIcons.tsx', content);
console.log('TechIcons.tsx updated');
