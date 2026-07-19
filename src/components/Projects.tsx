import { motion } from "motion/react";
import { Hammer, Ban, Lightbulb, Sparkles, FolderGit2, Brackets, Terminal } from "lucide-react";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  // Map project IDs to specific design properties
  const projectStyles: Record<string, { icon: any; colorClass: string; glowClass: string }> = {
    "numerology-platform": {
      icon: Brackets,
      colorClass: "from-amber-500/20 to-orange-500/20 text-orange-400",
      glowClass: "group-hover:shadow-orange-500/5",
    },
    "astrology-services": {
      icon: Sparkles,
      colorClass: "from-blue-500/20 to-indigo-500/20 text-blue-400",
      glowClass: "group-hover:shadow-blue-500/5",
    },
    "seo-content-gen": {
      icon: FolderGit2,
      colorClass: "from-teal-500/20 to-emerald-500/20 text-emerald-400",
      glowClass: "group-hover:shadow-emerald-500/5",
    },
    "qa-automation-ai": {
      icon: Terminal,
      colorClass: "from-purple-500/20 to-pink-500/20 text-pink-400",
      glowClass: "group-hover:shadow-pink-500/5",
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-neutral-950/20 overflow-hidden">
      {/* Subtle Radial Gradient behind Projects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-transparent rounded-full filter blur-[140px] pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-mono text-brand-accent-cyan tracking-wider uppercase">
            Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
            Featured AI Projects
          </h2>
          <div className="h-0.5 w-12 bg-neutral-800 mt-2" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          {projectsData.map((project) => {
            const style = projectStyles[project.id] || {
              icon: FolderGit2,
              colorClass: "from-neutral-500/20 to-neutral-600/20 text-neutral-400",
              glowClass: "",
            };
            const ProjectIcon = style.icon;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between glass-card rounded-xl p-6 sm:p-8 glass-card-hover shadow-xl ${style.glowClass}`}
                id={`project-card-${project.id}`}
              >
                {/* Accent Background Top Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent rounded-xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${style.colorClass} border border-neutral-800/50`}>
                      <ProjectIcon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                      Case Study
                    </span>
                  </div>

                  {/* Browser Mockup Screenshot Placeholder */}
                  {project.imageUrl && (
                    <div className="relative aspect-video w-full rounded-lg border border-white/[0.03] bg-neutral-950/60 overflow-hidden flex items-center justify-center p-4">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.02] to-purple-500/[0.02] opacity-50 pointer-events-none" />
                      {/* Mock Browser Header Bar */}
                      <div className="absolute top-0 inset-x-0 h-6 border-b border-white/[0.02] bg-[#030303]/30 px-3 flex items-center justify-between">
                        <div className="flex space-x-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        </div>
                        <div className="h-2.5 w-28 rounded bg-white/5 mx-auto" />
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest pt-4">
                        {project.title} Screen
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-medium text-white tracking-tight leading-tight group-hover:text-neutral-100 transition-colors">
                    {project.title}
                  </h3>

                  {/* Overview */}
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                    {project.overview}
                  </p>

                  {/* Problem Statement */}
                  <div className="space-y-1.5" id={`project-${project.id}-problem`}>
                    <div className="flex items-center space-x-1.5 text-neutral-500">
                      <Ban className="h-3.5 w-3.5 text-red-500/50" />
                      <span className="text-[11px] font-mono uppercase tracking-wider">The Problem</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution Statement */}
                  <div className="space-y-1.5" id={`project-${project.id}-solution`}>
                    <div className="flex items-center space-x-1.5 text-neutral-500">
                      <Lightbulb className="h-3.5 w-3.5 text-emerald-500/50" />
                      <span className="text-[11px] font-mono uppercase tracking-wider">The Solution</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                      {project.solution}
                    </p>
                  </div>

                  {/* Contribution Highlight */}
                  <div className="bg-[#030303]/30 border border-neutral-900 rounded-lg p-3.5 space-y-1.5" id={`project-${project.id}-contribution`}>
                    <div className="flex items-center space-x-1.5 text-neutral-400">
                      <Hammer className="h-3.5 w-3.5 text-neutral-500" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">My Contribution</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Business Outcome */}
                  <div className="space-y-1.5" id={`project-${project.id}-outcome`}>
                    <div className="flex items-center space-x-1.5 text-neutral-500">
                      <Sparkles className="h-3.5 w-3.5 text-brand-accent-purple/50" />
                      <span className="text-[11px] font-mono uppercase tracking-wider">Outcome</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans font-normal">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills Footer */}
                <div className="mt-8 pt-4 border-t border-neutral-900/60" id={`project-${project.id}-tech`}>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-neutral-950 border border-neutral-900/80 rounded px-2 py-0.5 text-[10px] font-mono text-neutral-400 hover:text-neutral-300 hover:border-neutral-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
