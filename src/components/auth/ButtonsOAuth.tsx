'use client'

import { Button } from '@/components/ui/Button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FC } from 'react'
import Icons from '../ui/Icons'

interface ButtonsOAuthProps {}

const ButtonsOAuth: FC<ButtonsOAuthProps> = ({}) => {
  const supabase = createClientComponentClient<Database>()

  const handleSignInWithOAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
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
