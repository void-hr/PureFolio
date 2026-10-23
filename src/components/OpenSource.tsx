"use client";

import { GitPullRequest, PenTool, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { SITE } from "@/lib/config";

const contributedTo = ["OpenShift-Docs", "Mattermost", "Meshery", "Moja Global", "freeCodeCamp"];

export default function OpenSource() {
  return (
    <section id="open-source" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Open Source & Writing"
          title="Open source and writing."
          subtitle="Pull requests to open source projects and articles on GeeksforGeeks."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <div
            className="reveal rounded-2xl border p-6 md:p-7"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}
              >
                <GitPullRequest size={18} />
              </div>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium inline-flex items-center gap-1 transition-colors"
                style={{ color: "var(--color-muted)" }}
              >
                Profile <ArrowUpRight size={12} />
              </a>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-black font-mono tracking-tight" style={{ color: "var(--color-text)" }}>
                500+
              </span>
              <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                GitHub contributions
              </span>
            </div>
            <p className="text-sm mb-5" style={{ color: "var(--color-muted)" }}>
              Pull requests to OpenShift Docs, Mattermost, Meshery and more.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {contributedTo.map((name) => (
                <span
                  key={name}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-muted)",
                    background: "var(--color-surface-2)",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div
            className="reveal rounded-2xl border p-6 md:p-7"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)", transitionDelay: "0.08s" }}
          >
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}
              >
                <PenTool size={18} />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-black font-mono tracking-tight" style={{ color: "var(--color-text)" }}>
                100K+
              </span>
              <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                organic article views
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Web development articles on GeeksforGeeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
