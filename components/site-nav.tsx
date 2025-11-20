import Link from "next/link";
import type { Route } from "next";
import { siteConfig } from "@/lib/site-config";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { ArrowRight } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-muted/50 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm uppercase tracking-[0.3em] text-ink-muted">
            {siteConfig.role}
          </span>
          <span className="text-lg font-semibold text-ink">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center gap-3">
          <NavLinks />
          <ThemeToggle />
          <CTAButton href="/contact" />
        </div>
      </div>
    </header>
  );
}

function CTAButton({ href }: { href: Route }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 rounded-full border border-transparent bg-accent px-4 py-2 text-sm font-semibold text-canvas shadow-card transition hover:bg-accent-soft"
    >
      Start a project
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}

