"use client";

import { useMemo, useState } from "react";
import { Project } from "contentlayer/generated";
import { ProjectCard } from "./project-card";
import {
  ProjectFilter,
  ProjectFilters,
} from "./project-filters";

type Props = {
  projects: Project[];
};

export function ProjectsExplorer({ projects }: Props) {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.tags.includes(filter));
  }, [projects, filter]);

  return (
    <div className="space-y-5">
      <ProjectFilters value={filter} onChange={setFilter} />
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <div
            key={project.slug}
            id={project.slug.replace("/projects/", "")}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

