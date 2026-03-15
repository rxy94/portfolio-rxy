'use client'

import React, { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

const ScrollArrow = memo(function ScrollArrow() {
  const reduce = useReducedMotion()
  const arrowAnim = reduce ? undefined : { y: [0, 6, 0] }

  return (
    <button
      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      aria-label="Scroll to projects"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-transparent border-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-muted-foreground">scroll</span>
        <motion.div
          animate={arrowAnim}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground/40" aria-hidden />
        </motion.div>
      </motion.div>
    </button>
  )
})

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Availability badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-4 text-5xl font-bold tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl"
        >
          Ruyi Xia Ye
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-6 text-xl font-medium text-primary sm:text-2xl"
        >
          AI &amp; Software Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Building intelligent applications at the intersection of AI and modern
          web development. Turning complex problems into elegant, scalable
          solutions.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://github.com/rxy94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ruyi-xia-ye-b19853189"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            LinkedIn
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/85"
          >
            View Projects
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollArrow />
    </section>
  )
}
