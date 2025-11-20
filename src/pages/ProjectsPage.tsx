import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getAllProjects } from '@/constants/projects';
import { Card } from '@/components/Card';
import { Project, ProjectCategory, ProjectStatus } from '@/types';

const CATEGORY_FILTERS = ['All', 'Fintech', 'Security', 'Learning', 'Enterprise', 'IoT'] as const;
type CategoryFilter = (typeof CATEGORY_FILTERS)[number];
const STATUS_STYLES: Record<ProjectStatus, string> = {
  'In production': 'bg-emerald-400 text-slate-900',
  Maintained: 'bg-sky-500 text-white',
  'R&D': 'bg-amber-400 text-slate-900',
  Community: 'bg-cyan-400 text-slate-900',
  Operational: 'bg-indigo-500 text-white',
  Beta: 'bg-purple-500 text-white',
  Active: 'bg-pink-500 text-white',
  'Open Source': 'bg-lime-400 text-slate-900',
  Shipped: 'bg-blue-500 text-white',
};

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

const DEFAULT_ICON = createIcon(
  <>
    <circle cx="12" cy="12" r="6" />
    <path d="M12 6v12M6 12h12" />
  </>,
);

const PROJECT_ICON_MAP: Record<string, ReactNode> = {
  'Cost Accounting': createIcon(
    <>
      <rect x="3" y="7" width="18" height="12" rx="3" />
      <path d="M16 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2" />
      <circle cx="16" cy="13" r="2" />
    </>,
  ),
  'Currency Converter': createIcon(
    <>
      <circle cx="12" cy="12" r="5.5" />
      <path d="M8 11h4.5a1.5 1.5 0 010 3H9m6.5-5H12a1.5 1.5 0 000 3H15" />
      <path d="M9 7.5L7.5 6 6 7.5M15 16.5L16.5 18 18 16.5" />
    </>,
  ),
  'Skill Repeater': createIcon(
    <>
      <path d="M7 7.5l4-4 4 4" />
      <path d="M11 3.5v7a3 3 0 003 3h2.5" />
      <path d="M17 16.5l-4 4-4-4" />
      <path d="M13 20.5v-7a3 3 0 00-3-3H7.5" />
    </>,
  ),
  'Study Everyday': createIcon(
    <>
      <path d="M4.5 6.5a2 2 0 012-2h5.5v13.5L6.5 16a2 2 0 00-2 2V6.5z" />
      <path d="M19.5 6.5a2 2 0 00-2-2H12v13.5L17.5 16a2 2 0 012 2V6.5z" />
    </>,
  ),
  'Bank work': createIcon(
    <>
      <path d="M3 9h18" />
      <path d="M5 9V7l7-4 7 4v2" />
      <path d="M6.5 9v8.5M11 9v8.5M17.5 9v8.5" />
      <path d="M4 19h16" />
    </>,
  ),
  'IoT work': createIcon(
    <>
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="5.5" r="2.5" />
      <circle cx="7" cy="17" r="2.5" />
      <circle cx="17" cy="18" r="2.5" />
      <path d="M9.2 8.2l5.6 2.1M9.2 15.8l5.6-2.1M7 9.5v5" />
      <path d="M17 8.5v6" />
    </>,
  ),
  'Swing Teacher': createIcon(
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M8 19h8M12 16v3" />
      <path d="M7 9h10M7 12h6" />
    </>,
  ),
  'Schedule Editor': createIcon(
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3.5v3M16 3.5v3" />
      <path d="M3.5 10h17" />
      <path d="M8 13h3M13 13h3M8 17h3M13 17h3" />
    </>,
  ),
  'Rest Security': createIcon(
    <>
      <path d="M12 3.5l7 3v5.5c0 4.2-3 8-7 9-4-1-7-4.8-7-9v-5.5l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>,
  ),
};

const getProjectIcon = (name: string) => PROJECT_ICON_MAP[name] ?? DEFAULT_ICON;

export const ProjectsPage = () => {
  const projects = getAllProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
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
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 rounded-2xl blur-xl transition-all duration-300" />
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.name}
                  </h3>
                  <div className="flex-1 flex flex-col gap-3">
                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                    {project.highlight && (
                      <p className="text-slate-200/80 text-sm italic">{project.highlight}</p>
                    )}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                          <span
                            key={`${project.name}-${tag}`}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-200 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.stack && project.stack.length > 0 && (
                      <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {project.stack.slice(0, 4).map((tech: string) => (
                          <span
                            key={`${project.name}-${tech}`}
                            className="px-2 py-1 rounded-md bg-slate-900/40 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
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
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                    aria-label="Close project details"
                  >
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

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center border border-white/10">
                  {getProjectIcon(selectedProject.name)}
                  </div>
                <div className="flex-1 space-y-2">
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
                  {selectedProject.highlight && (
                    <p className="text-slate-100 text-sm italic">{selectedProject.highlight}</p>
                  )}
                  {selectedProject.tags && selectedProject.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.tags.map((tag: string) => (
                        <span
                          key={`${selectedProject.name}-modal-${tag}`}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-100 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {selectedProject.stack && selectedProject.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {selectedProject.stack.map((tech: string) => (
                        <span
                          key={`${selectedProject.name}-stack-${tech}`}
                          className="px-2 py-1 rounded-md bg-slate-900/50 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                </div>

                <div className="text-sm text-slate-400">
                  More detailed case studies and technical breakdowns are coming soon. If you'd like to
                  know specifics about this project, feel free to reach out via the contact page.
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

