'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { Button } from '@/shared/ui'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group border-border bg-card relative overflow-hidden rounded-xl border p-6"
    >
      {/* Glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--primary) / 0.1), transparent 40%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="text-card-foreground group-hover:text-primary text-lg font-semibold transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground flex-1 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-secondary text-secondary-foreground rounded-md px-2 py-0.5 text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
