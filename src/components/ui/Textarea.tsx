import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  length?: number
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, length, maxLength, ...props }, ref) => {
    return (
      <div className='relative'>
        <textarea
          className={cn(
            'flex min-h-[80px] overflow-y-hidden resize-none w-full rounded-md border border-input hover:border-brand bg-background px-3 pt-2 pb-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          maxLength={maxLength}
          {...props}
        />
        {maxLength && length !== undefined && (
          <div className='absolute bottom-0 right-2 text-muted-foreground text-xs'>
            <span
              className={cn(
                length >= maxLength * 0.8 &&
                  length < maxLength &&
                  'text-yellow-500',
                length === maxLength && 'text-red-500'
              )}
            >
              {length}
            </span>
            /{maxLength}
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
