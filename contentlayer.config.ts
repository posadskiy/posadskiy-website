import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedSlug = (doc: { _raw: { flattenedPath: string } }) => {
  return `/${doc._raw.flattenedPath}`;
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    icon: { type: "string", required: true },
    cover: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    stack: { type: "list", of: { type: "string" }, required: true },
    role: { type: "string", required: true },
    status: { type: "string", required: true },
    featured: { type: "boolean", default: false },
    weight: { type: "number", default: 0 },
    github: { type: "string", required: false },
    live: { type: "string", required: false },
    publishedAt: { type: "date", required: false },
    highlight: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => computedSlug(doc),
    },
  },
}));

export const Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: `experience/**/*.mdx`,
  contentType: "mdx",
  fields: {
    company: { type: "string", required: true },
    role: { type: "string", required: true },
    location: { type: "string", required: true },
    startDate: { type: "date", required: true },
    endDate: { type: "date", required: false },
    summary: { type: "string", required: true },
    skills: { type: "list", of: { type: "string" }, required: true },
    impact: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => computedSlug(doc),
    },
  },
}));

export const Service = defineDocumentType(() => ({
  name: "Service",
  filePathPattern: `services/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    category: { type: "string", required: true },
    badge: { type: "string", required: false },
    deliverables: { type: "list", of: { type: "string" }, required: true },
    cta: { type: "string", required: false },
    highlight: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => computedSlug(doc),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Experience, Service],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor-link"],
          },
        },
      ],
    ],
  },
});

