import { Github, Linkedin, Mail, Send, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socials = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Send, href: siteConfig.social.telegram, label: "Telegram" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-muted/60 bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-ink-muted">
            {siteConfig.role}
          </p>
          <p className="text-xl font-semibold text-ink">{siteConfig.name}</p>
          <p className="text-sm text-ink-muted">{siteConfig.availability}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full border border-muted/70 p-2 text-ink-muted transition hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-muted px-4 py-2 text-sm text-ink-muted transition hover:border-accent hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

