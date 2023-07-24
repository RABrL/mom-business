'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { FC } from 'react'
interface ProvidersProps extends ThemeProviderProps {}

const Providers: FC<ProvidersProps> = ({ children, ...props }) => {
  const queryClient = new QueryClient()
  return (
    <NextThemesProvider {...props}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextThemesProvider>
  )
}

export default Providers
