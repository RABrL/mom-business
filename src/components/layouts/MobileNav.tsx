import { Button } from '@/components/ui/Button'
import Icons from '@/components/ui/Icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { FC } from 'react'
import SidebarNav from './SidebarNav'

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='text-base md:hidden'>
          <Icons.menu aria-hidden='true' className='h-6 w-6' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='p-4 ' side='left' >
        <div className='mt-7'>
          <SidebarNav />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
