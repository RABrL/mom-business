'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthApiError } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { toast } from 'sonner'

const supabase = createServerComponentClient({ cookies })

export const useAuth = () => {
  const signInWithOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLI_APP_URL}/api/auth/callback`
      }
    })
  }

  const signInWithEmail = async ({
    email,
    password
  }: { email: string; password: string }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) {
        throw error
      }
      router.refresh()
      toast.success(`Bienvenido/a de vuelta`)
    } catch (error) {
      if (error instanceof AuthApiError) {
        toast.error('Credenciales incorrectas')
        return
      }
      toast.error('Ha ocurrido un error, intentelo de nuevo')
    }
  }

  const signUp = async ({
    email,
    password
  }: { email: string; password: string }) => {
    await supabase.auth.signUp({
      email,
      password
    })
  }

  const logOut = async () => {
    await supabase.auth.signOut()
    toast.success('Sesión cerrada con exito', {
      description: 'Vuelve pronto'
    })
  }

  return {
    signInWithOAuth,
    signInWithEmail,
    signUp,
    logOut
  }
}
