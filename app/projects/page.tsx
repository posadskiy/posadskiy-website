import { allProjects } from "contentlayer/generated";
import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Projects · Dimitri Posadskiy",
  description:
    "Explore Java, cloud, IoT, and security work across enterprise and indie projects.",
};

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) => b.weight - a.weight);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects"
        subtitle="All work"
      />
      <ProjectsExplorer projects={projects} />
    </div>
  );
}

