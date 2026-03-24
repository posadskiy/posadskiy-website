import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getAllProjects } from '@/constants/projects';
import { Card } from '@/components/Card';
import { Project, ProjectCategory, ProjectRole, ProjectStatus, ProjectTag } from '@/types';

const CATEGORY_FILTERS = ['All', 'Fintech', 'Security', 'Learning', 'Enterprise', 'FamilyOps', 'IoT', 'Open Source'] as const;
type CategoryFilter = (typeof CATEGORY_FILTERS)[number];

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'R&D':       'bg-amber-400 text-slate-900',
  Beta:        'bg-purple-500 text-white',
  Live:        'bg-emerald-400 text-slate-900',
  Stable:      'bg-cyan-400 text-slate-900',
  Archived:    'bg-slate-500 text-white',
  Delivered:   'bg-violet-500 text-white',
};

const getLinkLabel = (link: string) =>
  link.includes('github.com') ? 'View on GitHub' : 'Visit Website';

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
  </svg>
);

const createIcon = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    className="w-10 h-10 text-violet-200"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const PROJECT_ICON_MAP: Record<string, ReactNode> = {
  Costy: createIcon(
    <>
      {/* Wallet with card pocket */}
      <path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path d="M15 13.5a2.5 2.5 0 015 0v1a2.5 2.5 0 01-5 0v-1z" />
      <path d="M3 13h12" />
    </>,
  ),
  Repeaty: createIcon(
    <>
      {/* Simple rotate-CW arrow */}
      <path d="M21 2v6h-6" />
      <path d="M21 13a9 9 0 1 1-3-7.7L21 8" />
    </>,
  ),
  'Currency Converter': createIcon(
    <>
      {/* Bidirectional exchange arrows */}
      <path d="M7 6H3l4-4" />
      <path d="M3 6h15a3 3 0 010 6" />
      <path d="M17 18h4L17 22" />
      <path d="M21 18H6a3 3 0 010-6" />
    </>,
  ),
  'Study Everyday': createIcon(
    <>
      {/* Open book */}
      <path d="M2 6s2.5-2 5-2 5 2 5 2v14s-2.5-1.5-5-1.5S2 20 2 20V6z" />
      <path d="M22 6s-2.5-2-5-2-5 2-5 2v14s2.5-1.5 5-1.5 5 1.5 5 1.5V6z" />
      <path d="M12 6v14" />
    </>,
  ),
  'Java Swing Tutor': createIcon(
    <>
      {/* Desktop monitor with code symbols */}
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M8 9l-2 2 2 2M16 9l2 2-2 2M11 13l2-4" />
    </>,
  ),
  'Bank work': createIcon(
    <>
      {/* Bank building — pediment + columns + base */}
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M5 10v11M10 10v11M14 10v11M19 10v11" />
      <path d="M3 10L12 3l9 7" />
    </>,
  ),
  'IoT work': createIcon(
    <>
      {/* Mesh of five connected nodes */}
      <circle cx="12" cy="12" r="2" />
      <circle cx="4.5" cy="4.5" r="2" />
      <circle cx="19.5" cy="4.5" r="2" />
      <circle cx="4.5" cy="19.5" r="2" />
      <circle cx="19.5" cy="19.5" r="2" />
      <path d="M6.2 6.2l4 4M17.8 6.2l-4 4M6.2 17.8l4-4M17.8 17.8l-4-4" />
    </>,
  ),
  'Schedule Editor': createIcon(
    <>
      {/* Calendar grid */}
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 2v4M16 2v4M3 9h18" />
      <path d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2M15 17h2" />
    </>,
  ),
  'User Component React': createIcon(
    <>
      {/* Person silhouette + component add (+) */}
      <circle cx="10" cy="8" r="4" />
      <path d="M3 21v-1a7 7 0 0114 0v1" />
      <path d="M19 8h4M21 6v4" />
    </>,
  ),
  'Auth Component React': createIcon(
    <>
      {/* Padlock */}
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
      <path d="M12 17v1.5" />
    </>,
  ),
  'Rest Security': createIcon(
    <>
      {/* Shield with checkmark */}
      <path d="M12 3L4 7v5c0 4.5 3.4 8.7 8 9.9 4.6-1.2 8-5.4 8-9.9V7l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </>,
  ),
};

const getProjectIcon = (name: string) => PROJECT_ICON_MAP[name] ?? PROJECT_ICON_MAP['Rest Security'];

export const ProjectsPage = () => {
  const projects = getAllProjects().sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const handleClose = () => setSelectedProject(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory as ProjectCategory),
        );

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="text-gradient">My Projects</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing expertise as a principal backend developer, mobile
            apps, and system architecture
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORY_FILTERS.map((category) => {
            const isActive = category === selectedCategory;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  isActive
                    ? 'bg-violet-600/90 text-white border-violet-500 shadow-lg shadow-violet-500/30'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center text-slate-400 py-12">
            No projects in this category yet. Please check back soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="flex flex-col h-full group relative overflow-visible"
                  hover={!selectedProject}
                  onClick={() => setSelectedProject(project)}
                  ariaLabel={`View details for ${project.name}`}
                >
                  <span
                    className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${STATUS_STYLES[project.status]}`}
                  >
                    {project.status}
                  </span>

                  {/* Project Icon */}
                  <div className="mb-4 relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center border border-white/10 group-hover:border-violet-500/50 transition-colors">
                      {getProjectIcon(project.name)}
                    </div>
                    <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 rounded-2xl blur-xl transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.name}
                  </h3>

                  <div className="flex-1 flex flex-col gap-3">
                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>


                    {project.tags && project.tags.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Tags
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag: ProjectTag) => (
                            <span
                              key={`${project.name}-${tag}`}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-200 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.stack && project.stack.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map((tech: string) => (
                            <span
                              key={`${project.name}-${tech}`}
                              className="px-2 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wide text-slate-400 bg-slate-900/40 border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.link && (
                      <div className="mt-auto pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-violet-300 border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:text-violet-100 hover:border-violet-400/50 transition-all"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <ExternalLinkIcon className="h-3.5 w-3.5" />
                          {getLinkLabel(project.link)}
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-details"
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={handleClose}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg"
            >
              <Card className="flex flex-col gap-4" hover={false}>
                {/* Modal header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                  <button
                    type="button"
                    onClick={handleClose}
                    title="Close (Esc)"
                    className="group/close flex items-center gap-1.5 pl-2 pr-1.5 py-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                    aria-label="Close project details"
                  >
                    <kbd className="hidden group-hover/close:inline-block text-[10px] font-mono text-slate-500 bg-white/5 border border-white/10 rounded px-1 py-0.5 leading-none">
                      esc
                    </kbd>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center border border-white/10 shrink-0">
                    {getProjectIcon(selectedProject.name)}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[selectedProject.status]}`}
                      >
                        {selectedProject.status}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {selectedProject.body && (
                      <p className="border-l-2 border-violet-500/40 pl-3 text-violet-100/80 text-sm italic leading-relaxed">
                        {selectedProject.body}
                      </p>
                    )}

                    {selectedProject.tags && selectedProject.tags.length > 0 && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Tags
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag: ProjectTag) => (
                            <span
                              key={`${selectedProject.name}-modal-${tag}`}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-100 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.stack && selectedProject.stack.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((tech: string) => (
                            <span
                              key={`${selectedProject.name}-stack-${tech}`}
                              className="px-2 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wide text-slate-400 bg-slate-900/50 border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.roles && selectedProject.roles.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Role
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.roles.map((role: ProjectRole) => (
                            <span
                              key={`${selectedProject.name}-role-${role}`}
                              className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/25"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.link && (
                      <div className="pt-2">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-violet-300 border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:text-violet-100 hover:border-violet-400/50 transition-all"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          {getLinkLabel(selectedProject.link)}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
