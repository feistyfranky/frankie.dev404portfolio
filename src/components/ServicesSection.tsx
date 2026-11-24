"use client";

import { Layout, Server, Rocket } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ServicesSection() {
  const serviceIcons = [Layout, Server, Rocket];

  return (
    <section id="services" className="py-20 sm:py-24 border-t border-[#E8EEF2]/15 bg-[#000412] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2 font-mono">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Services & Expertise
          </h2>
          <p className="text-sm sm:text-base text-[#E8EEF2] mt-3 leading-relaxed">
            Everything you need to launch, scale, or modernize your digital products.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.developer.services.map((service, idx) => {
            const Icon = serviceIcons[idx] || Layout;

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] hover:border-accent transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 flex items-center justify-center text-accent mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8A99A8] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-[#8A99A8] uppercase tracking-wider block mb-2 font-mono">
                    Key Tools & Capabilities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-[4px] bg-[#000412] text-[#E8EEF2] border border-[#E8EEF2]/15 font-mono hover:border-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
