import { SITE } from "@/lib/config";

export default function Footer() {
  const links = [
    { href: `mailto:${SITE.email}`, label: "Email" },
    ...(SITE.linkedin ? [{ href: SITE.linkedin, label: "LinkedIn" }] : []),
    { href: SITE.github, label: "GitHub" },
  ];

  return (
    <footer className="border-t py-9" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          © {new Date().getFullYear()} {SITE.name}.
        </p>
        <div className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="muted-link text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
