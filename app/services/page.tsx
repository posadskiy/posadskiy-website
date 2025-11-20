import { allServices } from "contentlayer/generated";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServicesGrid } from "@/components/services-grid";

export const metadata: Metadata = {
  title: "Services · Dimitri Posadskiy",
  description:
    "Engagement models for modernization sprints, residencies, and due diligence.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Services"
        subtitle="Engagement menu"
      />
      <ServicesGrid services={allServices} />
    </div>
  );
}

