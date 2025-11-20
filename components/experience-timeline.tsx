import { Experience } from "contentlayer/generated";
import { formatDateRange } from "@/lib/utils";

type Props = {
  experiences: Experience[];
};

export function ExperienceTimeline({ experiences }: Props) {
  return (
    <div className="relative space-y-10">
      <span className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-ink-muted to-transparent" />
      {experiences
        .sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        )
        .map((exp) => {
          const { label } = formatDateRange(exp.startDate, exp.endDate);
          return (
            <article key={exp.slug} className="relative pl-10">
              <span className="absolute left-0 top-1 h-3 w-3 rounded-full border border-accent bg-canvas" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-sm text-ink-muted">{label}</p>
              </div>
              <p className="text-sm text-ink-muted">{exp.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-muted/80 px-3 py-1 text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {exp.impact && (
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {exp.impact.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
    </div>
  );
}

