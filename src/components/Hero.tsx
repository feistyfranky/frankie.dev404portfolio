"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import AvailabilityStatus from "./AvailabilityStatus";
import AuroraWave from "./AuroraWave";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

export default function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.developer.email);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#000412] overflow-hidden">
      {/* Background Aurora Wavy Line (Inspired by Noctis) */}
      <AuroraWave />

      {/* Container aligned with Nav (max-w-6xl mx-auto px-4 sm:px-6 lg:px-8) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop two-column grid (12 cols) / Mobile single column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-stretch">
          {/* Left Column (col-span-7) */}
          <div className="md:col-span-7 flex flex-col items-start text-left justify-between">
            <div>
              {/* Status + Copy Email Line */}
              <div className="mb-8 md:mb-10">
                <AvailabilityStatus
                  email={PORTFOLIO_DATA.developer.email}
                  location="Takoradi, Ghana"
                  responseTime="24h"
                />
              </div>

              {/* 
                TODO: Replace with your specific headline:
                Structure: "I build [specific thing] for [specific audience]."
                Keep tight: max 2-3 lines.
              */}
              <h1 className="text-4xl md:text-[56px] font-semibold tracking-tight leading-[1.05] text-white mb-6 max-w-[14ch]">
                I build booking tools for{" "}
                <span className="text-accent font-medium">independent</span> restaurants.
              </h1>

              {/* 
                TODO: Replace with 1-2 concrete sentences max.
                Include real project details, numbers, or stack. No hardcoded fluff.
              */}
              <p className="text-base md:text-lg max-w-xl text-[#E8EEF2] mb-8 font-normal leading-relaxed">
                Currently building a custom reservations engine with Next.js,
                Postgres, and Tailwind CSS. Focused on zero-latency booking flows.
              </p>
            </div>

            {/* Left-aligned buttons row with gap-3 (flat solid, no glow, real arrow glyphs) */}
            <div className="flex flex-wrap items-center gap-3 mb-8 md:mb-0">
              {/* Primary button: bg-accent (#2BF08A), dark text (#000412), rounded-[4px] */}
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[4px] text-xs font-mono font-semibold bg-accent text-[#000412] hover:opacity-90 transition-opacity duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
              >
                <span>View projects →</span>
              </a>

              {/* Secondary button: 1px solid border, transparent background, rounded-[4px], copies email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[4px] text-xs font-mono text-[#E8EEF2] bg-transparent border border-[#E8EEF2]/20 hover:border-accent hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
              >
                <span aria-live="polite">
                  {emailCopied ? "Email copied!" : "Email me →"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column (col-span-5): "Currently" Block */}
          <div className="md:col-span-5 w-full flex flex-col">
            <div className="w-full h-full rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] font-mono text-xs divide-y divide-[#E8EEF2]/15 flex flex-col justify-between">
              {/* NOW - accent color applied to this one value */}
              <div className="p-4 flex flex-col justify-center gap-1 flex-1">
                <span className="text-[11px] text-[#8A99A8] uppercase tracking-wider">
                  NOW
                </span>
                {/* TODO: What I'm currently building */}
                <span className="text-accent font-medium">
                  Building a table reservation engine
                </span>
              </div>

              {/* STACK */}
              <div className="p-4 flex flex-col justify-center gap-1 flex-1">
                <span className="text-[11px] text-[#8A99A8] uppercase tracking-wider">
                  STACK
                </span>
                {/* TODO: 3-4 primary tools */}
                <span className="text-[#E8EEF2]">
                  Next.js, TypeScript, Postgres, Tailwind
                </span>
              </div>

              {/* LAST SHIPPED */}
              <div className="p-4 flex flex-col justify-center gap-1 flex-1">
                <span className="text-[11px] text-[#8A99A8] uppercase tracking-wider">
                  LAST SHIPPED
                </span>
                {/* TODO: One real project */}
                <span className="text-[#E8EEF2]">
                  Multi-location inventory sync portal
                </span>
              </div>

              {/* BASED IN */}
              <div className="p-4 flex flex-col justify-center gap-1 flex-1">
                <span className="text-[11px] text-[#8A99A8] uppercase tracking-wider">
                  BASED IN
                </span>
                {/* TODO: City, timezone */}
                <span className="text-[#E8EEF2]">
                  Takoradi, Ghana (GMT)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social links: icons */}
        <div className="mt-10 md:mt-12 flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.developer.socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] flex items-center justify-center text-[#8A99A8] hover:text-accent hover:border-accent transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.developer.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] flex items-center justify-center text-[#8A99A8] hover:text-accent hover:border-accent transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.developer.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] flex items-center justify-center text-[#8A99A8] hover:text-accent hover:border-accent transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
            aria-label="X"
            title="X"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
