import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ViewToggle from "@/components/ui/ViewToggle";
import InteractiveTerminal from "@/components/ui/InteractiveTerminal";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Gratereaux | Senior Software Engineer & Product Designer",
  description: "Portfolio de Ricardo Gratereaux, Full Stack Software Developer enfocado en crear experiencias y arquitecturas modernas con Next.js, React y Node.js.",
  keywords: ["Software Engineer", "Full Stack", "Next.js", "React", "TypeScript", "Product Designer"],
  openGraph: {
    title: "Ricardo Gratereaux",
    description: "Senior Software Engineer & Product Designer",
    url: "https://ricardogratereaux.dev",
    siteName: "Ricardo Gratereaux Portfolio",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Gratereaux",
    description: "Senior Software Engineer & Product Designer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 selection:bg-violet-500/30">
        <SmoothScroll>
          <Navbar />
          <ViewToggle />
          {children}
          <InteractiveTerminal />
        </SmoothScroll>
      </body>
    </html>
  );
}
