import type { Metadata } from 'next'
import { BlogList } from '@/features/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, notes, and things I have learned.',
}

export default function BlogPage() {
  return <BlogList />
}
