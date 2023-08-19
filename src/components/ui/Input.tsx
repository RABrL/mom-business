import * as React from 'react'

import { cn } from '@/lib/utils'
import { type IconsType } from '@/types'
import { cva } from 'class-variance-authority'
import Icons from './Icons'

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background hover:border-brand placeholder-shown:bg-muted py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'px-3',
        icon: 'pl-9 pr-3'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconsType
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const Icon = icon ? Icons[icon] : Icons['money']
    return icon ? (
      <div className='relative'>
        <span
          className='absolute top-0 bottom-0 left-0 flex items-center pl-3 text-background-foreground opacity-100'
          aria-hidden='true'
        >
          <Icon className='w-4 h-4 shrink-0 ' />
        </span>
        <input
          type={type}
          className={cn(inputVariants({ variant: 'icon' }), className)}
          ref={ref}
          {...props}
        />
      </div>
    ) : (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
