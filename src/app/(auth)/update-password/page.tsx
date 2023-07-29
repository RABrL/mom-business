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
import { NewPasswordSchema, NewPasswordValidator } from '@/lib/validators/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const form = useForm<NewPasswordSchema>({
    resolver: zodResolver(NewPasswordValidator),
    defaultValues: {
      password: '',
      confirm: ''
    }
  })

  const onSubmit = async ({ password: new_password }: NewPasswordSchema) => {
    const { data, error } = await supabase.auth.updateUser({
      password: new_password
    })
    if (error) {
      toast.error('Ups! Ha ocurrido un error')
      return
    }
    toast.success('Tu contraseña ha sido actualizada')
    router.refresh()
  }

  return (
    <div className='flex flex-1 flex-col justify-center w-[330px] sm:w-[384px]'>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-background-foreground text-2xl lg:text-3xl'>
          Update your password
        </h1>
        <h2 className='text-sm text-muted-foreground'>
          Sign in a new password
        </h2>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña nueva</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='••••••••' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirm'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Escribe la misma contraseña</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='••••••••' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={!form.getValues().password || !form.getValues().confirm}
              isLoading={form.formState.isSubmitting}
              type='submit'
            >
              Actualizar contraseña
            </Button>
          </form>
        </Form>
      </div>
      <div className='self-center my-8 text-sm'>
        <span className='text-muted-foreground'>Don't have an account?</span>{' '}
        <Button variant='link' className='p-0 underline' asChild>
          <Link href='/sign-up'>Sign Up Now</Link>
        </Button>
      </div>
    </div>
  )
}

export default page
