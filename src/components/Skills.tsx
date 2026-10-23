"use client";

import { Code2, Server, Database, Cloud, Terminal, Plug, type LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

const categories: { icon: LucideIcon; name: string; skills: string[] }[] = [
  {
    icon: Code2,
    name: "Frontend",
    skills: [
      "React.js", "Next.js", "React Native", "Expo",
      "Redux Toolkit", "RTK Query", "Tailwind CSS",
      "ShadCN UI", "Radix UI", "Tamagui", "Framer Motion",
    ],
  },
  {
    icon: Server,
    name: "Backend",
    skills: [
      "Node.js", "Express.js", "TypeScript", "REST APIs",
      "TypeORM", "Drizzle ORM", "JWT", "RBAC",
    ],
  },
  {
    icon: Database,
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase Firestore"],
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    skills: [
      "GCP Compute Engine", "Firebase Auth", "Firebase Hosting",
      "Firebase Messaging", "Crashlytics", "Docker", "Git",
      "CI/CD (GitHub Actions)", "Turborepo", "pnpm Workspaces",
    ],
  },
  {
    icon: Terminal,
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    icon: Plug,
    name: "Integrations",
    skills: ["Razorpay", "PhonePe", "Cashfree", "Google Maps API", "Push Notifications", "Google Sheets API"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Tech Stack"
          title="Tools I use."
          subtitle="Languages, frameworks, databases and cloud services I work with."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="reveal rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                transitionDelay: `${(i % 2) * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                  style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}
                >
                  <cat.icon size={16} strokeWidth={2.25} />
                </div>
                <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                      background: "var(--color-surface-2)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--color-border-hover)";
                      (e.currentTarget as HTMLSpanElement).style.color = "var(--color-text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--color-border)";
                      (e.currentTarget as HTMLSpanElement).style.color = "var(--color-muted)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
