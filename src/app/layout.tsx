import { Varela_Round } from 'next/font/google'
import './globals.css'

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html lang='es' className={varelaRound.className}>
      <body className='dark'>
        {children}
      </body>
    </html>
  )
}