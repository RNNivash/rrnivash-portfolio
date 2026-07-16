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
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
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
    <motion.header
      id="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-brand-border)] bg-[#030303]/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo/Signature */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2.5 group text-left cursor-pointer"
          id="nav-logo"
        >
          <div className="h-7 w-7 rounded bg-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <span className="text-[#030303] font-mono text-sm font-bold">N</span>
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
        <nav className="hidden md:flex items-center space-x-1.5" id="nav-desktop">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all relative cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-neutral-900 rounded-full -z-10 border border-neutral-800"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
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
            className="md:hidden border-b border-[var(--color-brand-border)] bg-[#030303]/95 backdrop-blur-lg overflow-hidden absolute top-full left-0 right-0"
            id="nav-mobile-menu"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(id)}
                    className={`text-left text-sm font-medium py-1 transition-colors cursor-pointer ${
                      isActive ? "text-white font-semibold" : "text-neutral-400"
                    }`}
                  >
                    {item.name}
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
    </motion.header>
  );
}
