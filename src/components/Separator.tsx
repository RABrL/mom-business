import { Separator as SeparatorUI } from '@/components/ui/Separator'
import { FC } from 'react'

interface SeparatorProps {
  text?: string 
}

const Separator: FC<SeparatorProps> = ({ text }) => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center'>
        <SeparatorUI />
      </div>
      {text && (
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-background text-muted-foreground uppercase'>
            {text}
          </span>
        </div>
      )}
    </div>
  )
}

export default Separator
