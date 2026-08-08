import { GitHubIcon, LinkedInIcon } from "@/components/icons/TechIcons";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/50 font-mono">
          <p>© {new Date().getFullYear()} Ricardo Gratereaux. Todos los derechos reservados.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/RicardoGratereaux"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://do.linkedin.com/in/ricardo-gratereaux-baez-2a5915158"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
