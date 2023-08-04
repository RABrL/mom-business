import MenuBurger from '@/components/MenuBurger'
import ToggleTheme from '@/components/ToggleTheme'
import Icons from '@/components/ui/Icons'

interface layoutProps {
  children: React.ReactNode
}

export default function layout({ children }: layoutProps) {
  return (
    <div className='flex'>
      <header>
        <MenuBurger />
        <Icons.menu />
      </header>
      <nav>
        <ToggleTheme />
      </nav>
      {children}
    </div>
  )
}
