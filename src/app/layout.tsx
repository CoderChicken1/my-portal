import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Your Name — Fullstack Engineer',
    template: '%s | Your Name',
  },
  description: 'Fullstack JavaScript engineer. I build things for the web.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Your Name',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-[calc(100vh-8rem)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
