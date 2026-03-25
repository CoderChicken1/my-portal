import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects I have built.',
}

const projects = [
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
      <h1 className="mb-4 text-3xl font-bold">Projects</h1>
      <p className="text-muted-foreground mb-12">
        A selection of things I&apos;ve built. Each project links to source code
        and a live demo.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border-border bg-card flex flex-col gap-4 rounded-lg border p-6 transition-shadow hover:shadow-md"
          >
            <h2 className="text-card-foreground text-xl font-semibold">
              {project.title}
            </h2>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
