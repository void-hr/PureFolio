"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, ArrowRight, ChevronDown, MapPin, Download } from "lucide-react";
import { SITE } from "@/lib/config";

const stats = [
  { n: "5", label: "Production Apps" },
  { n: "29K+", label: "Lines of TypeScript" },
  { n: "16", label: "Shared Packages" },
  { n: "100K+", label: "Article Views" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe mount flag, no way around this for the SSR/CSR animation boundary
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden"
    >
      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, var(--color-accent-soft) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-hover) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        {/* Status badge */}
        <div className={`flex flex-wrap items-center gap-3 mb-10 ${mounted ? "animate-fade-in-down" : "opacity-0"}`}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              border: "1px solid var(--color-accent-border)",
              background: "var(--color-accent-soft)",
              color: "var(--color-accent)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ background: "var(--color-success)" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-success)" }} />
            </span>
            Open to opportunities
          </span>
          <span
            className="hidden sm:flex items-center gap-1.5 text-sm"
            style={{ color: "var(--color-muted)" }}
          >
            <MapPin size={13} />
            {SITE.location}
          </span>
        </div>

        {/* Name */}
        <div className={mounted ? "animate-fade-in-up" : "opacity-0"}>
          <h1 className="text-[clamp(3.2rem,8.5vw,7rem)] font-black leading-[1.0] tracking-tight mb-6">
            <span className="block" style={{ color: "var(--color-text)" }}>
              Gaurav
            </span>
            <span className="block grad-text">Shandilya</span>
          </h1>
        </div>

        {/* Role line */}
        <div className={`${mounted ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
          <p
            className="text-[clamp(1.05rem,2.4vw,1.35rem)] font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Full Stack Developer
            <span style={{ color: "var(--color-accent-2)" }}> · </span>
            <span className="font-normal" style={{ color: "var(--color-muted)" }}>
              Node.js · React · TypeScript
            </span>
          </p>

          <p
            className="text-[clamp(0.95rem,1.9vw,1.12rem)] leading-relaxed max-w-xl mb-10"
            style={{ color: "var(--color-muted)" }}
          >
            I build backend services in Node.js and TypeScript and apps in React
            and React Native. At Mulyam I build and run the order, payment and
            delivery systems behind a grocery delivery business.
          </p>
        </div>

        {/* CTAs */}
        <div className={`flex flex-wrap items-center gap-3 mb-12 ${mounted ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
              boxShadow: "0 8px 28px var(--color-accent-soft)",
            }}
          >
            View Experience
            <ArrowRight size={15} />
          </a>
          <a
            href={SITE.resumeHref}
            download="Gaurav_Shandilya_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid var(--color-border-hover)",
              color: "var(--color-text)",
            }}
          >
            <Download size={14} />
            Resume
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: "var(--color-muted)" }}
          >
            <Mail size={14} />
            {SITE.email}
          </a>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 sm:flex sm:flex-wrap gap-x-10 gap-y-6 pt-8 border-t mb-10 ${mounted ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}
          style={{ borderColor: "var(--color-border)" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl md:text-3xl font-black font-mono tabular-nums leading-none mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                {s.n}
              </div>
              <p className="text-xs font-medium" style={{ color: "var(--color-muted)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div
          className={`flex items-center gap-5 flex-wrap ${mounted ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}
        >
          {[
            { icon: <Github size={15} />, label: "GitHub", href: SITE.github, show: true },
            { icon: <Linkedin size={15} />, label: "LinkedIn", href: SITE.linkedin, show: !!SITE.linkedin },
          ]
            .filter((link) => link.show)
            .map((link, i) => (
              <span key={link.label} className="flex items-center gap-5">
                {i > 0 && (
                  <span className="w-px h-4" style={{ background: "var(--color-border)" }} />
                )}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "var(--color-muted)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
                  }
                >
                  {link.icon}
                  {link.label}
                </a>
              </span>
            ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35 pointer-events-none">
        <span
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "var(--color-muted)" }}
        >
          Scroll
        </span>
        <ChevronDown size={14} className="animate-bounce-subtle" style={{ color: "var(--color-muted)" }} />
      </div>
    </section>
  );
}
