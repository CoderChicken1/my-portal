function getEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export const env = {
  siteUrl: getEnv('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000'),
  siteName: getEnv('NEXT_PUBLIC_SITE_NAME', 'Johan'),
  githubUrl: getEnv('NEXT_PUBLIC_GITHUB_URL', 'https://github.com'),
  linkedinUrl: getEnv('NEXT_PUBLIC_LINKEDIN_URL', 'https://linkedin.com'),
} as const
