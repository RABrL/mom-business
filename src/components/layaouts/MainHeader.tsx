import { FC } from 'react'
import ProfileMenu from '../ProfileMenu'
import SearchButton from '../SearchButton'
import MainNav from './MainNav'
import MobileNav from './MobileNav'
import ToggleTheme from './ToggleTheme'

interface MainHeaderProps {
  user: User | null
}

const MainHeader: FC<MainHeaderProps> = ({user }) => {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur-[6px]'>
      <div className='container flex md:grid md:grid-cols-[220px_minmax(0,1fr)] h-16 items-center'>
        <MobileNav />
        <MainNav />
        <div className='flex gap-1 flex-1 sm:gap-2 items-center justify-end'>
          <SearchButton />
          <ToggleTheme />
          <ProfileMenu user={user} />
        </div>
      </div>
    </header>
  )
}

export default MainHeader
