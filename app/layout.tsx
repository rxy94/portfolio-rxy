import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ruyi Xia Ye — AI & Software Developer',
  description:
    'Portfolio of Ruyi Xia Ye, an AI & Software Developer building intelligent applications with modern web technologies.',
  keywords: ['AI Developer', 'Software Engineer', 'React', 'Next.js', 'Python', 'Machine Learning'],
  authors: [{ name: 'Ruyi Xia Ye', url: 'https://github.com/rxy94' }],
  openGraph: {
    title: 'Ruyi Xia Ye — AI & Software Developer',
    description:
      'Portfolio of Ruyi Xia Ye, an AI & Software Developer building intelligent applications with modern web technologies.',
    url: 'https://rxy94.github.io',
    siteName: 'Ruyi Xia Ye Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruyi Xia Ye — AI & Software Developer',
    description: 'AI & Software Developer portfolio.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="portfolio-theme" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
