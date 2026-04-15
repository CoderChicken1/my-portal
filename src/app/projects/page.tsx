import type { Metadata } from 'next'
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/shared/motion'
import { ProjectCard } from '@/components/shared/project-card'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects I have built.',
}

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack SaaS application with authentication, payments, and real-time features built with Next.js and PostgreSQL.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Beta',
    description:
      'An open-source CLI tool for automating development workflows and deployments across multiple environments.',
    tech: ['Node.js', 'TypeScript', 'Docker', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Gamma',
    description:
      'A real-time collaborative editor with WebSocket support, rich text editing, and version history.',
    tech: ['React', 'Node.js', 'WebSocket', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Delta',
    description:
      'A mobile-first e-commerce platform with product search, filtering, cart management, and checkout flow.',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <FadeUp>
        <h1 className="mb-4 text-3xl font-bold">Projects</h1>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="text-muted-foreground mb-12">
          A selection of things I&apos;ve built. Each project links to source
          code and a live demo.
        </p>
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
