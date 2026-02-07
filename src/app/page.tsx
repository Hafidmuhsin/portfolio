import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen text-white selection:bg-gold selection:text-black scroll-smooth relative">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
