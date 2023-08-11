import { clsx, type ClassValue } from 'clsx'
import { ChangeEvent } from 'react'
import { EventEmitter } from 'stream'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMacOs() {
  if (typeof window !== 'undefined')
    return window.navigator.userAgent.includes('Mac')
}

export function setInputChange(
  element: any,
  defaultHeight: `${number}px`
) {
  if(element) {
    const target = element.target ? element.target : element
    target.style.height = defaultHeight
    target.style.height = `${target.scrollHeight}px`
  }
}
