'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-12 md:grid-cols-2 md:gap-20"
        >
          {/* Left: heading */}
          <div className="flex flex-col justify-center">
            <motion.p
              variants={fadeUp}
              className="mb-3 font-mono text-xs uppercase tracking-widest text-primary"
            >
              About me
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
            >
              Building at the frontier of AI &amp; web
            </motion.h2>
          </div>

          {/* Right: bio + links */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m a software developer with a strong focus on AI-powered
              applications. I enjoy combining modern frontend engineering with
              machine learning to create products that are both technically
              robust and genuinely useful.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My work spans from full-stack web development to computer vision
              pipelines and AI agents. I care deeply about clean code, great UX,
              and building things that actually ship.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/rxy94"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ruyi-xia-ye-b19853189"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
