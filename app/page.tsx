import { Experiences } from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { BackgroundGradientAnimation } from "@/components/ui/backgroundGradientAnimation";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <Experiences />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
