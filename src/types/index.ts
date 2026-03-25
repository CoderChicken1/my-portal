export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
}

export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}
