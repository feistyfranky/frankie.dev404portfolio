"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000412] border-b border-[#E8EEF2]/15 py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Moniker */}
        <a
          href="#"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
        >
          <div className="w-8 h-8 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 flex items-center justify-center font-mono font-bold text-xs text-[#E8EEF2] hover:border-accent transition-colors duration-150">
            FK
          </div>
          <div>
            <span className="font-semibold text-sm tracking-tight text-white block leading-tight">
              {PORTFOLIO_DATA.developer.name}
            </span>
            <span className="text-[11px] text-[#8A99A8] block font-mono font-normal">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 border border-[#E8EEF2]/15 rounded-[4px] bg-[#000412] px-3 py-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8A99A8] hover:text-[#E8EEF2] px-2.5 py-1 transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA - "Get in Touch" in Nav Only */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#E8EEF2] bg-[#000412] hover:bg-white/[0.04] border border-[#E8EEF2]/20 hover:border-accent hover:text-white px-3.5 py-1.5 rounded-[4px] transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
          >
            <span>Get in Touch ↗</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#E8EEF2] rounded-[4px] border border-[#E8EEF2]/20 bg-[#000412] hover:border-accent transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000412] border-b border-[#E8EEF2]/15 px-4 pt-3 pb-6">
          <div className="flex flex-col gap-2 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-[#8A99A8] hover:text-[#E8EEF2] rounded-[4px] hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8EEF2]/15 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 px-4 text-xs font-semibold text-[#E8EEF2] bg-[#000412] border border-[#E8EEF2]/20 hover:border-accent hover:text-white rounded-[4px] transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
              >
                Get in Touch ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
