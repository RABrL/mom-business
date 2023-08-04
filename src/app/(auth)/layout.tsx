import Icons from '@/components/ui/Icons'
import { siteConfig } from '@/config/site'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className='absolute top-0 w-full px-2 pt-4 mx-auto sm:px-8 sm:pt-6 lg:px-8 flex items-center gap-3 '>
        <Icons.logo aria-hidden='true' size={36} />
        <span className='sr-only'>Logo pagina</span>
        <span className='font-bold tracking-wider'>
          {siteConfig.name}
        </span>
      </header>
      <div className='flex'>
        <main className='flex flex-col flex-1 items-center bg-background pt-16 pb-8 h-screen px-5 shadow-lg'>
          {children}
        </main>
      </div>
    </>
  )
}
