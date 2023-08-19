'use client'

import { cn } from '@/lib/utils'
import { ProductInputs } from '@/lib/validators/product'
import { forwardRef, useState } from 'react'
import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form'
import { Button } from './ui/Button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from './ui/Command'
import { FormControl } from './ui/Form'
import Icons from './ui/Icons'

interface SelectInputProps extends ControllerRenderProps {
  placeholder: string
  options: { id: number; name: string }[]
  fn: UseFormSetValue<ProductInputs>
}

const SelectInput = forwardRef<HTMLElement, SelectInputProps>(
  ({ placeholder, fn, options, ...props }, ref) => {
    const [open, setOpen] = useState(false)
    const handleSelect = (value: number | undefined) => {
      fn('category_id', value)
      setOpen(false)
    }

    return (
      <>
        <FormControl ref={ref}>
          <Button
            type='button'
            onClick={() => setOpen(true)}
            className={cn(
              'justify-between',
              !props.value && 'text-muted-foreground'
            )}
            variant='outline'
          >
            {props.value
              ? options.find(({ id }) => id === props.value)?.name
              : 'Sin categoría'}
            <Icons.upDown className='w-4 ml-2 shrink-0 opacity-50' />
          </Button>
        </FormControl>
        <CommandDialog position='default' open={open} onOpenChange={setOpen}>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>No se encontraron categorias</CommandEmpty>
          <CommandGroup>
            <CommandItem onSelect={() => handleSelect(undefined)}>
              <Icons.check
                className={cn(
                  'mr-2 w-4 h-4',
                  typeof props.value === 'undefined'
                    ? 'opcaity-100'
                    : 'opacity-0'
                )}
              />
              Sin categoría
            </CommandItem>
            {options.map(({ id, name }) => (
              <CommandItem
                key={id}
                value={name}
                onSelect={() => handleSelect(id)}
              >
                <Icons.check
                  className={cn(
                    'mr-2 w-4 h-4',
                    id === props.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandDialog>
      </>
    )
  }
)

export default SelectInput
