"use client";

import { Mail, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { SITE } from "@/lib/config";

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: SITE.githubHandle,
    href: SITE.github,
    external: true,
  },
  ...(SITE.linkedin
    ? [
        {
          icon: <Linkedin size={18} />,
          label: "LinkedIn",
          value: "Connect with me",
          href: SITE.linkedin,
          external: true,
        },
      ]
    : []),
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Contact"
          title="Get in touch."
          subtitle="I am open to full time roles. Email is the fastest way to reach me."
        />

        <div className="reveal grid sm:grid-cols-2 gap-3 mb-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:translate-x-1"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--color-surface-2)", color: "var(--color-muted)" }}
              >
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[11px] font-medium mb-0.5" style={{ color: "var(--color-muted)" }}>
                  {link.label}
                </span>
                <span className="block text-[14px] font-semibold truncate" style={{ color: "var(--color-text)" }}>
                  {link.value}
                </span>
              </div>
              <span style={{ color: "var(--color-muted)" }}>
                {link.external ? <ArrowUpRight size={16} /> : "→"}
              </span>
            </a>
          ))}
        </div>

        <a
          href={SITE.resumeHref}
          download="Gaurav_Shandilya_Resume.pdf"
          className="reveal inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{
            border: "1px solid var(--color-border-hover)",
            color: "var(--color-text)",
          }}
        >
          <Download size={15} />
          Download full resume
        </a>
      </div>
    </section>
  );
}
