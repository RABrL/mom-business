'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthApiError } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, HtmlHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/Button'

import { authSchema, type AuthInputs } from '@/lib/validators/auth'
interface AuthFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  signIn?: boolean
}

const AuthForm: FC<AuthFormProps> = ({ signIn }) => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const form = useForm<AuthInputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit = async (values: AuthInputs) => {
    if (signIn) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword(values)
        if (error) {
          throw error
        }
        router.refresh()
      } catch (error) {
        if (error instanceof AuthApiError) {
          toast.error('Credenciales incorrectas')
          return
        }
        toast.error('Ha ocurrido un error, intentelo de nuevo')
      }
    } else {
      try {
        const { email, password } = values
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/api/auth/callback`
          }
        })
        if (error) {
          throw error
        }
        toast.success('Registro exitoso', {
          description: `Hemos enviado un link de verificación a ${email}`
        })
        router.refresh()
      } catch (error) {
        if (error instanceof AuthApiError) {
          toast.error('Credenciales incorrectas')
          return
        }
        toast.error('Ha ocurrido un error, intentelo de nuevo')
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='ejemplo@correo.com' {...field} />
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
              <FormDescription>
                Debe contener al menos 8 caracteres
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormMessage />
        <Button
          isLoading={form.formState.isSubmitting}
          disabled={
            !form.getValues().email ||
            !form.getValues().password ||
            form.formState.isSubmitting
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
