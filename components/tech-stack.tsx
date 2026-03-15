'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiPytorch,
  SiGit,
  SiOpenjdk,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiTensorflow,
  SiJupyter,
  SiVercel as SiCloudIcon,
  SiAngular,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from 'react-icons/si'

type Tech = {
  name: string
  icon: React.ElementType
}

type Category = {
  label: string
  techs: Tech[]
}

const categories: Category[] = [
  {
    label: 'AI & Data',
    techs: [
      { name: 'Python', icon: SiPython },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Jupyter', icon: SiJupyter },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Java', icon: SiOpenjdk },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    label: 'DevOps & Cloud',
    techs: [
      { name: 'AWS', icon: SiCloudIcon },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    label: 'Frontend',
    techs: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Angular', icon: SiAngular },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

function TechChip({ name, icon: Icon }: Tech) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.06, y: -2 }}
      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
    >
      <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
      <span className="text-xs font-medium text-muted-foreground">{name}</span>
    </motion.div>
  )
}

export function TechStack() {
  return (
    <section id="tech" className="px-6 py-24 sm:py-32">
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
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tech Stack
          </h2>
        </motion.div>

        {/* Categories rendered as cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((cat, idx) => {
            const Icon = cat.techs[0].icon
            return (
              <motion.div
                key={cat.label}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mb-0 text-sm font-mono uppercase tracking-widest text-muted-foreground">
                    {cat.label}
                  </p>
                </div>

                <ul className="space-y-2">
                  {cat.techs.map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary/40" />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
