/**
 * Projects Feature — Types
 */

export interface Project {
  /** URL-friendly identifier */
  slug: string

  /** Tên dự án */
  title: string

  /** Mô tả ngắn */
  description: string

  /** Link demo (nếu có) */
  demoUrl?: string

  /** Link source code (GitHub) */
  repoUrl?: string

  /** Ảnh thumbnail */
  image?: string

  /** Các công nghệ sử dụng */
  techStack: string[]

  /** Nổi bật trên trang chủ? */
  featured: boolean
}
