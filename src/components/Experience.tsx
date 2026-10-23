"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Role {
  company: string;
  companyNote: string;
  title: string;
  dates: string;
  location: string;
  current: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
}

const roles: Role[] = [
  {
    company: "Mulyam (ImFresh)",
    companyNote: "Grocery delivery",
    title: "Full Stack Developer",
    dates: "Feb 2024 – Present",
    location: "Remote, India",
    current: true,
    summary:
      "Full stack developer on a grocery delivery business: one backend API serving 5 production apps (customer website, two mobile apps, store manager app and admin dashboard).",
    bullets: [
      "Built the backend in TypeScript with Node.js, Express, TypeORM and PostgreSQL. It handles orders, payments, inventory, delivery and invoicing across 23 modules (about 29,000 lines of code).",
      "Set up a Turborepo monorepo with 16 shared packages for auth, permissions, UI, validation and database code, which cut duplicated code by 40%.",
      "Built two React Native (Expo) apps for iOS and Android with Firebase login, push notifications, Razorpay payments and Crashlytics.",
      "Built the admin dashboard (27 modules) in React, Material UI and Redux Toolkit, with role based access for staff.",
      "Deployed the services on GCP Compute Engine with Docker and Firebase Hosting, with separate dev, QA and production environments.",
      "Set up a second monorepo for an agricultural cooperative platform and reworked its CI with remote caching and affected only builds. Local builds got 50% faster and CI time dropped from 13 to 7.5 minutes.",
      "Built the farmer app (Expo) and web platform (Next.js, React 19) for it using Drizzle ORM, PostgreSQL and Zod.",
    ],
    stack: [
      "React", "Next.js 16", "React Native", "Expo", "TypeScript", "Express",
      "TypeORM", "Drizzle ORM", "PostgreSQL", "Redux Toolkit", "Material-UI",
      "Turborepo", "pnpm", "GCP", "Docker", "Firebase", "Razorpay",
    ],
  },
  {
    company: "Stealth Mode Startup",
    companyNote: "Web platform",
    title: "Full Stack Developer",
    dates: "Aug 2023 – Feb 2024",
    location: "Remote, India",
    current: false,
    summary:
      "Early stage startup where I built the main web application.",
    bullets: [
      "Built a web application end to end with Next.js, PostgreSQL and RTK Query, including 15+ REST API endpoints.",
      "Reworked the database schema and slow queries, bringing average API response time down by 25%.",
      "Built the frontend with Tailwind CSS and ShadCN UI and used server side rendering and code splitting to make pages load 30% faster.",
    ],
    stack: ["Next.js", "PostgreSQL", "RTK Query", "Tailwind CSS", "ShadCN UI"],
  },
  {
    company: "SBFC Finance",
    companyNote: "Internship",
    title: "Software Development Engineer Intern",
    dates: "May 2020 – Aug 2020",
    location: "Remote, India",
    current: false,
    summary: "Built an internal LMS style dashboard for 50+ employees, improving data comprehension by 10x.",
    bullets: [],
    stack: [],
  },
];

export default function Experience() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = refs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && idx !== -1) {
            setVisible((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1 }
    );
    const nodes = refs.current;
    nodes.forEach((r) => r && observer.observe(r));
    return () => nodes.forEach((r) => r && observer.unobserve(r));
  }, []);

  return (
    <section id="experience" className="relative py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Experience"
          title="Where I have worked."
          subtitle="3+ years as a full stack developer, plus an internship."
        />

        <div className="flex flex-col gap-6">
          {roles.map((role, i) => (
            <div
              key={role.company}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="rounded-2xl border p-6 md:p-8 transition-all duration-700"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                opacity: visible.has(i) ? 1 : 0,
                transform: visible.has(i) ? "translateY(0)" : "translateY(20px)",
                transitionTimingFunction: "var(--ease-out)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <h3
                      className="text-xl md:text-2xl font-bold tracking-tight"
                      style={{ color: "var(--color-text)" }}
                    >
                      {role.company}
                    </h3>
                    {role.current && (
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                        style={{
                          background: "var(--color-success-soft)",
                          color: "var(--color-success)",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--color-success)" }}
                        />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                    {role.title} <span style={{ color: "var(--color-muted)" }}>· {role.companyNote}</span>
                  </p>
                </div>

                <div
                  className="flex flex-col items-start sm:items-end gap-1 text-xs font-mono flex-shrink-0"
                  style={{ color: "var(--color-muted)" }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} />
                    {role.dates}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} />
                    {role.location}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 mt-3" style={{ color: "var(--color-muted)" }}>
                {role.summary}
              </p>

              <ul className="flex flex-col gap-2.5 mb-6">
                {role.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                    <span
                      className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "var(--color-accent)" }}
                    />
                    <span style={{ opacity: 0.88 }}>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                      background: "var(--color-surface-2)",
                    }}
                  >
                    {tech}
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
