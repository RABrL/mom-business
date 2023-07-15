import Button from '@/ui/components/Button'

export default function SignIn () {
  return (
    <>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-2xl lg:text-3xl'>
          Welcome back
        </h1>
        <h2 className='text-sm text-[#bbb]'>
          Sign in to your account
        </h2>
      </div>
      <div>
        <form action=''>
          <Button>Ingresar con github
          </Button>
        </form>
      </div>
      <div />
    </>
  )
}
