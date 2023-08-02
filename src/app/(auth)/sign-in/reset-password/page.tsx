import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
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
        <ResetPasswordForm />
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
