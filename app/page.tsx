import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import Stats from "@/components/Stats";
import Founder from "@/components/Founder";
import ProductDeepDive from "@/components/ProductDeepDive";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExecutiveProfile />
        <Stats />
        <Founder />
        <ProductDeepDive />
        <Skills />
        <Projects />
        <CaseStudy />
        <Philosophy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
