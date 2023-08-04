import Icons from '@/components/ui/Icons'
import { siteConfig } from '@/config/site'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()

  console.log(user)

  if (user) {
    redirect('/')
  }
  return (
    <>
      <header className='absolute top-0 w-full px-2 pt-4 mx-auto sm:px-8 sm:pt-6 lg:px-8 flex items-center gap-3 '>
        <Icons.logo aria-hidden='true' size={36} />
        <span className='sr-only'>Logo pagina</span>
        <h1 className='font-bold tracking-wider'>{siteConfig.name}</h1>
      </header>
      <div className='flex'>
        <main className='flex flex-col flex-1 items-center bg-background pt-16 pb-8 h-screen px-5 shadow-lg'>
          {children}
        </main>
      </div>
    </>
  )
}
