'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { cn, isMacOs } from '@/lib/utils'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { toast } from 'sonner'
import { buttonVariants } from './ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from './ui/DropdownMenu'
import Icons from './ui/Icons'

interface ProfileMenuProps {
  user: User | null
}

const ProfileMenu: FC<ProfileMenuProps> = ({}) => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const logOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
    toast.success('Sesión cerrada con exito', { description: 'Vuelve pronto' })
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'q' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        logOut()
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: 'secondary' }),
          'h-9 w-9 rounded-full relative'
        )}
      >
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://avatars.githubusercontent.com/u/109044497?v=4' />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'></DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icons.github width={18} height={18} className='mr-2' />
            Gooogle
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <button onClick={logOut} className='w-full'>
              <Icons.logout aria-hidden='true' className='mr-2 h-4 w-4' />
              Cerrar sesión
              <DropdownMenuShortcut title={isMacOs() ? 'Command' : 'Control'}>
                {isMacOs() ? '⇧⌘Q' : 'Ctrl+Q'}
              </DropdownMenuShortcut>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu
