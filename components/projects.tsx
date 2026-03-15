'use client'

import { motion } from 'framer-motion'
import { Github, Play, ExternalLink } from 'lucide-react'

type Project = {
  name: string
  description: string
  tags: string[]
  repo: string
  video: string
  videoLabel: string
  accent: string
}

const projects: Project[] = [
  {
    name: 'SmartEatAI',
    description:
      'AI assistant for nutritional analysis and recipe suggestion from food images, powered by machine learning and AI agents.',
    tags: ['ML', 'AI Agents', 'Python', 'Next.js', 'Ollama', 'LangChain', 'LangGraph', 'PostgreSQL'],
    repo: 'https://github.com/SmartEatAI/smart-eat-ai',
    video: 'https://www.youtube.com/watch?v=_5_w9H5EcRo',
    videoLabel: 'YouTube Demo',
    accent: 'from-violet-500/20 to-indigo-500/10',
  },
  {
    name: 'Pixela',
    description: 'Interactive platform for discovering and exploring TV series and films, where users can add reviews, rate content, and curate personalized watchlists.',
    tags: ['TypeScript', 'Next.js', 'React', 'Laravel', 'MySQL', 'TMDB API'],
    repo: 'https://github.com/rxy94/Pixela',
    video: 'https://vimeo.com/1093512042',
    videoLabel: 'Vimeo Demo',
    accent: 'from-fuchsia-500/20 to-purple-500/10',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8"
            >
              {/* Top gradient stripe */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`}
                aria-hidden
              />

              <div className="flex flex-1 flex-col p-6">
                {/* Name */}
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-primary/20 bg-primary/8 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub Repo
                  </a>
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/85"
                  >
                    <Play className="h-4 w-4" aria-hidden />
                    {project.videoLabel}
                    <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
