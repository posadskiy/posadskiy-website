import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactLinks } from "@/components/contact-links";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact · Dimitri Posadskiy",
  description: "Send a message to kickoff your Java modernization project.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Contact"
        subtitle="Let's start the conversation"
      />
      <div className="grid gap-6 lg:grid-cols-[0.6fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-muted/60 bg-surface/60 p-6">
          <p className="text-sm text-ink-muted">
            You can send me message via the channels below or use the inline
            form on the right. I usually respond within 24-48h.
          </p>
          <ContactLinks />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

