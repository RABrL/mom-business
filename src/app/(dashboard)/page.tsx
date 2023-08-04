import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Index() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/sign-in')
  }
  return <div className='flex-1 flex flex-col max-w-3xl mt-24'></div>
}
