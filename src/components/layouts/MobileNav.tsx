'use client'
import { Button } from '@/components/ui/Button'
import Icons from '@/components/ui/Icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { FC, useState } from 'react'
import SidebarNav from './SidebarNav'

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='text-base md:hidden'>
          <Icons.menu aria-hidden='true' className='h-6 w-6' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='p-4 ' side='left'>
        <div className='mt-7'>
          <SidebarNav setIsOpen={setIsOpen}/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
