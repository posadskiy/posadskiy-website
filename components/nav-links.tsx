"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 rounded-full border border-muted bg-surface/70 px-2 py-1 text-sm font-medium">
      {siteConfig.nav.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === item.href
            : pathname?.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-full px-3 py-1 transition",
              isActive
                ? "bg-ink text-canvas"
                : "text-ink-muted hover:text-ink hover:bg-muted/50"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

