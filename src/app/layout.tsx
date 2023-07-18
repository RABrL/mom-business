import type { Metadata } from 'next'

import '@/styles/globals.css'

import { siteConfig } from '@/config/site'
import { fontVarela, fontInter } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/Toaster'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { ThemeProvider } from '@/components/ThemeProvider'

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

export default function RootLayout ({ children }: RootLayoutProps) {
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
          {children}
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
