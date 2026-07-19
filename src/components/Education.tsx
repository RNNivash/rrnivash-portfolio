import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-neutral-950/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-mono text-brand-accent-blue tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
            Education
          </h2>
          <div className="h-0.5 w-12 bg-neutral-800 mt-2" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-neutral-900" id="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="relative mb-12 last:mb-0 group"
              id={`education-item-${index}`}
            >
              {/* Timeline indicator dot */}
              <div className="absolute -left-[35px] sm:-left-[45px] top-1 h-7 w-7 rounded-full bg-[#0a0a0c] border border-neutral-800 flex items-center justify-center group-hover:border-brand-accent-purple group-hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all duration-300">
                <GraduationCap className="h-3.5 w-3.5 text-brand-accent-blue group-hover:text-brand-accent-cyan transition-colors" />
              </div>

              {/* Institution & Degree */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white tracking-tight leading-tight group-hover:text-neutral-100 transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-sans text-neutral-400 mt-1 block font-medium">
                    {edu.institution}
                  </span>
                </div>
                
                {/* Meta details */}
                <div className="flex items-center space-x-4 text-xs font-mono text-neutral-500">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              {/* Score Badge */}
              <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded px-2.5 py-1 text-xs font-mono mb-4">
                <Award className="h-3.5 w-3.5" />
                <span>{edu.cgpa.includes("%") ? `Percentage: ${edu.cgpa}` : `CGPA: ${edu.cgpa}`}</span>
              </div>

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="space-y-3.5 text-neutral-400 text-sm leading-relaxed mb-6 font-sans">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start space-x-2.5">
                      <BookOpen className="h-4 w-4 text-neutral-600 mt-1 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Certifications footer */}
              {edu.certifications && edu.certifications.length > 0 && (
                <div className="space-y-2 mt-6">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                    Core Credentials & Certifications
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.certifications.map((cert, cIndex) => (
                      <span
                        key={cIndex}
                        className="bg-neutral-950 border border-neutral-900 rounded px-2.5 py-1 text-xs font-mono text-neutral-400 hover:text-white hover:border-neutral-800 transition-all"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
