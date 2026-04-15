/**
 * Blog Feature — Types
 *
 * Các kiểu dữ liệu chỉ thuộc về nghiệp vụ Blog.
 * Nếu type nào cần dùng ở nhiều features khác, hãy di chuyển nó
 * sang src/shared/types/
 */

export interface BlogPost {
  /** URL-friendly identifier (vd: "hello-world") */
  slug: string

  /** Tiêu đề bài viết */
  title: string

  /** Mô tả ngắn hiển thị trong danh sách */
  description: string

  /** Nội dung chính (Markdown/MDX) */
  content: string

  /** Ngày xuất bản (ISO string) */
  publishedAt: string

  /** Đã xuất bản hay còn nháp? */
  published: boolean

  /** Tags phân loại */
  tags: string[]
}
