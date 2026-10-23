"use client";

import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative pt-4 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal flex items-center gap-2 text-xs font-semibold tracking-[1.5px] uppercase mb-6 section-label">
          <span className="w-5 h-px section-label-line" />
          Education
        </div>
        <div
          className="reveal flex flex-wrap items-center gap-5 rounded-2xl border p-6 md:p-7"
          style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}
          >
            <GraduationCap size={22} />
          </div>
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-base md:text-lg font-bold" style={{ color: "var(--color-text)" }}>
              University Institute of Engineering and Technology, MDU
            </h3>
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Bachelor of Technology, Computer Science and Engineering, Rohtak, India
            </p>
          </div>
          <div
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full flex-shrink-0"
            style={{ background: "var(--color-surface-2)", color: "var(--color-muted)" }}
          >
            July 2023
          </div>
        </div>
      </div>
    </section>
  );
}
