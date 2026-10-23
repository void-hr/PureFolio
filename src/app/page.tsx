import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
