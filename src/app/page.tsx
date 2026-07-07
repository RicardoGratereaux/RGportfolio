import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About"));
const Stack = dynamic(() => import("@/components/sections/Stack"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const FeaturedProject = dynamic(() => import("@/components/sections/FeaturedProject"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

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
