import {
  Linkedin,
  Send,
  Instagram,
  MessageCircle,
  Github,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const items = [
  {
    label: "Telegram",
    href: siteConfig.social.telegram,
    icon: Send,
  },
  {
    label: "Messenger",
    href: siteConfig.social.messenger,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: Instagram,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
  },
];

export function ContactLinks() {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-muted/80 bg-surface/70 px-4 py-3 text-ink transition hover:border-accent hover:text-accent"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

