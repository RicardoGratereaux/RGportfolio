import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex flex-col w-full overflow-x-hidden">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <FeaturedProject />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  );
}
