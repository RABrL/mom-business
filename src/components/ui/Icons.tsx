import {
  DollarSign,
  Eye,
  EyeOff,
  LogOut,
  LucideProps,
  Menu,
  Moon,
  PackageOpen,
  Search,
  Sun,
  TrendingDown,
  TrendingUp,
  type LucideIcon
} from 'lucide-react'

export type Icon = LucideIcon

const Icons = {
  sun: Sun,
  moon: Moon,
  view: Eye,
  hide: EyeOff,
  menu: Menu,
  search: Search,
  logout: LogOut,
  sales: DollarSign,
  inventary: PackageOpen,
  'trending-down': TrendingDown,
  'trending-up': TrendingUp,
  logo: ({ size = 25, ...props }: LucideProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 256 256'
    >
      <defs>
        <linearGradient
          id='a'
          x1='8.954'
          x2='11.771'
          y1='20.386'
          y2='41.233'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#4b4b4b' />
          <stop offset='1' stopColor='#252525' />
        </linearGradient>
        <linearGradient
          id='b'
          x1='23.74'
          x2='32.123'
          y1='-10.617'
          y2='51.404'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#4b4b4b' />
          <stop offset='1' stopColor='#252525' />
        </linearGradient>
        <linearGradient
          id='c'
          x1='14.144'
          x2='28.714'
          y1='4.638'
          y2='61.753'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#faf8e5' />
          <stop offset='1' stopColor='#faeeac' />
        </linearGradient>
        <linearGradient
          id='d'
          x1='12.496'
          x2='12.496'
          y1='16.013'
          y2='18.965'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#ffd869' />
          <stop offset='1' stopColor='#fec52b' />
        </linearGradient>
        <linearGradient
          id='e'
          x1='26.814'
          x2='29.469'
          y1='21.585'
          y2='41.228'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#4b4b4b' />
          <stop offset='1' stopColor='#252525' />
        </linearGradient>
      </defs>
      <g
        fill='none'
        strokeMiterlimit='10'
        strokeWidth='none'
        fontFamily='none'
        fontSize='none'
        fontWeight='none'
        textAnchor='none'
      >
        <path
          fill='#f6f6f6'
          stroke='#f6f6f6'
          strokeLinejoin='round'
          strokeWidth='18.66672'
          d='M49.754 220.973c-6.64 7.317-11.4 3.603-13.397-2.29-3.412-10.073-2.082-45.665 17.597-71.023v-9.61c0-11.892.54-24.416 2.062-36.78l-.7-.063c-10.143-.65-19.526-1.395-23.6-2.115-3.441-.61-3.535-4.437-.237-5.196 4.438-1.017 15.164-2.771 26.328-4.494 4.274-23.643 12.79-45.726 28.795-60.453 10.858-11.064 30.9-19.171 54.463-19.171 62.222 0 80.89 70.292 80.89 127.81v96.19c0 6.876-5.57 12.445-12.445 12.445H72.62c-10.31 0-18.666-8.357-18.666-18.667v-11.552c-1.277 1.669-2.659 3.269-4.2 4.969z'
        />
        <g
          strokeLinejoin='miter'
          strokeWidth='1'
          transform='matrix(6.22224 0 0 6.22224 -14.49 -15.111)'
        >
          <path
            fill='url(#a)'
            d='M13.499 30.607c-1.243 4.843-1.83 5.853-3.174 7.335-1.067 1.176-1.832.579-2.153-.368-.609-1.798-.278-8.655 3.989-12.699z'
          />
          <path
            fill='url(#b)'
            d='M36 42h-9L16.247 7.081C17.992 5.303 21.213 4 25 4c10 0 13 11.297 13 20.541V40a2 2 0 0 1-2 2z'
          />
          <path
            fill='url(#c)'
            d='M16.247 7.081C11.923 11.06 11 18.379 11 24.615V39a3 3 0 0 0 3 3h13c0-7.159 2-16.317 2-23.476C29 8 23 6.058 16.247 7.081z'
          />
          <circle cx='13' cy='15' r='3' fill='#313131' />
          <ellipse
            cx='1.545'
            cy='18.239'
            fill='#fff'
            rx='1.345'
            ry='.906'
            transform='rotate(-35.653)'
          />
          <path
            fill='url(#d)'
            d='M7.388 17.519C9.141 17.117 17 16 17 16c.518.333.992.73.992 1.565 0 .777-.451 1.124-.992 1.435 0 0-7.826-.337-9.574-.646-.553-.098-.568-.713-.038-.835z'
          />
          <circle cx='23' cy='15' r='3' fill='#313131' />
          <ellipse
            cx='9.671'
            cy='24.066'
            fill='#fff'
            rx='1.345'
            ry='.906'
            transform='rotate(-35.653)'
          />
          <path
            fill='#e3a600'
            d='M17 19c.413-.238.769-.499.917-.953l-6.708.646C13.942 18.942 17 19 17 19z'
          />
          <path
            fill='url(#e)'
            d='M31.801 26.068a.997.997 0 0 0-1.598-.003c-2.973 3.981-6.953 9.45-7.241 11.257C22.712 38.891 23.5 39 24.5 39c.986 0 8.295 0 9.455-9.593a1.026 1.026 0 0 0-.197-.73z'
          />
        </g>
      </g>
    </svg>
  ),
  github: (props: LucideProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 24 24'>
      <path
        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
        fill='#4285F4'
      />
      <path
        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
        fill='#34A853'
      />
      <path
        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
        fill='#FBBC05'
      />
      <path
        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
        fill='#EA4335'
      />
      <path d='M1 1h22v22H1z' fill='none' />
    </svg>
  )
}

export default Icons
