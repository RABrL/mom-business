import AuthForm from '@/components/AuthForm'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FC, FormEvent } from 'react'
import { toast } from 'sonner'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(ResetPasswordValidator),
    defaultValues: {
      password: ''
    }
  })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.updateUser({
      password
    })
    if (!error) {
      router.push('/')
    }
    toast.error(error?.message)
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
        <AuthForm />
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
