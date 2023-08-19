'use client'

import { Input, InputProps } from '@/components/ui/Input'
import { forwardRef, useState } from 'react'
import Icons from './ui/Icons'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

interface PasswordInputProps extends InputProps {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('pr-10', className)}
          ref={ref}
          {...props}
        />
        <Button
          type='button'
          variant='ghost'
          size='sm'
          className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === '' || props.disabled}
        >
          {showPassword ? (
            <Icons.hide className='h-4 w-4' aria-hidden='true' />
          ) : (
            <Icons.view className='h-4 w-4' aria-hidden='true' />
          )}
          <span className='sr-only'>
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>
      </div>
    )
  }
)

export default PasswordInput
