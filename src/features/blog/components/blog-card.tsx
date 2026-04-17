import Link from 'next/link'
import type { BlogPost } from '../types'

type BlogCardProps = {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group border-border hover:border-foreground/20 block rounded-lg border p-6 transition-colors"
    >
      <div className="text-muted-foreground mb-2 flex items-center gap-2 text-xs">
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
      <h2 className="group-hover:text-foreground/90 mb-2 text-xl font-semibold">
        {post.title}
      </h2>
      {post.description && (
        <p className="text-muted-foreground text-sm">{post.description}</p>
      )}
    </Link>
  )
}
