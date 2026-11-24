"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon } from "./SocialIcons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-[#E8EEF2]/15 bg-[#000412] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2 font-mono">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#E8EEF2] mt-3 leading-relaxed">
            Real-world applications built for usability, performance, and business growth.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] hover:border-accent p-6 sm:p-7 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-4 font-mono">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-[4px] bg-[#000412] text-[#E8EEF2] border border-[#E8EEF2]/20">
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-[4px] bg-accent/15 text-accent border border-accent/30">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E8EEF2] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Business Impact Box */}
                <div className="p-3.5 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15 mb-5">
                  <div className="text-xs font-semibold text-accent flex items-center gap-1.5 mb-1 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Real-World Impact</span>
                  </div>
                  <p className="text-xs text-[#E8EEF2] leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#8A99A8]">
                      <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags + Action Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-[#E8EEF2]/15">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-0.5 rounded-[4px] bg-[#000412] text-[#8A99A8] border border-[#E8EEF2]/15 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] text-xs font-semibold text-[#000412] bg-accent hover:opacity-90 transition-opacity"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#000412]" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[4px] text-xs font-medium text-[#E8EEF2] hover:text-white bg-[#000412] hover:border-accent border border-[#E8EEF2]/20 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
