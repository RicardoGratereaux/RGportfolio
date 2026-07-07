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
  title: "Ricardo Gratereaux | Full Stack Software Developer",
  description: "Portfolio de Ricardo Gratereaux, Full Stack Software Developer enfocado en crear experiencias y arquitecturas modernas con Next.js, React y Node.js.",
  keywords: ["Software Engineer", "Full Stack", "Next.js", "React", "TypeScript", "Node.js"],
  openGraph: {
    title: "Ricardo Gratereaux",
    description: "Full Stack Software Developer",
    url: "https://ricardogratereaux.dev",
    siteName: "Ricardo Gratereaux Portfolio",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Gratereaux",
    description: "Full Stack Software Developer",
  },
};

import ThemeProvider from "@/components/ThemeProvider";

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
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 transition-colors duration-500 theme-recruiter">
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            <ViewToggle />
            {children}
            <InteractiveTerminal />
          </SmoothScroll>

        </ThemeProvider>
      </body>
    </html>
  );
}
