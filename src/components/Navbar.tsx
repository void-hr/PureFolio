"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { SITE } from "@/lib/config";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "Open Source" },
  { href: "#contact", label: "Contact" },
];

// Every scroll-tracked section maps to the nav tab it should light up —
// "education" has no tab of its own, so it stays attributed to "skills"
// instead of dropping the highlight while it's in view.
const sectionNav: { id: string; nav: string }[] = [
  { id: "hero", nav: "" },
  { id: "experience", nav: "experience" },
  { id: "skills", nav: "skills" },
  { id: "education", nav: "skills" },
  { id: "projects", nav: "projects" },
  { id: "open-source", nav: "open-source" },
  { id: "contact", nav: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      for (const { id, nav } of sectionNav) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= top - 140) current = nav;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      {scrolled && (
        <div
          className="absolute inset-0 border-b"
          style={{
            background: "color-mix(in oklch, var(--color-bg) 82%, transparent)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "var(--color-border)",
          }}
        />
      )}

      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Logo */}
        <a
          href="#hero"
          className="text-[17px] font-black tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          GS
          <span
            style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            .
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{ color: isActive ? "var(--color-text)" : "var(--color-muted)" }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)";
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "var(--color-surface-2)", opacity: 0.8 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={SITE.resumeHref}
            download="Gaurav_Shandilya_Resume.pdf"
            aria-label="Download resume"
            className="hidden sm:inline-flex w-9 h-9 rounded-xl items-center justify-center border transition-all duration-200"
            style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
          >
            <Download size={15} />
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white
              hover:opacity-90 transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
              boxShadow: "0 4px 16px var(--color-accent-soft)",
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
