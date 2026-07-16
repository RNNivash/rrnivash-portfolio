import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="border-t border-neutral-900 bg-[#030303] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="text-center md:text-left space-y-1">
          <span className="text-xs font-semibold text-white tracking-tight block">
            {personalInfo.name}
          </span>
          <span className="text-[10px] font-mono text-neutral-500 tracking-wider block uppercase">
            {personalInfo.title}
          </span>
        </div>

        {/* Center / Copyright */}
        <div className="text-center">
          <p className="text-[11px] font-mono text-neutral-600">
            &copy; {currentYear} Nivash R N. Designed & engineered for production-grade AI systems.
          </p>
        </div>

        {/* Right Info: Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-500 hover:text-white hover:bg-neutral-900 border border-neutral-900 rounded-md p-2 px-3 transition-colors cursor-pointer"
          id="footer-back-to-top"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>

      </div>
    </footer>
  );
}
