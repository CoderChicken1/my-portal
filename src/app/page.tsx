import { HeroSection } from './_components/hero-section'
import { SkillsSection } from './_components/skills-section'
import { ProjectsSection } from './_components/projects-section'
import { ContactSection } from './_components/contact-section'

/**
 * Trang chủ — Page chỉ đóng vai trò "dây dẫn" (wire-up).
 * Nó import các Section Components và ráp chúng theo đúng thứ tự.
 * Không có business logic nào ở đây.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
