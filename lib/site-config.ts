import type { Route } from "next";

type NavItem = {
  href: Route;
  label: string;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] satisfies NavItem[];

export const siteConfig = {
  name: "Dimitri Posadskiy",
  role: "Principal Java Developer",
  description:
    "Principal Java developer focused on resilient platforms, humane tooling, and mentoring engineering leaders.",
  url: "https://dimitri.dev",
  ogImage: "/main_photo.png",
  location: "Remote · EU",
  email: "hello@dimitri.dev",
  availability: "Open for principal/architecture engagements Q1-Q2 2026",
  nav: navItems,
  social: {
    telegram: "http://t.me/dimitri_posadskiy",
    linkedin: "https://linkedin.com/in/dimitri-posadskiy/",
    github: "https://github.com/posadskiy",
    messenger: "https://m.me/dmitry.posadsky",
    instagram: "https://instagram.com/dimitri.posadskiy",
  },
};

export type SiteConfig = typeof siteConfig;

