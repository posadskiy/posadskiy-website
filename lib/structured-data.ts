import { allProjects } from ".contentlayer/generated";
import { siteConfig } from "./site-config";

export const buildPersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: Object.values(siteConfig.social),
    worksFor: {
      "@type": "Organization",
      name: "Black Circle Labs",
    },
  };
};

export const buildProjectSchemas = () => {
  return allProjects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/projects#${project.slug.replace("/projects/", "")}`,
    image: project.icon,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  }));
};

