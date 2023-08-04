import { Button } from '@/components/ui/Button'
import Icons from '@/components/ui/Icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { FC } from 'react'

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='text-base md:hidden'
        >
          <Icons.menu aria-hidden='true' className='h-6 w-6' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>Aca ira el navbar</SheetContent>
    </Sheet>
  )
}

export default MobileNav
