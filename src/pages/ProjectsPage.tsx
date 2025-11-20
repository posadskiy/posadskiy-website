import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getAllProjects, getProjectIconLink } from '@/constants/projects';
import { Card } from '@/components/Card';
import { Project } from '@/types';

export const ProjectsPage = () => {
  const projects = getAllProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            A collection of projects showcasing expertise in full-stack development, mobile apps,
            and system architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col group" hover={!selectedProject}>
                {/* Project Icon */}
                <div className="mb-4 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center border border-white/10 group-hover:border-violet-500/50 transition-colors">
                    <img
                      src={getProjectIconLink(project.icon)}
                      alt={project.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 rounded-2xl blur-xl transition-all duration-300" />
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Hover indicator */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 inline-flex items-center text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded-lg"
                  aria-label={`View details for ${project.name}`}
                >
                  <span className="text-sm font-medium">View details</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
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
                    <img
                      src={getProjectIconLink(selectedProject.icon)}
                      alt={`${selectedProject.name} icon`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.description}</p>
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

