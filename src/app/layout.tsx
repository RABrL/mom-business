import type { Metadata } from 'next'

import '@/styles/globals.css'

import Providers from '@/components/Providers'
import { TailwindIndicator } from '@/components/TailwindIndicator'
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
        <Providers attribute='class' defaultTheme='system' enableSystem>
          {children}
          <TailwindIndicator />
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
