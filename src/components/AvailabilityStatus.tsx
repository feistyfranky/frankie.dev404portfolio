"use client";

import { useState } from "react";

export interface AvailabilityStatusProps {
  email?: string;
  location?: string;
  responseTime?: string;
}

export default function AvailabilityStatus({
  email = "frankie.dev404@gmail.com",
  location = "Takoradi, Ghana",
  responseTime = "24h",
}: AvailabilityStatusProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] px-3 py-1.5 font-mono text-xs tracking-wide text-[#8A99A8]">
      {/* 6px solid square using Aurora Green bg-accent */}
      <span
        className="w-1.5 h-1.5 bg-accent shrink-0"
        aria-hidden="true"
      />

      <span>
        Open to work · {location} · Replies within {responseTime}
      </span>

      <span className="text-[#E8EEF2]/30" aria-hidden="true">
        ·
      </span>

      {/* Copy button with decoration-accent (#2BF08A) and underline-offset-4 */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="text-[#E8EEF2] underline decoration-accent underline-offset-4 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-accent"
      >
        <span aria-live="polite">
          {copied ? "Copied" : "Copy email"}
        </span>
      </button>
    </div>
  );
}
