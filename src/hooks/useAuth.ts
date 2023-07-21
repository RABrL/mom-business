import { supabase } from '@/supabase/client'

export const useAuth = () => {
  const signInWithOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  const signInWithEmail = async ({
    email,
    password
  }: { email: string; password: string }) => {
    const result = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return result
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

  return {
    signInWithOAuth,
    signInWithEmail,
    signUp
  }
}
