'use client'

import { Button } from '@/shared/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground max-w-md text-center">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
