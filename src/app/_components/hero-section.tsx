import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { Button } from '@/shared/ui'
import { siteConfig } from '@/shared/config/site'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="border-border/60 bg-card/50 text-muted-foreground mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm">
          <Sparkles size={14} className="text-violet-400" />
          <span>Open to new opportunities</span>
        </div>

        {/* Name */}
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="text-foreground block">Xin chào, tôi là</span>
          <span className="mt-2 block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>

        {/* Role */}
        <p className="text-muted-foreground mx-auto mb-6 max-w-xl text-lg md:text-xl">
          Fullstack Developer — Đam mê xây dựng các ứng dụng web hiệu năng cao,
          tập trung vào trải nghiệm người dùng và kiến trúc hệ thống sạch.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              Xem dự án <ArrowRight size={16} className="ml-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Download size={16} className="mr-1" /> Tải CV
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '2+', label: 'Năm kinh nghiệm' },
            { value: '10+', label: 'Dự án hoàn thành' },
            { value: '5+', label: 'Công nghệ thành thạo' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-foreground text-3xl font-bold">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
