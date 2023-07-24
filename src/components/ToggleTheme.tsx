'use client'

import { useMounted } from '@/hooks/useMounted'
import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button, buttonVariants } from './ui/Button'
import { Skeleton } from './ui/Skeleton'

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme()
  const mounted = useMounted()

  if (!mounted) {
    return (
      <div
        className={cn(
          buttonVariants({ size: 'icon' }),
          'flex content-center bg-transparent hover:bg-transparent'
        )}
      >
        <Skeleton className='text-muted-foreground w-6 h-6 rounded-full' />
      </div>
    )
  }

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Button
      onClick={() => handleTheme()}
      className='group'
      aria-label='Toggle dark mode'
      variant='ghost'
      size='icon'
    >
      {theme === 'dark' ? (
        <Sun className='group-hover:scale-110 ' size={22} />
      ) : (
        <Moon className='group-hover:scale-110' size={22} />
      )}
    </Button>
  )
}

export default ToggleTheme