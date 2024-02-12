import Separator from '@/components/Separator'
import ButtonsOAuth from '@/components/auth/ButtonsOAuth'
import AuthForm from '@/components/forms/AuthForm'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className='flex flex-1 flex-col justify-center w-[330px] sm:w-[384px]'>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-background-foreground text-2xl lg:text-3xl'>
          Bienvenido/a de vuelta
        </h1>
        <h2 className='text-sm text-muted-foreground'>
          Elige tu metodo de inicio de sesión preferido
        </h2>
      </div>
      <div className='flex flex-col gap-5'>
        <ButtonsOAuth />
        <Separator text='ó ingresa con' />
        <AuthForm signIn />
      </div>
      <div className='self-center my-8 text-sm'>
        <span className='text-muted-foreground'>Aún no tienes cuenta?</span>{' '}
        <Button variant='link' className='p-0 underline' asChild>
          <Link href='/sign-up'>Crea una ahora</Link>
        </Button>
      </div>
    </div>
  )
}
