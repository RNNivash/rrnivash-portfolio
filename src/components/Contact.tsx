import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, FileText, Copy, Check, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      name: "GitHub",
      href: personalInfo.githubUrl,
      icon: Github,
      desc: "@nivash-r-n",
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedinUrl,
      icon: Linkedin,
      desc: "Nivash R N",
    },
    {
      name: "Resume",
      href: personalInfo.resumeUrl,
      icon: FileText,
      desc: "PDF Download",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-mono text-neutral-500 tracking-wider uppercase">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
            Contact Details
          </h2>
          <div className="h-0.5 w-12 bg-neutral-800 mt-2" />
        </div>

        {/* Premium Direct Contact Panel */}
        <div className="max-w-4xl mx-auto" id="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border border-neutral-900 rounded-2xl bg-[#0a0a0c] p-8 md:p-12 relative overflow-hidden"
            id="contact-card"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Email trigger */}
              <div className="md:col-span-6 space-y-6" id="contact-left">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                  Get in Touch
                </span>
                
                <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight">
                  Let's engineer the next generation of intelligent systems.
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  I'm always open to discussing new opportunities, agentic pipeline designs, or Model Context Protocol applications. Drop me an email or connect on social platforms.
                </p>

                {/* Direct email box */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-3 bg-neutral-950 border border-neutral-900 rounded-lg p-3 px-4 hover:border-neutral-800 transition-colors group flex-1"
                    id="contact-email-link"
                  >
                    <Mail className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
                    <span className="text-xs sm:text-sm text-neutral-300 group-hover:text-white transition-colors font-mono">
                      {personalInfo.email}
                    </span>
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center space-x-2 bg-neutral-950 border border-neutral-900 rounded-lg p-3 px-4 hover:border-neutral-800 hover:bg-neutral-900 transition-colors cursor-pointer text-neutral-400 hover:text-white"
                    title="Copy Email Address"
                    id="contact-copy-btn"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-500 animate-scale" />
                        <span className="text-xs font-mono text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-neutral-500" />
                        <span className="text-xs font-mono">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Other direct links */}
              <div className="md:col-span-6 flex flex-col justify-center space-y-3.5 border-t md:border-t-0 md:border-l border-neutral-900 pt-8 md:pt-0 md:pl-8" id="contact-right">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  Alternative Channels
                </span>

                {contactLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.name === "Resume" ? "Nivash_RN_Resume.pdf" : undefined}
                      className="flex items-center justify-between bg-neutral-950/40 border border-neutral-900/60 rounded-xl p-4 hover:border-neutral-800 hover:bg-neutral-950 hover:shadow-sm transition-all duration-300 group"
                      id={`contact-link-${link.name.toLowerCase()}`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-500 group-hover:text-white group-hover:border-neutral-800 transition-colors">
                          <LinkIcon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-white block">
                            {link.name}
                          </span>
                          <span className="text-[11px] text-neutral-500 font-mono block">
                            {link.desc}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </a>
                  );
                })}
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
