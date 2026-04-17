import 'server-only'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { BlogPost } from '../types'

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts')

async function readPostFile(filename: string): Promise<BlogPost | null> {
  const slug = filename.replace(/\.mdx?$/, '')
  const filePath = path.join(POSTS_DIR, filename)
  const raw = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(raw)

  const published = data.published !== false
  if (!published) return null

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    content,
    publishedAt: String(data.publishedAt ?? ''),
    published,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  let files: string[]
  try {
    files = await fs.readdir(POSTS_DIR)
  } catch {
    return []
  }

  const mdxFiles = files.filter((f) => /\.mdx?$/.test(f))
  const posts = await Promise.all(mdxFiles.map(readPostFile))

  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  for (const ext of ['.mdx', '.md']) {
    try {
      return await readPostFile(`${slug}${ext}`)
    } catch {
      continue
    }
  }
  return null
}
