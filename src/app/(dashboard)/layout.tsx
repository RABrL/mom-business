import MainHeader from '@/components/layaouts/MainHeader'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies} from 'next/headers'
import { redirect } from 'next/navigation'
interface layoutProps {
  children: React.ReactNode
}

export default async function layout({ children }: layoutProps) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (!user) {
    redirect('/sign-in')
  }
  return (
    <div className='flex min-h-screen flex-col'>
      <MainHeader user={user}/>
      {children}
    </div>
  )
}
