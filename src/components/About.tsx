import { motion } from "motion/react";
import { Terminal, Shield, Workflow, Cpu } from "lucide-react";
import { aboutData } from "../data/portfolioData";

export default function About() {
  const coreValues = [
    {
      icon: Cpu,
      title: "Agentic Design",
      desc: "Architecting multi-agent LangGraph flows with deterministic state transitions.",
    },
    {
      icon: Workflow,
      title: "Model Context",
      desc: "Pioneering Model Context Protocol (MCP) integrations for semantic database access.",
    },
    {
      icon: Shield,
      title: "Production Grade",
      desc: "Strict type safety, caching strategies, and robust cloud backend design.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-mono text-brand-accent-blue tracking-wider uppercase">
            Personal Narrative
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
            Career Journey
          </h2>
          <div className="h-0.5 w-12 bg-neutral-800 mt-2" />
        </div>

        {/* Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="about-split-container">
          
          {/* Left Column: Philosophical/Engineering Pillars & Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6"
            id="about-left-pillars"
          >
            {/* Portrait Image Container */}
            <div className="border border-neutral-900 rounded-xl overflow-hidden bg-[#0a0a0c]/40 aspect-square relative group">
              <img 
                src="/images/profile.webp" 
                alt="Nivash R N" 
                loading="lazy"
                width="400"
                height="400"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-transparent group-hover:border-neutral-800/50 pointer-events-none transition-colors duration-500 rounded-xl" />
            </div>

            <div className="rounded-xl p-6 glass-card space-y-6 glass-card-hover">
              <span className="text-xs font-mono text-neutral-500 block uppercase tracking-wider">
                Engineering Pillars
              </span>
              
              <div className="space-y-5">
                {coreValues.map((val, index) => {
                  const Icon = val.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3.5 group">
                      <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-400 group-hover:text-white group-hover:border-neutral-800 transition-colors mt-0.5">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                          {val.title}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Minimalist Terminal Tag */}
              <div className="border-t border-neutral-900 pt-4 font-mono text-[10px] text-neutral-600 flex items-center space-x-2">
                <Terminal className="h-3.5 w-3.5 text-neutral-700" />
                <span>CWD // src/data/aboutData</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Typed Paragraph blocks of professional journey */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col text-neutral-400 text-sm sm:text-base leading-relaxed font-sans font-light"
            id="about-right-text"
          >
            {/* Minimalist Journey Flow Diagram */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-2 text-[10px] sm:text-[11px] font-mono mb-8 py-4 border-b border-neutral-900/60 pb-8 text-neutral-500">
              <span className="text-brand-accent-blue font-semibold bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10 hover:border-blue-500/20 transition-colors">Python</span>
              <span>➔</span>
              <span className="text-brand-accent-blue font-semibold bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10 hover:border-blue-500/20 transition-colors">Backend</span>
              <span>➔</span>
              <span className="text-brand-accent-blue font-semibold bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10 hover:border-blue-500/20 transition-colors">FastAPI</span>
              <span>➔</span>
              <span className="text-brand-accent-purple font-semibold bg-purple-500/5 px-2.5 py-1 rounded border border-purple-500/10 hover:border-purple-500/20 transition-colors">Generative AI</span>
              <span>➔</span>
              <span className="text-brand-accent-purple font-semibold bg-purple-500/5 px-2.5 py-1 rounded border border-purple-500/10 hover:border-purple-500/20 transition-colors">LLMs</span>
              <span>➔</span>
              <span className="text-brand-accent-purple font-semibold bg-purple-500/5 px-2.5 py-1 rounded border border-purple-500/10 hover:border-purple-500/20 transition-colors">Associate AI Engineer</span>
              <span>➔</span>
              <span className="text-white font-semibold bg-white/5 px-2.5 py-1 rounded border border-white/10 hover:border-white/20 transition-colors">Production AI Systems</span>
            </div>

            <div className="space-y-6">
              {aboutData.journey.map((paragraph, index) => (
                <p key={index} className="first-of-type:text-white first-of-type:font-normal first-of-type:text-base sm:first-of-type:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
