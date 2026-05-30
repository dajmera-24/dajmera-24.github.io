import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['preprint', 'conference', 'journal', 'workshop', 'thesis']),
    abstract: z.string().optional(),
    pdf: z.string().optional(),
    arxiv: z.string().optional(),
    code: z.string().optional(),
    award: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    repo: z.string().optional(),
    demo: z.string().optional(),
    paper: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { publications, projects, writing };
