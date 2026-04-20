import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Nền tảng thương mại điện tử full-stack với quản lý sản phẩm, giỏ hàng, thanh toán và real-time inventory tracking.',
    techStack: ['NestJS', 'Vue 3', 'MySQL', 'Redis'],
    gradient: 'from-violet-500/20 to-purple-500/20',
    emoji: '🛒',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Dashboard real-time cho doanh nghiệp. Hiển thị KPIs, biểu đồ tương tác và báo cáo tự động với WebSocket streaming.',
    techStack: ['React', 'D3.js', 'Node.js', 'Socket.IO'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    emoji: '📊',
  },
  {
    title: 'Task Management App',
    description:
      'Ứng dụng quản lý công việc với drag & drop Kanban board, team collaboration và notification system.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    gradient: 'from-emerald-500/20 to-green-500/20',
    emoji: '✅',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-violet-400 uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Dự án tiêu biểu
          </h2>
          <p className="text-muted-foreground mt-3">
            Những sản phẩm tôi đã xây dựng và tự hào nhất
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group border-border/40 bg-card/30 hover:border-border/80 flex flex-col overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5"
            >
              {/* Image Placeholder */}
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
                  {project.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border-border/40 bg-background/50 text-muted-foreground rounded-md border px-2 py-0.5 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
                  >
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
