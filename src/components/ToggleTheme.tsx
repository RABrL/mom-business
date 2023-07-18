'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/Button'

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme()

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
      {/* moon icon */}
      {theme === 'dark' ? (
        <Sun className='group-hover:scale-110' size={22} />
      ) : (
        <Moon className='group-hover:scale-110' size={22} />
      )}
    </Button>
  )
}

export default ToggleTheme
