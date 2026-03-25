import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/shared/motion'
import { Spotlight } from '@/components/shared/spotlight'
import { ProjectCard } from '@/components/shared/project-card'
import type { Project } from '@/types'

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Prisma',
  'Docker',
  'AWS',
  'Git',
]

const featuredProjects: Project[] = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack SaaS application with authentication, payments, and real-time features.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Beta',
    description:
      'An open-source CLI tool for automating development workflows and deployments.',
    tech: ['Node.js', 'TypeScript', 'Docker'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <Spotlight className="rounded-2xl">
        <section className="flex flex-col items-start justify-center gap-6 py-24 md:py-32">
          <FadeUp>
            <p className="text-muted-foreground font-mono text-sm">
              Hi, my name is
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Johan
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-muted-foreground text-2xl font-medium sm:text-3xl">
              Fullstack Engineer
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              I build performant, accessible web applications with modern
              technologies. Passionate about clean code, great UX, and shipping
              products that matter.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </FadeUp>
        </section>
      </Spotlight>

      {/* Skills */}
      <section className="py-20">
        <FadeUp>
          <h2 className="mb-8 text-2xl font-bold">Tech Stack</h2>
        </FadeUp>
        <StaggerContainer className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <StaggerItem key={skill}>
              <span className="border-border bg-secondary text-secondary-foreground hover:border-primary/30 hover:bg-primary/5 inline-block rounded-full border px-4 py-1.5 text-sm font-medium transition-colors">
                {skill}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Divider */}
      <div className="via-border h-px bg-gradient-to-r from-transparent to-transparent" />

      {/* Featured Projects */}
      <section className="py-20">
        <FadeUp>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                View all <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeUp>
        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  )
}
