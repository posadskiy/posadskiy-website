import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionShellProps) {
  return (
    <section className="rounded-[32px] border border-muted/60 bg-surface/40 p-6 sm:p-10">
      <div
        className={cn(
          "mx-auto max-w-3xl space-y-3",
          align === "center" && "text-center"
        )}
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.4em] text-ink-muted">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-base text-ink-muted">{description}</p>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

