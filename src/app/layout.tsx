import type { Metadata } from 'next'

import '@/styles/globals.css'

import QueryProvider from '@/components/QueryProvider'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/Toaster'
import { siteConfig } from '@/config/site'
import { fontInter, fontVarela } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Sales Tracker'
  ],
  authors: [
    {
      name: 'RABrL',
      url: 'https://github.com/RABrL'
    }
  ],
  creator: 'RABrL',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontVarela.variable,
          fontInter.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <QueryProvider>{children}</QueryProvider>
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
