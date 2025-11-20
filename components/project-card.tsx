"use client";

import { Project } from "contentlayer/generated";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="flex h-full flex-col rounded-3xl border border-muted/60 bg-canvas/70 p-5"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-muted/80 bg-surface/80">
          <Image
            src={project.icon}
            alt={project.title}
            fill
            sizes="48px"
            className="object-contain p-1.5"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
            {project.role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-ink-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-muted/70 px-3 py-1 text-ink-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 text-xs uppercase tracking-[0.3em] text-accent">
        {project.status}
      </div>
      {(project.github || project.live) && (
        <div className="mt-3 flex gap-3 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-ink-muted transition hover:text-accent"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-ink-muted transition hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
              Live
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

