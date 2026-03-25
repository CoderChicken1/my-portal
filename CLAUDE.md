@AGENTS.md

# Project: my-portal

Personal portfolio site built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## Getting started

```bash
pnpm install
pnpm dev          # Start dev server on http://localhost:3000
pnpm build        # Production build
pnpm test         # Run tests with Vitest
pnpm test:coverage # Run tests with coverage
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

- `NEXT_PUBLIC_SITE_URL` — Site URL (default: http://localhost:3000)
- `NEXT_PUBLIC_SITE_NAME` — Display name
- `NEXT_PUBLIC_GITHUB_URL` — GitHub profile URL
- `NEXT_PUBLIC_LINKEDIN_URL` — LinkedIn profile URL

Use `src/lib/env.ts` for type-safe access to env variables.

## Patterns

### Barrel exports

All modules use barrel exports via `index.ts`:

- `@/components/ui` — UI components (Button, Skeleton)
- `@/components/shared` — Layout components (Header, Footer, ThemeProvider)
- `@/lib` — Utilities (cn)
- `@/types` — Shared TypeScript types (Project, NavLink, SocialLink)

### Error handling

- `src/app/error.tsx` — Global error boundary (client component)
- `src/app/not-found.tsx` — Custom 404 page
- `src/app/loading.tsx` — Global loading skeleton
- Route-level `loading.tsx` for `/projects` and `/blog`

### Testing

Tests use Vitest + React Testing Library + jsdom. Test files are co-located with components: `component.test.tsx` next to `component.tsx`.

### TypeScript

Strict mode with `strictNullChecks` and `noUncheckedIndexedAccess` enabled.
