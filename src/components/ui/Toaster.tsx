'use client'

import { Toaster as RadToaster } from 'sonner'

export function Toaster() {
  return (
    <RadToaster
      expand
      richColors
      position='top-right'
      duration={4000}
    />
  )
}
