import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-mono text-brand-accent-purple tracking-wider uppercase">
            Professional History
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
            Work Experience
          </h2>
          <div className="h-0.5 w-12 bg-neutral-800 mt-2" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-neutral-900" id="experience-timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-12 last:mb-0 group"
              id={`experience-item-${index}`}
            >
              {/* Timeline dot / icon indicator */}
              <div className="absolute -left-[35px] sm:-left-[45px] top-1 h-7 w-7 rounded-full bg-[#0a0a0c] border border-neutral-800 flex items-center justify-center group-hover:border-brand-accent-purple group-hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all duration-300">
                <Briefcase className="h-3.5 w-3.5 text-brand-accent-purple group-hover:text-brand-accent-cyan transition-colors" />
              </div>

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white tracking-tight leading-tight group-hover:text-neutral-100 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-sans text-neutral-400 mt-1 block font-medium">
                    {exp.company}
                  </span>
                </div>
                
                {/* Meta details (Period & Location) */}
                <div className="flex items-center space-x-4 text-xs font-mono text-neutral-500">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Description Bullet points */}
              <ul className="space-y-3.5 text-neutral-400 text-sm leading-relaxed mb-6 font-sans">
                {exp.descriptionPoints.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start space-x-2.5">
                    <ChevronRight className="h-4 w-4 text-neutral-600 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack used in this role */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                  Core Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="bg-neutral-950 border border-neutral-900 rounded px-2.5 py-1 text-xs font-mono text-neutral-400 hover:text-white hover:border-neutral-800 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
