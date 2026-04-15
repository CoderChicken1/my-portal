/**
 * Cấu hình thông tin trang web (Site Config)
 *
 * Tập trung các thông tin metadata, URL, social links
 * để dùng trong layout.tsx, SEO, footer,...
 * Thay đổi ở đây sẽ phản ánh toàn bộ trang web.
 */
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Name — Fullstack Engineer',
  description: 'Fullstack JavaScript engineer. I build things for the web.',
  url: 'https://yourdomain.com',
  locale: 'en_US',

  links: {
    github: 'https://github.com/yourname',
    linkedin: 'https://linkedin.com/in/yourname',
    email: 'mailto:your@email.com',
  },
} as const

export type SiteConfig = typeof siteConfig
