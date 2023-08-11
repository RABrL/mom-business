'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { setInputChange } from '@/lib/utils'
import { productSchema, type ProductInputs } from '@/lib/validators/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button'
import { Textarea } from '../ui/Textarea'

interface AddProductFormProps {}

const AddProductForm: FC<AddProductFormProps> = ({}) => {
  const router = useRouter()

  const form = useForm<ProductInputs>({
    resolver: zodResolver(productSchema)
  })

  const onSubmit = async (values: AddProductFormProps) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-2'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nombre <span className='text-destructive text-lg'>*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder='Producto (Obligatorio)' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='unit_cost'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Costo unitario</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  placeholder='Valor compra (Opcional)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='unit_price'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio unitario</FormLabel>
              <FormControl>
                <Input placeholder='Valor venta (Opcional)' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='quantity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input placeholder='Cantidad disponible' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='quantity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input placeholder='Cantidad disponible' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  id='description'
                  maxLength={100}
                  className='resize-none overflow-y-hidden h-auto'
                  placeholder='Descripción del producto (Opcional)'
                  {...field}
                  onChange={(e) => setInputChange(e, '60px')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-center gap-2'>
          <Button
            type='button'
            onClick={() => router.back()}
            className='flex-1 max-w-xs'
            variant={'outline'}
          >
            Cancelar
          </Button>
          <Button className='flex-1 max-w-xs' type='submit'>
            Crear
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AddProductForm
