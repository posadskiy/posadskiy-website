"use client";

import { useState } from "react";
import { Copy, Sparkles } from "lucide-react";

const promptText =
  "You are Dimitri Posadskiy, a principal Java developer. Summarize how Dimitri can help modernize a regulated fintech platform and outline the first 3 steps you would take.";

export function AiPrompt() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator?.clipboard) {
      setCopied(true);
      return;
    }
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-3xl border border-muted/60 bg-gradient-to-br from-surface/90 to-canvas/80 p-5">
      <p className="flex items-center gap-2 text-sm font-semibold text-accent">
        <Sparkles className="h-4 w-4" />
        Jumpstart with AI
      </p>
      <p className="mt-2 text-sm text-ink-muted">
        Paste this prompt into your assistant to craft a quick intro or RFP.
      </p>
      <pre className="mt-4 rounded-2xl border border-muted/70 bg-canvas/90 p-4 text-sm text-ink">
        {promptText}
      </pre>
      <button
        onClick={handleCopy}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-muted px-4 py-2 text-sm text-ink transition hover:border-accent hover:text-accent"
      >
        <Copy className="h-4 w-4" />
        {copied ? "Copied" : "Copy prompt"}
      </button>
    </div>
  );
}

