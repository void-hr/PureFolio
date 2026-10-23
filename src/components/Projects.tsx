import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Project {
  name: string;
  repo: string;
  summary: string;
  points: string[];
  stack: string[];
  shots?: { src: string; alt: string; width: number; height: number }[];
}

// Source links only: the old demo deployments aren't maintained.
const projects: Project[] = [
  {
    name: "GitHub Tracker",
    repo: "https://github.com/void-hr/github-tracker",
    summary: "Local dashboard for everything happening across my GitHub repos.",
    points: [
      "Shows commits, pull requests, reviews, CI status, milestones and the project board in one place.",
      "Single Go binary with the UI embedded. Fetches repos in parallel with batched GraphQL queries, caches results and stays within GitHub's rate limits.",
    ],
    stack: ["Go", "GraphQL", "JavaScript"],
  },
  {
    name: "Instafarm",
    repo: "https://github.com/void-hr/sense_assign",
    summary: "Online store for farm supplies where farmers buy credits through Cashfree.",
    points: [
      "Integrated the Cashfree payment gateway (test mode): the Express server creates the order and payment session, so the secret key never reaches the browser.",
      "Credits system with a live price preview, JWT login, cart and product search, with light and dark themes.",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Cashfree"],
    shots: [
      { src: "/projects/instafarm/home-light.jpg", alt: "Instafarm home page with farm supply products", width: 1200, height: 695 },
      { src: "/projects/instafarm/add-credits.jpg", alt: "Cashfree checkout for buying credits", width: 1200, height: 867 },
    ],
  },
  {
    name: "MusicKart",
    repo: "https://github.com/void-hr/musickart",
    summary: "Full-stack e-commerce store for music gear.",
    points: [
      "REST API for login, products, cart, orders and feedback, with JWT auth and bcrypt password hashing.",
      "Filtering, sorting and search run on the server, and checkout creates an invoice for each order.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    name: "Kan-Hub",
    repo: "https://github.com/void-hr/kan-hub",
    summary: "Kanban board with per-user task analytics.",
    points: [
      "Tasks with checklists, priorities and due dates, filtered by today, this week or this month.",
      "Analytics by status and priority computed with MongoDB aggregation pipelines.",
    ],
    stack: ["React", "Express", "MongoDB", "Formik + Yup"],
  },
  {
    name: "Jobify",
    repo: "https://github.com/void-hr/jobify",
    summary: "Job board with recruiter posting and skill-based search.",
    points: [
      "Recruiters can post and edit their own listings; anyone can browse and open job details.",
      "Search by job title and filter by required skills.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Personal Projects"
          title="Things I have built on my own."
          subtitle="Side projects. The code for each one is on GitHub."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`reveal rounded-2xl border p-6 flex flex-col ${p.shots ? "md:col-span-2" : ""}`}
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
                  {p.name}
                </h3>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} source on GitHub`}
                  className="text-xs font-medium inline-flex items-center gap-1 transition-colors"
                  style={{ color: "var(--color-muted)" }}
                >
                  <Github size={13} /> Source <ArrowUpRight size={12} />
                </a>
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>
                {p.summary}
              </p>
              {p.shots && (
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {p.shots.map((shot) => (
                    <Image
                      key={shot.src}
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="w-full h-48 object-cover object-top rounded-xl border"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  ))}
                </div>
              )}
              <ul className="space-y-2 mb-5 text-sm" style={{ color: "var(--color-text)" }}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span style={{ color: "var(--color-accent)" }}>›</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                      background: "var(--color-surface-2)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
