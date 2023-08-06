import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import Icons from './ui/Icons'

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Banner: FC<BannerProps> = ({ className, ...props }) => {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <Icons.logo aria-hidden='true' size={36} />
      <span className='sr-only'>Logo pagina</span>
      <span className='font-bold tracking-wider'>{siteConfig.name}</span>
    </div>
  )
}

export default Banner
