'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

interface QueryProviderProps {
  children: React.ReactNode
}

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider
