# Architecture Guide — my-portal

## Cấu trúc Thư mục (Feature-Based Architecture)

```text
src/
├── app/                    # 🔌 Layer 1: Next.js App Router (ROUTING ONLY)
│   ├── layout.tsx          #    Root layout — chỉ dây dẫn (wire-up)
│   ├── page.tsx            #    Trang chủ
│   ├── globals.css         #    Design tokens (Tailwind, CSS Variables)
│   ├── about/              #    /about page
│   ├── blog/               #    /blog pages
│   └── projects/           #    /projects pages
│
├── features/               # ⭐ Layer 2: Business Logic (NGHIỆP VỤ)
│   ├── blog/               #    Mọi thứ về Blog
│   │   ├── index.ts        #    Barrel export (Public API)
│   │   ├── components/     #    UI chỉ dùng cho Blog
│   │   ├── actions/        #    Server Actions / data fetching
│   │   ├── hooks/          #    React hooks riêng
│   │   └── types/          #    Types/Interfaces riêng
│   └── projects/           #    Mọi thứ về Projects
│       ├── index.ts
│       ├── components/
│       ├── actions/
│       └── types/
│
├── shared/                 # 🧱 Layer 3: Shared Resources (DÙNG CHUNG)
│   ├── ui/                 #    Design System (shadcn/ui components)
│   ├── layouts/            #    Navbar, Footer, Sidebar
│   ├── lib/                #    Utility functions (cn, formatDate,...)
│   ├── config/             #    Site config, ENV, constants
│   └── types/              #    Global types (ApiResponse, Pagination,...)
│
└── content/                # 📝 Static Content (MDX/Markdown files)
    └── posts/
```

## Quy tắc Vàng

### 1. Page = Dây dẫn (Wire-up only)

```tsx
// ✅ ĐÚNG — page.tsx chỉ import và ráp
import { BlogList } from '@/features/blog'
export default function BlogPage() {
  return <BlogList />
}

// ❌ SAI — page.tsx chứa business logic
export default function BlogPage() {
  const posts = await db.posts.findMany() // Logic ở đây → SAI
  return posts.map((p) => <div>{p.title}</div>)
}
```

### 2. Feature Isolation (Cô lập nghiệp vụ)

```tsx
// ✅ ĐÚNG — import từ barrel export
import { BlogCard } from '@/features/blog'

// ❌ SAI — import trực tiếp file nội bộ
import { BlogCard } from '@/features/blog/components/blog-card'
```

### 3. Shared = Chỉ thứ THỰC SỰ dùng chung

Trước khi đặt component/type vào `shared/`, hãy tự hỏi:

> "Nếu xóa feature Blog, cái này có còn lý do tồn tại không?"

- **Có** → Đặt vào `shared/` (vd: Button, cn(), siteConfig)
- **Không** → Đặt vào `features/blog/` (vd: BlogCard, BlogPost type)

### 4. Dependency Flow (Hướng phụ thuộc)

```
app/ → features/ → shared/
 ✅      ✅          ✅

shared/ → features/      ❌ KHÔNG ĐƯỢC
features/blog → features/projects  ❌ KHÔNG ĐƯỢC (cross-feature)
```

## Thêm Component shadcn/ui mới

```bash
npx shadcn add input
# File sẽ tự động được tạo tại src/shared/ui/input.tsx
# (nhờ cấu hình components.json đã cập nhật)
```

Sau khi thêm, nhớ re-export trong `src/shared/ui/index.ts`.
