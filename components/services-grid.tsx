import { Service } from "contentlayer/generated";
import Link from "next/link";

type Props = {
  services: Service[];
};

export function ServicesGrid({ services }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {services
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((service) => (
          <article
            key={service.slug}
            className="flex h-full flex-col rounded-3xl border border-muted/70 bg-canvas/80 p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              {service.badge && (
                <span className="rounded-full border border-muted px-3 py-1 text-xs uppercase tracking-[0.3em] text-ink-muted">
                  {service.badge}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-ink-muted">
              {service.category}
            </p>
            <p className="mt-3 text-base text-ink-muted">{service.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              {service.highlight && (
                <p className="text-sm font-semibold text-accent">
                  {service.highlight}
                </p>
              )}
              {service.cta && (
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-ink transition hover:text-accent"
                >
                  {service.cta}
                </Link>
              )}
            </div>
          </article>
        ))}
    </div>
  );
}

