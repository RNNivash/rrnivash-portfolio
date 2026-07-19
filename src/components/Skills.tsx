import { motion } from "motion/react";
import { Brain, Server, Database, Layout, Terminal } from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  // Map skill categories to icons and specific gradients
  const categoryConfig: Record<string, { icon: any; accentColor: string }> = {
    "AI Engineering": {
      icon: Brain,
      accentColor: "text-purple-400 border-purple-500/10 bg-purple-500/[0.02]",
    },
    "Backend": {
      icon: Server,
      accentColor: "text-blue-400 border-blue-500/10 bg-blue-500/[0.02]",
    },
    "Databases": {
      icon: Database,
      accentColor: "text-amber-400 border-amber-500/10 bg-amber-500/[0.02]",
    },
    "Frontend": {
      icon: Layout,
      accentColor: "text-pink-400 border-pink-500/10 bg-pink-500/[0.02]",
    },
    "Developer Tools": {
      icon: Terminal,
      accentColor: "text-teal-400 border-teal-500/10 bg-teal-500/[0.02]",
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-mono text-brand-accent-purple tracking-wider uppercase">
            Technical Competence
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
            Technical Skills
          </h2>
          <div className="h-0.5 w-12 bg-neutral-800 mt-2" />
        </div>

        {/* Bento/Grid Layout for Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="skills-grid"
        >
          {skillsData.map((group) => {
            const config = categoryConfig[group.category] || {
              icon: Terminal,
              accentColor: "text-neutral-400 border-neutral-800 bg-transparent",
            };
            const CategoryIcon = config.icon;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`rounded-xl p-6 glass-card glass-card-hover flex flex-col justify-between ${config.accentColor} ${
                  group.category === "AI Engineering" ? "md:col-span-2" : ""
                }`}
                id={`skill-card-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="space-y-6">
                  {/* Category Title Header */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-900">
                      <CategoryIcon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-tight uppercase font-sans">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-neutral-950 border border-neutral-900/60 text-[11px] font-mono text-neutral-400 px-3 py-1.5 rounded-md hover:text-white hover:border-brand-accent-blue/40 hover:scale-[1.03] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Aesthetic footer border marker */}
                <div className="mt-6 pt-3 border-t border-neutral-900/50 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                  <span>DEPLOYED ON SHIELD</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-700" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
