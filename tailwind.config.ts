import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        nightBlack: {
          DEFAULT: "#000412",
          surface: "#000412",
          border: "rgba(232, 238, 242, 0.15)",
        },
        iceWhite: {
          DEFAULT: "#E8EEF2",
          light: "#FFFFFF",
          muted: "#8A99A8",
        },
        auroraGreen: {
          DEFAULT: "#2BF08A",
          hover: "#42F596",
          glow: "#A7FEC8",
        },
      },
      fontFamily: {
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
