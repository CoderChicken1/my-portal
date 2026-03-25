import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import { FadeIn } from './motion'

const socials = [
  { name: 'GitHub', href: 'https://github.com', icon: GitHubLogoIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInLogoIcon },
  { name: 'Twitter', href: 'https://twitter.com', icon: TwitterLogoIcon },
]

export function Footer() {
  return (
    <footer className="border-border/50 border-t">
      <FadeIn>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Johan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
