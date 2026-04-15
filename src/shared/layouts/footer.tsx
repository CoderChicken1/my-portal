import { Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '@/shared/config/site'

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: 'GitHub' },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: siteConfig.links.email, label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-border/40 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        {/* Brand */}
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-foreground font-semibold">
            {siteConfig.name}
          </span>
          . Built with Next.js & ❤️
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border/40 text-muted-foreground hover:text-foreground rounded-lg border p-2.5 transition-all hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
