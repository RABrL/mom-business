import { Varela_Round, Inter } from 'next/font/google'

export const fontVarela = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})
