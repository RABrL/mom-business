import ButtonLogOut from '@/components/ButtonLogOut'
import ToggleTheme from '@/components/ToggleTheme'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/sign-in')
  }
  console.log(user)
  return (
    <div className='flex-1 flex flex-col max-w-3xl mt-24'>
      <nav>
        <ToggleTheme />
      </nav>
      <h1>Dashboard</h1>
      <ButtonLogOut />
    </div>
  )
}
