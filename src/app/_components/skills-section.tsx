import {
  Code,
  Server,
  Database,
  Cloud,
  GitBranch,
  Terminal,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-violet-500 to-purple-500',
    skills: [
      'Vue.js (2 & 3)',
      'React / Next.js',
      'TypeScript',
      'TailwindCSS',
      'HTML / CSS / SCSS',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      'Node.js / Express',
      'NestJS',
      'REST API Design',
      'WebSocket / Socket.IO',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-emerald-500 to-green-500',
    skills: ['MySQL / PostgreSQL', 'MongoDB', 'Redis', 'Prisma / TypeORM'],
  },
  {
    title: 'DevOps & Tools',
    icon: Cloud,
    color: 'from-amber-500 to-orange-500',
    skills: ['Docker', 'AWS (EC2, S3, RDS)', 'CI/CD (GitHub Actions)', 'Linux'],
  },
  {
    title: 'Practices',
    icon: GitBranch,
    color: 'from-rose-500 to-pink-500',
    skills: [
      'Clean Code / SOLID',
      'Design Patterns',
      'Git Flow',
      'Agile / Scrum',
    ],
  },
  {
    title: 'Currently Learning',
    icon: Terminal,
    color: 'from-indigo-500 to-violet-500',
    skills: [
      'System Design',
      'Microservices',
      'Kubernetes',
      'Solution Architecture',
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-violet-400 uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Kỹ năng & Công nghệ
          </h2>
          <p className="text-muted-foreground mt-3">
            Những công cụ tôi sử dụng hàng ngày để xây dựng sản phẩm
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group border-border/40 bg-card/30 hover:border-border/80 hover:bg-card/60 relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5"
            >
              {/* Gradient top border on hover */}
              <div
                className={`absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r ${category.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />

              {/* Icon + Title */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white`}
                >
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-border/40 bg-background/50 text-muted-foreground group-hover:text-foreground rounded-md border px-2.5 py-1 text-xs font-medium transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
