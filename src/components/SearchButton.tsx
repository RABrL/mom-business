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
import { isMacOs } from '@/lib/utils'
import { FC, useEffect, useState } from 'react'
import Icons from './ui/Icons'

interface SearchButtonProps {}

const SearchButton: FC<SearchButtonProps> = ({}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant='outline'
        className='relative h-9 w-9 px-4 p-0 md:h-10 md:w-60 md:justify-start md:px-3 md:py-2 text-sm text-muted-foreground'
      >
        <Icons.search className='w-4 h-4 md:mr-2' />
        <span className='hidden md:inline-flex'>Buscar productos...</span>
        <span className='sr-only'>Buscar productos</span>
        <kbd className='pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex'>
          <abbr title={isMacOs() ? 'Command' : 'Control'}>
            {isMacOs() ? '⌘' : 'Ctrl+'}
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog position='top' open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Busca algun producto del inventario..' />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchButton
