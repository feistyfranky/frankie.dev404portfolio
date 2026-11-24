"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award, ExternalLink, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ExperienceTimeline() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-[#E8EEF2]/15 bg-[#000412] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2 font-mono">
            Career History
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#E8EEF2] mt-3 leading-relaxed">
            A track record of delivering high-impact projects on time and scaling web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] hover:border-accent transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-accent flex items-center gap-2 mt-0.5">
                    <span>{exp.company}</span>
                    <span className="text-[#8A99A8]">•</span>
                    <span className="text-xs text-[#8A99A8] flex items-center gap-1 font-mono">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-white bg-[#000412] px-3 py-1 rounded-[4px] border border-[#E8EEF2]/15 w-fit font-mono">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {exp.description && (
                <p className="text-xs sm:text-sm text-[#E8EEF2] leading-relaxed mb-4">
                  {exp.description}
                </p>
              )}

              {/* Achievements */}
              <div className="space-y-2 mb-4">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs text-[#E8EEF2]">
                    <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{ach}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E8EEF2]/15">
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-0.5 rounded-[4px] bg-[#000412] text-[#8A99A8] border border-[#E8EEF2]/15 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Box */}
        <div className="mt-8">
          <div className="p-6 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15 flex items-center justify-center text-accent flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {PORTFOLIO_DATA.education.degree}
                </h4>
                <p className="text-xs text-accent font-medium font-mono">
                  {PORTFOLIO_DATA.education.school}
                  {PORTFOLIO_DATA.education.period ? ` • ${PORTFOLIO_DATA.education.period}` : ""}
                </p>
                {PORTFOLIO_DATA.education.description && (
                  <p className="text-xs text-[#8A99A8] mt-0.5">
                    {PORTFOLIO_DATA.education.description}
                  </p>
                )}
              </div>
            </div>

            <div className="text-xs text-[#E8EEF2] bg-[#000412] px-3 py-1.5 rounded-[4px] border border-[#E8EEF2]/15 font-mono">
              BSc IT Degree
            </div>
          </div>
        </div>

        {/* Licenses & Certifications */}
        {PORTFOLIO_DATA.certifications && PORTFOLIO_DATA.certifications.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1 font-mono">
                  Credentials
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Licenses & Certifications</span>
                </h3>
              </div>
              <span className="text-xs font-mono text-[#8A99A8]">
                {PORTFOLIO_DATA.certifications.length} Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] hover:border-accent transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-2">
                      {cert.imageUrl && (
                        <div className="w-12 h-12 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] p-1 flex items-center justify-center shrink-0">
                          <Image
                            src={cert.imageUrl}
                            alt={cert.title}
                            width={44}
                            height={44}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors leading-snug">
                            {cert.title}
                          </h4>
                          {cert.certificateImage ? (
                            <button
                              type="button"
                              onClick={() => setPreviewImage(cert.certificateImage!)}
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:underline shrink-0 px-2 py-0.5 rounded-[4px] border border-accent/30 hover:border-accent bg-[#000412] transition-colors cursor-pointer"
                            >
                              <span>View certificate</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          ) : cert.url && cert.url.trim() !== "" ? (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:underline shrink-0 px-2 py-0.5 rounded-[4px] border border-accent/30 hover:border-accent bg-[#000412] transition-colors"
                            >
                              <span>Show credential</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8A99A8] shrink-0 px-2 py-0.5 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412]">
                              <span>Show credential</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#8A99A8] font-mono mb-1">
                          {cert.issuer}
                        </p>

                        {cert.issueDate && (
                          <p className="text-xs text-[#8A99A8]/80 font-mono">
                            {cert.issueDate}
                          </p>
                        )}
                      </div>
                    </div>

                    {cert.credentialId && (
                      <p className="text-[11px] text-[#8A99A8]/70 font-mono mt-2 break-all">
                        Credential ID: <span className="text-[#E8EEF2]">{cert.credentialId}</span>
                      </p>
                    )}

                    {cert.mediaLabel && (
                      cert.certificateImage ? (
                        <button
                          type="button"
                          onClick={() => setPreviewImage(cert.certificateImage!)}
                          className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#E8EEF2] bg-[#000412] px-2.5 py-1 rounded-[4px] border border-[#E8EEF2]/15 hover:border-accent font-mono transition-colors cursor-pointer text-left"
                        >
                          <span>📜 {cert.mediaLabel}</span>
                          <span className="text-[10px] text-accent font-mono ml-1">↗ View</span>
                        </button>
                      ) : (
                        <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#E8EEF2] bg-[#000412] px-2.5 py-1 rounded-[4px] border border-[#E8EEF2]/15 font-mono">
                          <span>📜 {cert.mediaLabel}</span>
                        </div>
                      )
                    )}

                    {cert.description && (
                      <p className="text-xs text-[#8A99A8] mt-3 leading-relaxed border-t border-[#E8EEF2]/10 pt-2.5">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 bg-[#000412]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#000412] border border-[#E8EEF2]/20 rounded-[6px] p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF2]/15 mb-3">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  Verified Certificate Document
                </span>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="text-[#8A99A8] hover:text-white p-1 rounded hover:bg-[#E8EEF2]/10 transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full aspect-[701/494] overflow-hidden rounded-[4px] border border-[#E8EEF2]/10 bg-white">
                <Image
                  src={previewImage}
                  alt="Verified Certificate"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-3 pt-3 border-t border-[#E8EEF2]/15 flex items-center justify-between">
                <span className="text-xs font-mono text-[#8A99A8]">
                  AmaliTech Voluntary Internship Programme
                </span>
                <a
                  href={previewImage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Open raw image</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
