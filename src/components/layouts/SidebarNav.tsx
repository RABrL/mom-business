'use client'

import { dashboardConfig } from '@/config/dashboard'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'
import { Card, CardContent } from '../ui/Card'
import Icons from '../ui/Icons'
interface SidebarNavProps {
  setIsOpen?: (isOpen: boolean) => void
}

const SidebarNav: FC<SidebarNavProps> = ({ setIsOpen }) => {
  const pathname = usePathname()
  const items = dashboardConfig.sidebarNav
  return (
    <nav className='flex flex-col flex-1'>
      <Card className='flex items-center py-4 px-5 gap-4 bg-muted'>
        <picture>
          <Avatar>
            <AvatarImage
              src='https://avatars.githubusercontent.com/u/109044497?v=4'
              alt='Avatar github'
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </picture>
        <CardContent className='p-0 text-sm'>
          <h6 className='font-semibold'>Andres Brito</h6>
          <p className='text-muted-foreground'>Admin</p>
        </CardContent>
      </Card>
      <ul className=''>
        {items.map(({ section, items }, index) => {
          return (
            <li key={index}>
              <h3 className='p-4 font-bold md:text-base text-sm tracking-wide'>
                {section}
              </h3>
              {items.map((item, index) => {
                const Icon = Icons[item.icon ?? 'sun']

                return item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    {...(setIsOpen && { onClick: () => setIsOpen(false) })}
                    target={item.external ? '_blank' : ''}
                    rel={item.external ? 'noreferrer' : ''}
                  >
                    <span
                      className={cn(
                        'flex w-full items-center text-sm md:text-base rounded-sm py-2 transition-colors',
                        {
                          'bg-brand hover:bg-brand-hover font-medium text-brand-foreground':
                            pathname === item.href,
                          'text-muted-foreground hover:bg-muted hover:text-foreground':
                            pathname !== item.href
                        }
                      )}
                    >
                      <Icon className='w-14 h-6' aria-hidden='true' />
                      <span>{item.title}</span>
                    </span>
                  </Link>
                ) : (
                  <span key={index} className='flex gap-2 text-sm md:text-base'>
                    {item.title}
                  </span>
                )
              })}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SidebarNav
