"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8EEF2]/15 bg-[#000412] py-12 relative z-10 font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 flex items-center justify-center font-bold text-xs text-accent">
              FK
            </div>
            <div>
              <span className="text-sm font-semibold text-white block font-sans">
                {PORTFOLIO_DATA.developer.name}
              </span>
              <p className="text-xs text-[#8A99A8]">
                {PORTFOLIO_DATA.developer.role}
              </p>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.developer.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#8A99A8] hover:text-[#E8EEF2] transition-colors p-2 rounded-[4px] border border-[#E8EEF2]/10 hover:border-[#E8EEF2]/30"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.developer.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#8A99A8] hover:text-[#E8EEF2] transition-colors p-2 rounded-[4px] border border-[#E8EEF2]/10 hover:border-[#E8EEF2]/30"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.developer.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-[#8A99A8] hover:text-[#E8EEF2] transition-colors p-2 rounded-[4px] border border-[#E8EEF2]/10 hover:border-[#E8EEF2]/30"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-[4px] bg-[#000412] hover:bg-white/[0.04] text-[#E8EEF2] hover:text-accent border border-[#E8EEF2]/20 transition-all ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E8EEF2]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A99A8] gap-2">
          <div>
            &copy; {currentYear} {PORTFOLIO_DATA.developer.name}. All rights reserved.
          </div>
          <div className="text-[#8A99A8]">
            Takoradi, Ghana • Open to Remote Worldwide
          </div>
        </div>
      </div>
    </footer>
  );
}
