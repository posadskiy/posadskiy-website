import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Array<string | undefined | false | null>) {
  return twMerge(inputs.filter(Boolean).join(" "));
}

export function formatDateRange(
  startDate: string,
  endDate?: string
): { label: string; isCurrent: boolean } {
  const start = format(new Date(startDate), "MMM yyyy");
  const end = endDate ? format(new Date(endDate), "MMM yyyy") : "Now";
  return { label: `${start} — ${end}`, isCurrent: !endDate };
}

