import { motion } from "motion/react";
import { ArrowRight, FileText, Github, Linkedin, Cpu, Database, Network } from "lucide-react";
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

      {/* Subtle Radial Gradient behind Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex flex-col justify-center space-y-8"
          id="hero-left-content"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 items-center">
            {/* Subtle Tag */}
            <div className="inline-flex">
              <span className="inline-flex items-center space-x-2 bg-[#0a0a0c] border border-white/[0.04] rounded-full px-3.5 py-1.5 text-[11px] font-mono font-medium tracking-tight text-neutral-300 shadow-sm shadow-blue-500/5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-blue animate-pulse" />
                <span>Available for select projects</span>
              </span>
            </div>

            {/* Currently Building Tag */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center space-x-2 bg-[#0a0a0c] border border-brand-accent-purple/20 rounded-full px-3.5 py-1.5 text-[11px] font-mono font-medium tracking-tight text-brand-accent-purple shadow-sm shadow-purple-500/5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-purple animate-ping" />
                <span>Currently Building AI Systems</span>
              </span>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {/* Name & Title */}
            <motion.div variants={itemVariants}>
              <span className="text-sm font-mono text-brand-accent-purple tracking-wider uppercase block mb-1">
                {personalInfo.title}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-sans leading-[1.1] bg-clip-text">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans font-light max-w-xl leading-relaxed"
            >
              Building production-grade AI systems, multi-agent frameworks, and scalable Python API services. Focused on LLM orchestrations, Model Context Protocols, and database scaling.
            </motion.p>
          </div>

          {/* Key pillars labels */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 border-t border-b border-neutral-900/60 py-4 max-w-lg"
          >
            <div className="flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-brand-accent-blue/70" />
              <span className="text-xs font-mono text-neutral-300">LLMs & Agents</span>
            </div>
            <div className="flex items-center space-x-2">
              <Network className="h-4 w-4 text-brand-accent-purple/70" />
              <span className="text-xs font-mono text-neutral-300">MCP Protocol</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4 text-brand-accent-blue/70" />
              <span className="text-xs font-mono text-neutral-300">Scalable Systems</span>
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
              className="flex items-center space-x-2 bg-white text-black hover:bg-neutral-100 hover:shadow-lg hover:shadow-blue-500/10 px-5 py-3 rounded-lg text-xs font-medium tracking-tight transition-all duration-300 cursor-pointer premium-focus"
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
              className="flex items-center space-x-2 bg-neutral-950 border border-neutral-900 text-white hover:bg-neutral-900 hover:border-brand-accent-purple/40 px-5 py-3 rounded-lg text-xs font-medium tracking-tight transition-all duration-300 cursor-pointer premium-focus"
              id="hero-btn-resume"
            >
              <FileText className="h-4 w-4 text-neutral-400" />
              <span>Resume</span>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-lg bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-brand-accent-blue/40 hover:bg-neutral-900 transition-all duration-300 cursor-pointer premium-focus"
              aria-label="GitHub"
              id="hero-btn-github"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-lg bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-brand-accent-blue/40 hover:bg-neutral-900 transition-all duration-300 cursor-pointer premium-focus"
              aria-label="LinkedIn"
              id="hero-btn-linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Code panel and Image side-by-side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-7 w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          id="hero-right-visual"
        >
          {/* 1. Terminal Panel */}
          <div className="relative w-full rounded-xl border border-white/[0.04] bg-[#0a0a0c]/80 p-5 shadow-2xl flex flex-col justify-between font-mono glass-card">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.04] mb-4">
              <div className="flex space-x-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[10px] text-neutral-500 font-medium">bash - capabilities.json</div>
              <div className="w-10" />
            </div>

            {/* Terminal Body Content */}
            <div className="text-[11px] leading-relaxed space-y-3.5 flex-grow flex flex-col justify-between text-neutral-300">
              <div className="space-y-3">
                <div>
                  <span className="text-brand-accent-blue">$</span> <span className="text-brand-accent-purple">cat</span> capabilities.json
                </div>

                <div className="text-neutral-400 bg-[#030303]/50 p-4 rounded-lg border border-white/[0.02] backdrop-blur-sm">
                  <span className="text-brand-accent-purple">{`{`}</span>
                  <div className="pl-4">
                    <span className="text-brand-accent-blue">"role"</span>: <span className="text-emerald-400">"Associate AI Engineer"</span>,
                    <br />
                    <span className="text-brand-accent-blue">"company"</span>: <span className="text-emerald-400">"AstroVed"</span>,
                    <br />
                    <span className="text-brand-accent-blue">"specialization"</span>: <span className="text-amber-400">{`[`}</span>
                    <div className="pl-4 space-y-0.5">
                      <div><span className="text-emerald-400">"Generative AI"</span>,</div>
                      <div><span className="text-emerald-400">"FastAPI"</span>,</div>
                      <div><span className="text-emerald-400">"LiteLLM"</span>,</div>
                      <div><span className="text-emerald-400">"AI Agents"</span>,</div>
                      <div><span className="text-emerald-400">"MCP"</span>,</div>
                      <div><span className="text-emerald-400">"LangChain"</span>,</div>
                      <div><span className="text-emerald-400">"Prompt Engineering"</span></div>
                    </div>
                    <span className="text-amber-400">{`]`}</span>,
                    <br />
                    <span className="text-brand-accent-blue">"current_focus"</span>: <span className="text-amber-400">{`[`}</span>
                    <div className="pl-4 space-y-0.5">
                      <div><span className="text-emerald-400">"Agentic AI"</span>,</div>
                      <div><span className="text-emerald-400">"Multi-LLM Architecture"</span>,</div>
                      <div><span className="text-emerald-400">"Application Deployment"</span></div>
                    </div>
                    <span className="text-amber-400">{`]`}</span>,
                    <br />
                    <span className="text-brand-accent-blue">"status"</span>: <span className="text-emerald-400">"Building production AI applications"</span>
                  </div>
                  <span className="text-brand-accent-purple">{`}`}</span>
                </div>
              </div>

              <div className="text-[10px] text-neutral-500 flex items-center space-x-1.5 mt-auto pt-4">
                <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span>system: online & ready</span>
              </div>
            </div>
          </div>

          {/* 2. Image Panel (Office Photo) */}
          <div className="relative w-full min-h-[300px] md:min-h-0 aspect-[4/5] rounded-xl border border-white/[0.04] bg-neutral-950 overflow-hidden shadow-2xl group glass-card">
            {/* Background Office Photo */}
            <img
              src="/images/hero.webp"
              alt="Nivash R N - Associate AI Engineer"
              loading="eager"
              width="440"
              height="550"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-80"
            />

            {/* Subtle dark gradient overlay on the image for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-[#030303]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-transparent group-hover:border-brand-accent-purple/15 pointer-events-none transition-colors duration-500 rounded-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
