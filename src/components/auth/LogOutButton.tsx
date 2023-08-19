'use client'

import { cn, isMacOs } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { DropdownMenuShortcut } from '../ui/DropdownMenu'
import Icons from '../ui/Icons'

interface LogOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const LogOutButton = forwardRef<HTMLButtonElement, LogOutButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button className={cn('w-full', className)} {...props}>
        <Icons.logout aria-hidden='true' className='mr-2 h-4 w-4' />
        Cerrar sesión
        <DropdownMenuShortcut
          className='hidden md:block'
          title={isMacOs() ? 'Command' : 'Control'}
        >
          {isMacOs() ? '⇧⌘Q' : 'Ctrl+Q'}
        </DropdownMenuShortcut>
      </button>
    )
  }
)

export default LogOutButton
