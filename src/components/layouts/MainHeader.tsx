import Link from 'next/link'
import { FC } from 'react'
import Banner from '../Banner'
import ProfileMenu from '../ProfileMenu'
import SearchButton from '../SearchButton'
import MobileNav from './MobileNav'
import ToggleTheme from './ToggleTheme'

interface MainHeaderProps {
  //user: User | null
}

const MainHeader: FC<MainHeaderProps> = ({}) => {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur-[6px]'>
      <div className='container flex h-16 items-center md:grid md:grid-cols-[240px_minmax(0,1fr)]'>
        <MobileNav />
        <Link href='/'>
          <Banner className='hidden md:flex h-full w-full border-r' />
        </Link>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <SearchButton />
            <ToggleTheme />
            <ProfileMenu />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
