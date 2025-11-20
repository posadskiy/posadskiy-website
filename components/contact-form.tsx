"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormInput } from "@/lib/contact";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormInput) => {
    setStatus("idle");
    setMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      setStatus("success");
      setMessage("Thanks! I will reply within two business days.");
      reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl border border-muted/70 bg-canvas/80 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            className="w-full rounded-2xl border border-muted bg-transparent px-3 py-2 text-sm outline-none transition focus:border-accent"
            placeholder="Ada Lovelace"
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            className="w-full rounded-2xl border border-muted bg-transparent px-3 py-2 text-sm outline-none transition focus:border-accent"
            placeholder="you@company.com"
            type="email"
            {...register("email")}
          />
        </Field>
      </div>
      <Field label="Company (optional)" error={errors.company?.message}>
        <input
          className="w-full rounded-2xl border border-muted bg-transparent px-3 py-2 text-sm outline-none transition focus:border-accent"
          placeholder="NeoBank"
          {...register("company")}
        />
      </Field>
      <Field label="What can I help with?" error={errors.message?.message}>
        <textarea
          className="min-h-[160px] w-full rounded-2xl border border-muted bg-transparent px-3 py-2 text-sm outline-none transition focus:border-accent"
          placeholder="Share context, timelines, success metrics…"
          {...register("message")}
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-canvas transition hover:bg-accent-soft disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
        {message && (
          <p
            className={`text-sm ${
              status === "error" ? "text-red-400" : "text-ink-muted"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block space-y-2 text-sm">
      <span className="text-xs uppercase tracking-[0.3em] text-ink-muted">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}

