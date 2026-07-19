import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-[#f5f5f7] flex flex-col font-sans" id="app-root">
      {/* Absolute high-end aesthetic backdrop glowing spotlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-10 w-[600px] h-[600px] rounded-full bg-purple-500/[0.04] blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-10 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none -z-10" />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Primary Visual Sections */}
      <main className="flex-grow flex flex-col" id="app-main">
        <Hero />
        
        <div className="max-w-7xl mx-auto w-full border-t border-neutral-900/60 pointer-events-none" />
        <Experience />
        
        <div className="max-w-7xl mx-auto w-full border-t border-neutral-900/60 pointer-events-none" />
        <Projects />
        
        <div className="max-w-7xl mx-auto w-full border-t border-neutral-900/60 pointer-events-none" />
        <Skills />
        
        <div className="max-w-7xl mx-auto w-full border-t border-neutral-900/60 pointer-events-none" />
        <Education />
        
        <div className="max-w-7xl mx-auto w-full border-t border-neutral-900/60 pointer-events-none" />
        <About />
        
        <div className="max-w-7xl mx-auto w-full border-t border-neutral-900/60 pointer-events-none" />
        <Contact />
      </main>

      {/* App Footer */}
      <Footer />
    </div>
  );
}

