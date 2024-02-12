'use client'

import { Button } from '@/components/ui/Button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/Command'
import { QUICK_ACCESS } from '@/config/quick-access'
import { isMacOs } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { FC, useCallback, useEffect, useState } from 'react'
import Icons from './ui/Icons'

interface SearchButtonProps {}

const SearchButton: FC<SearchButtonProps> = ({}) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  let isMac

  useEffect(() => {
    isMac = isMacOs()
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setIsOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant='outline'
        className='relative h-9 w-9 px-4 p-0 md:h-10 md:w-60 md:justify-start md:px-3 md:py-2 text-sm text-muted-foreground'
      >
        <Icons.search className='w-4 h-4 md:mr-2' />
        <span className='hidden md:inline-flex'>Buscar productos...</span>
        <span className='sr-only'>Buscar productos</span>
        <kbd className='pointer-events-none absolute right-1.5 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex'>
          <abbr title={isMac ? 'Command' : 'Control'}>
            {isMac ? '⌘' : 'Ctrl+'}
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog position='top' open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder='Busca algun producto del inventario..' />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading='Accesos rapidos'>
            <CommandItem
              value='Inicio'
              onSelect={() => runCommand(() => router.push('/'))}
            >
              <Icons.star className='mr-2 h-4 w-4' />
              Inicio
            </CommandItem>
            {QUICK_ACCESS.map(({ title, href }, ind) => (
              <CommandItem
                key={ind}
                value={title}
                onSelect={() => runCommand(() => router.push(href))}
              >
                <Icons.star className='mr-2 h-4 w-4' />
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchButton
