import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      sections.push("hero");
      
      let current = "hero";
      const threshold = 180; // height offset threshold
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.03] py-3.5" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo/Signature */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2.5 group text-left cursor-pointer"
          id="nav-logo"
        >
          <div className="h-7 w-7 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="h-7 w-7">
              <path d="M30 75V25L70 75V25" stroke="url(#nav-logo-grad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="nav-logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="100%" stop-color="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <span className="text-white font-medium text-sm tracking-tight block">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-neutral-500 font-mono block -mt-1 group-hover:text-neutral-300 transition-colors">
              {personalInfo.title}
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-6" id="nav-desktop">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(id)}
                className={`text-xs font-mono tracking-wider transition-colors duration-300 relative py-1.5 ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side: Resume Action */}
        <div className="hidden md:flex items-center space-x-4" id="nav-actions">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Nivash_RN_Resume.pdf"
            className="flex items-center space-x-1 text-xs font-medium text-white hover:text-neutral-300 transition-colors border border-neutral-800 bg-neutral-950 px-4 py-2 rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all cursor-pointer"
            id="nav-resume-btn"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-white/[0.04] bg-[#030303]/90 backdrop-blur-xl overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
            id="nav-mobile-menu"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(id)}
                    className={`text-xs font-mono tracking-wider transition-colors duration-300 relative py-1.5 ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-neutral-900 flex flex-col space-y-3">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nivash_RN_Resume.pdf"
                  className="flex items-center justify-center space-x-1 text-xs font-medium text-white bg-neutral-950 border border-neutral-800 px-4 py-2.5 rounded-lg hover:bg-neutral-900"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
