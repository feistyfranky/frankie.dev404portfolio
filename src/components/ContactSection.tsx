"use client";

import { useState } from "react";
import { Mail, Send, Copy, Check, MapPin, Clock } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[#E8EEF2]/15 bg-[#000412] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2 font-mono">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let&apos;s build something great together.
              </h2>
              <p className="text-sm text-[#E8EEF2] mt-3 leading-relaxed">
                Have a project idea, an open engineering role, or just want to discuss how I can help your team? Send a note and I&apos;ll be in touch.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-5 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412] hover:border-accent transition-all">
              <span className="text-xs text-[#8A99A8] uppercase tracking-wider block mb-1 font-mono">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3 font-mono">
                <span className="text-sm sm:text-base text-white font-medium truncate">
                  {PORTFOLIO_DATA.developer.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-medium text-accent bg-[#000412] hover:bg-accent hover:text-[#000412] border border-accent/40 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Details */}
            <div className="space-y-3 font-mono">
              <div className="flex items-center gap-3 p-3.5 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Location</div>
                  <div className="text-xs text-[#8A99A8]">{PORTFOLIO_DATA.developer.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Response Time</div>
                  <div className="text-xs text-[#8A99A8]">Typically within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <span className="text-xs text-[#8A99A8] uppercase tracking-wider block mb-3 font-mono">
                Connect On
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.developer.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15 text-[#E8EEF2] hover:text-white hover:border-accent transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.developer.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15 text-[#E8EEF2] hover:text-accent hover:border-accent transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.developer.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/15 text-[#E8EEF2] hover:text-accent hover:border-accent transition-all"
                  aria-label="Twitter Profile"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[4px] border border-[#E8EEF2]/15 bg-[#000412]">
              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-[4px] bg-[#000412] border border-accent/40 text-accent mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You!</h3>
                  <p className="text-sm text-[#E8EEF2] max-w-sm mx-auto">
                    Your message has been received. I&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex text-xs text-accent hover:underline pt-2 font-mono"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#E8EEF2] mb-1.5">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 focus:border-accent text-white text-sm placeholder:text-[#8A99A8] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#E8EEF2] mb-1.5">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 focus:border-accent text-white text-sm placeholder:text-[#8A99A8] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#E8EEF2] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Website Redesign / Full-Time Role"
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 focus:border-accent text-white text-sm placeholder:text-[#8A99A8] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#E8EEF2] mb-1.5">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me a bit about what you need or what you are looking for..."
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#000412] border border-[#E8EEF2]/20 focus:border-accent text-white text-sm placeholder:text-[#8A99A8] outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-[4px] text-sm font-semibold text-[#000412] bg-accent hover:opacity-90 transition-opacity disabled:opacity-60 font-mono"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-[#000412]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
