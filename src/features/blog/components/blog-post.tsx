import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FadeUp } from '@/shared/components'
import type { BlogPost } from '../types'

type BlogPostProps = {
  post: BlogPost
}

export function BlogPostView({ post }: BlogPostProps) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <FadeUp>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground mb-8 inline-block text-sm"
        >
          ← Back to blog
        </Link>
      </FadeUp>
      <FadeUp delay={0.05}>
        <div className="text-muted-foreground mb-3 flex items-center gap-2 text-xs">
          {date && <time dateTime={post.publishedAt}>{date}</time>}
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <span className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </span>
            </>
          )}
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
      </FadeUp>
      {post.description && (
        <FadeUp delay={0.15}>
          <p className="text-muted-foreground mb-12 text-lg">
            {post.description}
          </p>
        </FadeUp>
      )}
      <FadeUp delay={0.2}>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </FadeUp>
    </article>
  )
}
