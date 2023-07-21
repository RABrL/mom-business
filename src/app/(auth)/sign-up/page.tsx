import AuthForm from '@/components/AuthForm'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className='flex flex-1 flex-col justify-center w-[330px] sm:w-[384px]'>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-background-foreground text-2xl lg:text-3xl'>
          Get started
        </h1>
        <h2 className='text-sm text-muted-foreground'>Create a new account</h2>
      </div>
      <AuthForm />
      <div className='self-center my-8 text-sm'>
        <span className='text-muted-foreground'>Already have an account?</span>{' '}
        <Button variant='link' className='p-0 underline' asChild>
          <Link href='/sign-in'>Sign in now</Link>
        </Button>
      </div>
    </div>
  )
}
