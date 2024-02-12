import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import { Card, CardContent, CardHeader } from './ui/Card'
import { QUICK_ACCESS } from '@/config/quick-access'

interface QuickAccessProps {}

const QuickAccess: FC<QuickAccessProps> = ({}) => {
  return (
    <section className='flex flex-1 flex-col max-w-full'>
      <h2 className='font-semibold mb-4 text-base md:text-lg'>
        Accesos rápidos
      </h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 text-xs md:text-sm font-medium'>
        {QUICK_ACCESS.map(
          (
            { icon: { Icon, className, background }, title, href, hover },
            ind
          ) => (
            <Link href={href} key={ind}>
              <Card
                className={cn(
                  'px-3 py-5 md:p-6 flex flex-col justify-between gap-5 text-balance h-full shadow-md',
                  hover
                )}
              >
                <CardHeader className='px-0 py-0'>
                  <div
                    className={cn(
                      'w-9 h-9 rounded-full grid place-content-center',
                      background
                    )}
                  >
                    <Icon aria-hidden='true' className={cn(className)} />
                  </div>
                </CardHeader>
                <CardContent className='px-0 py-0'>{title}</CardContent>
              </Card>
            </Link>
          )
        )}
      </div>
    </section>
  )
}

export default QuickAccess
