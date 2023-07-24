'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { AuthFormSchema, AuthFormValidator } from '@/lib/validators/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, FormEvent, HtmlHTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from './ui/Button'

interface AuthFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  signIn?: boolean
}

const AuthForm: FC<AuthFormProps> = ({ signIn }) => {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<AuthFormSchema>({
    resolver: zodResolver(AuthFormValidator),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (signIn) {
      setIsLoading(true)
      supabase.auth
        .signInWithPassword(form.getValues())
        .then(({ data, error }) => {
          if (error) {
            toast.error(error.message)
            return
          }
          router.push('/')
          router.refresh()
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      try {
        const { email, password } = form.getValues()
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`
          }
        })
        console.log({ data, error })
        if (error) {
          toast.error(error.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className='flex flex-col gap-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='ejemplo@correo.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='relative'>
              <FormLabel>Contraseña</FormLabel>
              {signIn && (
                <Link
                  href='/reset-password'
                  className='font-medium text-sm absolute top-0 right-0 text-muted-foreground'
                >
                  Olvidaste la contraseña?
                </Link>
              )}
              <FormControl>
                <Input type='password' placeholder='••••••••' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div></div>
        <Button
          isLoading={isLoading}
          disabled={
            form.getValues().email === '' || form.getValues().password === '' || isLoading
          }
          type='submit'
          className='w-full'
        >
          Enviar
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm
