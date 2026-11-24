import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frank Kodi — Software Engineer",
  description: "Portfolio of Frank Kodi — Software Engineer building clean, fast, and reliable web applications.",
  keywords: [
    "Frank Kodi",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Node.js"
  ],
  authors: [{ name: "Frank Kodi" }],
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#000412] text-[#E8EEF2] antialiased flex flex-col selection:bg-accent selection:text-[#000412]">
        {children}
      </body>
    </html>
  );
}
