import { Button } from '@/components/ui/Button'

export default function SignIn() {
  return (
    <>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-background-foreground text-2xl lg:text-3xl'>
          Welcome back
        </h1>
        <h2 className='text-sm text-muted-foreground'>
          Sign in to your account
        </h2>
      </div>
      <div>
        <form action=''>
          <Button isLoading className='w-full'>
            Ingresar con github
          </Button>
        </form>
      </div>
      <div />
    </>
  )
}
