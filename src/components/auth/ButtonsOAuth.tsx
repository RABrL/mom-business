'use client'

import { Button } from '@/components/ui/Button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FC } from 'react'
import Icons from '../ui/Icons'
interface ButtonsOAuthProps {}

const ButtonsOAuth: FC<ButtonsOAuthProps> = ({}) => {
  
  const handleClick = async () => {
    const supabase = createClientComponentClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`
      }
    })
  }

  return (
    <Button onClick={handleClick} className='gap-2 shadow' variant='outline'>
      <Icons.google width={22} height={22} />
      Continua con Google
    </Button>
  )
}

export default ButtonsOAuth
