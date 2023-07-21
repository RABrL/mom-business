import ToggleTheme from '@/components/ToggleTheme'
import { Separator } from '@/components/ui/Separator'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.auth.getUser()
  console.log(data)
  return (
    <div className='flex-1 flex flex-col max-w-3xl mt-24'>
      <nav>
        <ToggleTheme />
      </nav>
      <h1>Dashboard</h1>
    </div>
  )
}
