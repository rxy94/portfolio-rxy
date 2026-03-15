'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          {/* Overline */}
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Let&apos;s connect
          </p>

          {/* Heading */}
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Open to collaborations and opportunities
          </h2>

          {/* Subtitle */}
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Whether you have an interesting project in mind, want to collaborate,
            or just want to say hi — feel free to reach out.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/rxy94"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ruyi-xia-ye-b19853189"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div className="mt-4 h-px w-full max-w-xs bg-border" aria-hidden />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ruyi Xia Ye. Crafted with
            Next.js &amp; Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
