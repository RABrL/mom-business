import MainHeader from '@/components/layouts/MainHeader'
import SidebarNav from '@/components/layouts/SidebarNav'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
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
    <div className='flex h-screen flex-col'>
      <MainHeader user={user} />
      <div className='container px-4 md:px-8 flex md:grid md:grid-cols-[240px_minmax(0,1fr)] h-16'>
        <aside className='md:border-r hidden md:fixed md:flex md:top-[73px] md:min-w-[240px] md:h-full '>
          <ScrollArea className='pt-4 pr-4 flex-1'>
            <SidebarNav />
          </ScrollArea>
        </aside>
        <div></div>
        <main className='flex w-full flex-col md:pl-6'>
          {children}
        </main>
      </div>
    </div>
  )
}
