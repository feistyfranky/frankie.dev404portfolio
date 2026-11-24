"use client";

import { MessageSquare, Smartphone, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutSection() {
  const principles = [
    {
      icon: MessageSquare,
      title: "Clear, Jargon-Free Communication",
      description: "I speak plain English, not developer riddles. You'll always know the status of your project, what's being built, and when it will be delivered."
    },
    {
      icon: Smartphone,
      title: "Mobile & User-First Design",
      description: "Over 60% of web traffic is mobile. Every page is crafted to look stunning, load fast, and feel effortless on phones, tablets, and desktops."
    },
    {
      icon: ShieldCheck,
      title: "Reliable & Scalable Quality",
      description: "Built using modern industry standards with security, accessibility, and high performance from day one, so your application is built to last."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[#E8EEF2]/15 bg-[#000412] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2 font-mono">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A developer who cares about your business
          </h2>
          <p className="text-sm sm:text-base text-[#E8EEF2] mt-3 leading-relaxed">
            I don&apos;t just write code — I build software that helps companies save time,
            attract customers, and operate more smoothly.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="p-6 sm:p-8 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#E8EEF2] leading-relaxed">
            <p>
              {PORTFOLIO_DATA.developer.aboutParagraphs[0]}
            </p>
            <p>
              {PORTFOLIO_DATA.developer.aboutParagraphs[1]}
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15 hover:border-accent transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 flex items-center justify-center text-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8A99A8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
