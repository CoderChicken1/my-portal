import { Skeleton } from '@/shared/ui'

export default function ProjectsLoading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Skeleton className="mb-4 h-10 w-48" />
      <Skeleton className="mb-12 h-5 w-80" />
      <div className="grid gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-56 rounded-lg" />
        ))}
      </div>
    </div>
  )
}
