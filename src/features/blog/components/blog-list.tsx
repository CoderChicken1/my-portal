import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/shared/motion'
import { getAllPosts } from '../actions/get-posts'
import { BlogCard } from './blog-card'

export async function BlogList() {
  const posts = await getAllPosts()

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <FadeUp>
        <h1 className="mb-4 text-3xl font-bold">Blog</h1>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="text-muted-foreground mb-12">
          Thoughts, notes, and things I&apos;ve learned.
        </p>
      </FadeUp>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <StaggerContainer className="flex flex-col gap-4">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  )
}
