'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Separator } from '@/components/ui/Separator'
import { AuthFormSchema, AuthFormValidator } from '@/lib/validators/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, FormEvent, HtmlHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from './ui/Button'
import { Form } from './ui/Form'
import Icons from './ui/Icons'

interface AuthFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  signIn?: boolean
}

const AuthForm: FC<AuthFormProps> = ({ signIn }) => {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const form = useForm<AuthFormSchema>({
    resolver: zodResolver(AuthFormValidator),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSignInWithOAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (signIn) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword(
          form.getValues()
        )
        if (error) {
          toast.error(error.message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const result = await supabase.auth.signUp(form.getValues())
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='flex flex-col gap-5'>
      <Button
        onClick={handleSignInWithOAuth}
        className='gap-2 shadow'
        variant='outline'
      >
        <Icons.google width={22} height={22} />
        Ingresa con Google
      </Button>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <Separator />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-background text-background-foreground'>
            or
          </span>
        </div>
      </div>
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
                <FormLabel>Password</FormLabel>
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
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default AuthForm
