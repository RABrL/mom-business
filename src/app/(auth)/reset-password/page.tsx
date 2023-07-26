'use client'

import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Separator } from '@/components/ui/Separator'
import {
  ResetPasswordSchema,
  ResetPasswordValidator
} from '@/lib/validators/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(ResetPasswordValidator),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      form.getValues().email
    )
    if (!error) {
      router.push('/update-password')
    }
    toast.error(error?.message)
  }

  return (
    <div className='flex flex-1 flex-col justify-center w-[330px] sm:w-[384px]'>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-background-foreground text-2xl lg:text-3xl'>
          Reinicia tu contraseña
        </h1>
        <h2 className='text-sm text-muted-foreground'>
          Escribe tu correo y te enviaremos un link para reiniciar tu contraseña
          Type in your email and we'll send you a link to reset your password
        </h2>
      </div>
      <div className='flex flex-col gap-5'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='example@correo.com' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <Button
              isLoading={form.formState.isSubmitting}
              disabled={form.getValues().email === ''}
              type='submit'
              className='w-full'
            >
              Enviame el link
            </Button>
          </form>
        </Form>
      </div>
      <div className='self-center my-8 text-sm'>
        <span className='text-muted-foreground'>Ya tienes una cuenta?</span>{' '}
        <Button variant='link' className='p-0 underline' asChild>
          <Link href='/sign-in'>Inicia sesión</Link>
        </Button>
      </div>
    </div>
  )
}

export default page
