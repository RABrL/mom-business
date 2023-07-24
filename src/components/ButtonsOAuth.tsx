'use client'

import { Button } from '@/components/ui/Button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FC } from 'react'
import Icons from './ui/Icons'

interface ButtonsOAuthProps {}

const ButtonsOAuth: FC<ButtonsOAuthProps> = ({}) => {
  const supabase = createClientComponentClient()

  const handleSignInWithOAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    })
  }
  return (
    <Button
      onClick={handleSignInWithOAuth}
      className='gap-2 shadow'
      variant='outline'
    >
      <Icons.google width={22} height={22} />
      Continua con Google
    </Button>
  )
}

export default ButtonsOAuth
