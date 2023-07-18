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
      <main className='flex justify-center bg-background flex-1 pt-12 pb-8 h-screen px-2'>
        <section className='flex flex-1 flex-col align-center max-w-sm'>
          {children}
        </section>
      </main>
    </>
  )
}
