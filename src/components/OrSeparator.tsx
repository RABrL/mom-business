import { Separator } from '@/components/ui/Separator'

const OrSeparator = ({}) => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center'>
        <Separator />
      </div>
      <div className='relative flex justify-center text-sm'>
        <span className='px-2 bg-background text-background-foreground'>
        ó
        </span>
      </div>
    </div>
  )
}

export default OrSeparator
