import { Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/shared/ui'
import { siteConfig } from '@/shared/config/site'

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Section Header */}
        <p className="mb-2 text-sm font-semibold tracking-widest text-violet-400 uppercase">
          Liên hệ
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Cùng kết nối!
        </h2>
        <p className="text-muted-foreground mt-3 mb-12">
          Bạn có dự án thú vị hoặc cơ hội hợp tác? Hãy liên hệ với tôi nhé.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={siteConfig.links.email}
            className="group border-border/40 bg-card/30 flex items-center gap-4 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white">
              <Mail size={22} />
            </div>
            <div className="text-left">
              <p className="text-muted-foreground text-xs">Email</p>
              <p className="font-medium">your@email.com</p>
            </div>
          </a>

          <div className="border-border/40 bg-card/30 flex items-center gap-4 rounded-2xl border p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
              <MapPin size={22} />
            </div>
            <div className="text-left">
              <p className="text-muted-foreground text-xs">Vị trí</p>
              <p className="font-medium">TP. Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Button size="lg" asChild>
            <a href={siteConfig.links.email}>
              <Send size={16} className="mr-2" /> Gửi email cho tôi
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
