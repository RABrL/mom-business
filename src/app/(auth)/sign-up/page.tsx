import AuthForm from '@/components/forms/AuthForm'
import ButtonsOAuth from '@/components/ButtonsOAuth'
import Separator from '@/components/Separator'
import { Button } from '@/components/ui/Button'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function SignUp() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()

  console.log(user)

  if (user) {
    redirect('/')
  }
  return (
    <div className='flex flex-1 flex-col justify-center w-[330px] sm:w-[384px]'>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-background-foreground text-2xl lg:text-3xl'>
          Empieza hoy mismo
        </h1>
        <h2 className='text-sm text-muted-foreground'>Crea una cuenta nueva</h2>
      </div>
      <div className='flex flex-col gap-5'>
        <ButtonsOAuth />
        <Separator text='ó continua con' />
        <AuthForm />
      </div>
      <div className='self-center my-8 text-sm'>
        <span className='text-muted-foreground'>Ya tienes una cuenta?</span>{' '}
        <Button variant='link' className='p-0 underline' asChild>
          <Link href='/sign-in'>Ingresa ahora</Link>
        </Button>
      </div>
    </div>
  )
}
