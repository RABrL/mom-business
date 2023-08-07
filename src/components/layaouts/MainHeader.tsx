import { FC } from 'react'
import Banner from '../Banner'
import ProfileMenu from '../ProfileMenu'
import SearchButton from '../SearchButton'
import MobileNav from './MobileNav'
import ToggleTheme from './ToggleTheme'

interface MainHeaderProps {
  user: User | null
}

const MainHeader: FC<MainHeaderProps> = ({ user }) => {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur-[6px]'>
      <div className='container px-4 md:px-8 flex md:grid md:grid-cols-[240px_minmax(0,1fr)] h-16 items-center'>
        <MobileNav />
        <Banner className='hidden md:flex h-full w-full border-r' />
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
