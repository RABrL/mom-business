'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Button } from './ui/Button'

interface ButtonLogOutProps {}

const ButtonLogOut: FC<ButtonLogOutProps> = ({}) => {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const logOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return <Button onClick={logOut}>Cerrar sesión</Button>
}

export default ButtonLogOut
