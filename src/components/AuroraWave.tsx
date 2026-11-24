"use client";

export default function AuroraWave() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full min-w-[1000px] opacity-90"
        viewBox="0 0 1440 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main Gradient fading in/out at screen edges */}
          <linearGradient id="aurora-grad-main" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2BF08A" stopOpacity="0" />
            <stop offset="12%" stopColor="#2BF08A" stopOpacity="0.4" />
            <stop offset="42%" stopColor="#2BF08A" stopOpacity="1" />
            <stop offset="68%" stopColor="#A7FEC8" stopOpacity="0.9" />
            <stop offset="88%" stopColor="#2BF08A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2BF08A" stopOpacity="0" />
          </linearGradient>

          {/* Secondary Gradient */}
          <linearGradient id="aurora-grad-echo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2BF08A" stopOpacity="0" />
            <stop offset="20%" stopColor="#2BF08A" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#2BF08A" stopOpacity="0.6" />
            <stop offset="82%" stopColor="#2BF08A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2BF08A" stopOpacity="0" />
          </linearGradient>

          {/* Diffuse Wide Ambient Glow */}
          <filter id="aurora-blur-wide" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="32" result="blur" />
          </filter>

          {/* Focused Core Glow */}
          <filter id="aurora-blur-focused" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
          </filter>
        </defs>

        {/* 1. Deep Ambient Aura Glow */}
        <path
          d="M -40 400 C 220 480, 360 210, 580 200 C 800 190, 940 470, 1160 420 C 1280 390, 1380 280, 1480 250"
          stroke="url(#aurora-grad-main)"
          strokeWidth="64"
          strokeLinecap="round"
          filter="url(#aurora-blur-wide)"
          opacity="0.24"
        />

        {/* 2. Secondary Intertwined Soft Wave */}
        <path
          d="M -40 430 C 200 500, 380 260, 620 250 C 840 240, 960 510, 1180 440 C 1300 400, 1400 320, 1480 290"
          stroke="url(#aurora-grad-echo)"
          strokeWidth="20"
          strokeLinecap="round"
          filter="url(#aurora-blur-focused)"
          opacity="0.35"
        />

        {/* 3. Concentrated Focused Ribbon */}
        <path
          d="M -40 400 C 220 480, 360 210, 580 200 C 800 190, 940 470, 1160 420 C 1280 390, 1380 280, 1480 250"
          stroke="url(#aurora-grad-main)"
          strokeWidth="10"
          strokeLinecap="round"
          filter="url(#aurora-blur-focused)"
          opacity="0.7"
        />

        {/* 4. Crisp High-Definition Core Laser Wave Line */}
        <path
          d="M -40 400 C 220 480, 360 210, 580 200 C 800 190, 940 470, 1160 420 C 1280 390, 1380 280, 1480 250"
          stroke="url(#aurora-grad-main)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* 5. Delicate Harmonic Line */}
        <path
          d="M -40 430 C 200 500, 380 260, 620 250 C 840 240, 960 510, 1180 440 C 1300 400, 1400 320, 1480 290"
          stroke="url(#aurora-grad-echo)"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
