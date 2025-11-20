import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allProjects } from "contentlayer/generated";
import { siteConfig } from "@/lib/site-config";
import { HeroSparkles } from "./hero-sparkles";

const stats = [
  { label: "Years shipping Java", value: "12+" },
  { label: "Systems modernized", value: "35" },
  { label: "Engineers coached", value: "120+" },
];

export function Hero() {
  const featured = allProjects
    .filter((project) => project.featured)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-muted/60 bg-surface/40 p-6 sm:p-10">
      <HeroSparkles />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-ink-muted">
            {siteConfig.role}
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
            Smart, stable platforms for teams who live in Java.
          </h1>
          <p className="max-w-2xl text-lg text-ink-muted">
            I help product squads modernize mission-critical JVM systems while
            mentoring the engineers who will own them next. Dark interfaces,
            bright outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20"
            >
              Browse Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-muted px-5 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Book a discovery call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm uppercase tracking-[0.3em] text-ink-muted">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-bold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="space-y-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-muted/80">
            <Image
              src="/main_photo.png"
              alt="Dimitri Posadskiy"
              fill
              sizes="(min-width: 1024px) 320px, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="rounded-3xl border border-muted/70 bg-canvas/70 p-4">
            <p className="text-xs uppercase tracking-[0.4em] text-ink-muted">
              Featured builds
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {featured.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects#${project.slug.replace("/projects/", "")}`}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-transparent px-3 py-2 transition hover:border-muted/60 hover:bg-surface/60"
                  >
                    <div>
                      <p className="font-semibold">{project.title}</p>
                      <p className="text-ink-muted">{project.summary}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

