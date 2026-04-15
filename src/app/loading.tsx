import { Skeleton } from '@/shared/ui'

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <Skeleton className="mb-4 h-12 w-64" />
      <Skeleton className="mb-8 h-6 w-96" />
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-48 rounded-lg" />
        <Skeleton className="h-48 rounded-lg" />
      </div>
    </div>
  )
}
