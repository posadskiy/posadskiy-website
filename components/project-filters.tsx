"use client";

import { cn } from "@/lib/utils";

export type ProjectFilter = "all" | "Fintech" | "Security" | "Learning" | "Enterprise" | "IoT";

const options: Array<{ label: string; value: ProjectFilter }> = [
  { label: "All work", value: "all" },
  { label: "Enterprise", value: "Enterprise" },
  { label: "Fintech", value: "Fintech" },
  { label: "Security", value: "Security" },
  { label: "Learning", value: "Learning" },
  { label: "IoT + Edge", value: "IoT" },
];

type Props = {
  value: ProjectFilter;
  onChange(value: ProjectFilter): void;
};

export function ProjectFilters({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              isActive
                ? "border-accent bg-accent/10 text-accent"
                : "border-muted text-ink-muted hover:border-accent/60 hover:text-ink"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

