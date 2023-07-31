import { Button } from '@/components/ui/Button'
import Icons from '@/components/ui/Icons'
import { Separator } from '@radix-ui/react-separator'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className='absolute top-0 w-full px-2 pt-4 mx-auto sm:px-8 sm:pt-6 lg:px-10'>
        <span>Logo</span>
        Nombre App
      </nav>
      <main className='flex flex-col flex-1 flex-shrink-0 items-center bg-background pt-16 pb-8 h-screen px-5 shadow-lg'>
        {children}
      </main>
    </>
  )
}
