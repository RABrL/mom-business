import ToggleTheme from '@/components/ToggleTheme'

export default async function Index() {
  console.log(process.env.NEXT_PUBLIC_APP_URL)
  return (
    <div className='flex-1 flex flex-col max-w-3xl mt-24'>
      <nav>
        <ToggleTheme />
      </nav>
      <h1>Dashboard</h1>
    </div>
  )
}
