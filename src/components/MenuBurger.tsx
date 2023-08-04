import { Button } from '@/components/ui/Button'
import Icons from '@/components/ui/Icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { FC } from 'react'

interface MenuBurgerProps {}

const MenuBurger: FC<MenuBurgerProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Icons.menu aria-hidden='true' />
        </Button>
        <span className='sr-only'>Burger menu</span>
      </SheetTrigger>
      <SheetContent side='left'>Aca ira el navbar</SheetContent>
    </Sheet>
  )
}

export default MenuBurger
