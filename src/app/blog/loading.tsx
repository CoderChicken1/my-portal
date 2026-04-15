import { Skeleton } from '@/shared/ui'

export default function BlogLoading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Skeleton className="mb-4 h-10 w-32" />
      <Skeleton className="mb-12 h-5 w-72" />
      <div className="flex flex-col gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-lg" />
        ))}
      </div>
    </div>
  )
}
