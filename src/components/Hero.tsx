import { motion } from "motion/react";
import { ArrowRight, FileText, Github, Linkedin, Mail, Terminal, Cpu, Database, Network } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPosition = elRect - bodyRect;
      const offsetPosition = elPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden"
    >
      {/* Decorative Grid Backdrop (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
          id="hero-left-content"
        >
          {/* Subtle Tag */}
          <motion.div variants={itemVariants} className="inline-flex">
            <span className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-full px-3.5 py-1 text-[11px] font-mono font-medium tracking-tight text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select AI Engineering projects</span>
            </span>
          </motion.div>

          <div className="space-y-4">
            {/* Name & Title */}
            <motion.div variants={itemVariants}>
              <span className="text-sm font-mono text-neutral-500 tracking-wider uppercase block mb-1">
                {personalInfo.title}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-sans leading-[1.1]">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans font-light max-w-xl leading-relaxed"
            >
              {personalInfo.headline}
            </motion.p>
          </div>

          {/* Key pillars labels */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 border-t border-b border-neutral-900 py-4 max-w-lg"
          >
            <div className="flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-neutral-600" />
              <span className="text-xs font-mono text-neutral-400">LLMs & Agents</span>
            </div>
            <div className="flex items-center space-x-2">
              <Network className="h-4 w-4 text-neutral-600" />
              <span className="text-xs font-mono text-neutral-400">MCP Protocol</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4 text-neutral-600" />
              <span className="text-xs font-mono text-neutral-400">Scalable Systems</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
            id="hero-actions"
          >
            <button
              onClick={scrollToContact}
              className="flex items-center space-x-2 bg-white text-black hover:bg-neutral-200 px-5 py-3 rounded-lg text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer shadow-sm"
              id="hero-btn-contact"
            >
              <span>Contact Me</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nivash_RN_Resume.pdf"
              className="flex items-center space-x-2 bg-neutral-950 border border-neutral-800 text-white hover:bg-neutral-900 px-5 py-3 rounded-lg text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer"
              id="hero-btn-resume"
            >
              <FileText className="h-4 w-4 text-neutral-400" />
              <span>Resume</span>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all cursor-pointer"
              aria-label="GitHub"
              id="hero-btn-github"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all cursor-pointer"
              aria-label="LinkedIn"
              id="hero-btn-linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image (Professional Office Photo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
          id="hero-right-visual"
        >
          <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-xl border border-neutral-800/80 bg-neutral-950 shadow-2xl shadow-neutral-950/50 group overflow-hidden">
            <img 
              src="/images/hero.jpg" 
              alt="Nivash R N - Associate AI Engineer" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay to match the high-end dark aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-transparent group-hover:border-neutral-800/50 pointer-events-none transition-colors duration-500 rounded-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
