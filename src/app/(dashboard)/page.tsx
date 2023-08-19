import QuickAccess from '@/components/quick-access'
import { Shell } from '@/components/shells/Shell'

export default async function Index() {
  return (
    <Shell className='grid items-center pb-8 pt-6 md:py-8 container md:px-0 gap-12'>
      <QuickAccess />
    </Shell>
  )
}
