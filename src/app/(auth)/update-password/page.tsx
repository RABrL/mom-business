import UpdatePasswordForm from '@/components/forms/UpdatePasswordForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { FC } from 'react'
interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  if (!session) {
    redirect('/')
  }
  return (
    <div className='flex flex-1 flex-col justify-center w-[330px] sm:w-[384px]'>
      <div className='mb-10'>
        <h1 className='mt-8 mb-2 text-background-foreground text-2xl lg:text-3xl'>
          Actualiza tu contraseña
        </h1>
        <h2 className='text-sm text-muted-foreground'>
          Crea una contraseña segura
        </h2>
      </div>
      <div>
        <UpdatePasswordForm isForgotPassword />
      </div>
    </div>
  )
}

export default page
