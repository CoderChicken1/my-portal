/**
 * Shared Types — Kiểu dữ liệu dùng chung toàn app
 *
 * Chỉ đặt ở đây những type mà NHIỀU features cùng cần.
 * Type riêng biệt cho Blog, Project,... hãy đặt vào feature tương ứng.
 */

/** Cấu trúc phản hồi API chuẩn (nếu sau này có backend) */
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

/** Pagination metadata cho list endpoints */
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
}

/** Phản hồi API có phân trang */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationMeta
}
