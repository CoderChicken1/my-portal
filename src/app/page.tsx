import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

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

const featuredProjects = [
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
      <section className="flex flex-col items-start justify-center gap-6 py-24 md:py-32">
        <p className="text-muted-foreground text-sm font-medium">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your Name
        </h1>
        <h2 className="text-muted-foreground text-2xl font-medium sm:text-3xl">
          Fullstack Engineer
        </h2>
        <p className="text-muted-foreground max-w-lg">
          I build performant, accessible web applications with modern
          technologies. Passionate about clean code, great UX, and shipping
          products that matter.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/projects">
              View Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <h2 className="mb-8 text-2xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border-border bg-secondary text-secondary-foreground rounded-full border px-4 py-1.5 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View all <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="border-border bg-card flex flex-col gap-4 rounded-lg border p-6"
            >
              <h3 className="text-card-foreground text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-muted-foreground flex-1 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-secondary text-secondary-foreground rounded-md px-2 py-0.5 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
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
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
