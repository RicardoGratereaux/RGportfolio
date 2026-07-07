import { GitHubIcon, LinkedInIcon } from "@/components/icons/TechIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">
              <span className="text-primary">R</span>G
            </span>
            <span className="text-zinc-600 text-sm">·</span>
            <span className="text-zinc-600 text-xs font-mono">Full Stack Developer</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-600 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-600 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>

          <p className="text-zinc-700 text-xs font-mono">
            © {new Date().getFullYear()} Ricardo Gratereaux
          </p>
        </div>
      </div>
    </footer>
  );
}
