import { allProjects, allExperiences, allServices } from "contentlayer/generated";
import { Hero } from "@/components/hero";
import { SectionShell } from "@/components/section-shell";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ServicesGrid } from "@/components/services-grid";
import { ContactLinks } from "@/components/contact-links";
import { ContactForm } from "@/components/contact-form";
import { AiPrompt } from "@/components/ai-prompt";

export default function HomePage() {
  const featuredProjects = allProjects
    .filter((project) => project.featured)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 4);

  const experiences = allExperiences;
  const services = allServices;

  return (
    <>
      <Hero />
      <SectionShell
        eyebrow="Case studies"
        title="Projects that still push me forward"
        description="Every build balances resilience with momentum. Here are a few highlights."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Working modes"
        title="I'm moving forward on several fronts"
        description="This is the same promise I made on the previous site—kept intact here."
      >
        <div className="space-y-4 text-base text-ink-muted">
          <p>
            At <span className="text-accent">day job</span>, I base on business
            priorities. My motto is that technology should be selected for a
            specific task, but not using one technology for all tasks.
          </p>
          <p>
            In my free time, I develop{" "}
            <span className="text-accent">
              solutions that help my family
            </span>
            . These solutions as applications, sites, or even scripts automate
            everyday processes, such as financial accounting, budget planning,
            or skills training. During this activity, I operate with unknown
            technologies, trying something new. The code and setup are always
            publicly available - anyone can use it for themselves.
          </p>
          <p>
            My <span className="text-accent">Open Source libraries</span> are
            self-contained components that appear during development, prepare
            for publishing, and improve throughout their life cycle.
          </p>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Career arc"
        title="Experience timeline"
        description="Enterprise programs, deep modernizations, and the people who make them possible."
      >
        <ExperienceTimeline experiences={experiences} />
      </SectionShell>

      <SectionShell
        eyebrow="Engagements"
        title="How I help teams"
        description="Pick the path that fits your runway, or mix and match."
      >
        <ServicesGrid services={services} />
      </SectionShell>

      <SectionShell
        eyebrow="AI ready"
        title="Need an intro in seconds?"
        description="Copy this prompt into your assistant to outline our collaboration."
      >
        <AiPrompt />
      </SectionShell>

      <SectionShell
        eyebrow="Let's build"
        title="Contact"
        description={'Share context about your platform, timeline, and what "great" looks like.'}
      >
        <div className="grid gap-6 lg:grid-cols-[0.7fr,1fr]">
          <div className="space-y-6">
            <ContactLinks />
            <p className="text-sm text-ink-muted">
              Prefer email? Drop me a note at{" "}
              <a href="mailto:hello@dimitri.dev" className="text-accent underline">
                hello@dimitri.dev
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </SectionShell>
    </>
  );
}

