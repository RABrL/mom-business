'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/Button'

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      aria-label='Toggle dark mode'
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun
        aria-hidden='true'
        className='h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'
      />
      <Moon
        aria-hidden='true'
        className='absolute h-5 w-5 scale-0 rotate-0 transition-all dark:scale-100 dar:rotate-90'
      />
    </Button>
  )
}

export default ToggleTheme
