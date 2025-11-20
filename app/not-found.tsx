import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-ink-muted">
        404
      </p>
      <h1 className="text-4xl font-semibold">That page stepped out.</h1>
      <p className="max-w-md text-ink-muted">
        The route you were after moved during the modernization. Let&apos;s get
        you back to the roadmap.
      </p>
      <Link
        href="/"
        className="rounded-full border border-accent bg-accent px-5 py-2 text-sm font-semibold text-canvas transition hover:bg-accent-soft"
      >
        Return home
      </Link>
    </div>
  );
}

