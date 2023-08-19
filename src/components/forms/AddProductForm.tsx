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
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'
import { productSchema, type ProductInputs } from '@/lib/validators/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import SelectInput from '../SelectInput'
import { Button } from '../ui/Button'
import { Label } from '../ui/Label'
import { Textarea } from '../ui/Textarea'

interface AddProductFormProps {}

const AddProductForm: FC<AddProductFormProps> = ({}) => {
  const router = useRouter()
  const { categories, getCategories } = useCategories()

  useEffect(() => {
    getCategories()
  }, [])

  const form = useForm<ProductInputs>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      unit_cost: 0,
      unit_price: 0,
      description: '',
      stock: 0
    }
  })

  const { handleChange, profit, cost, price, stock, length } = useProducts(form)

  const onSubmit = async (values: ProductInputs) => {
    fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({
        ...values,
        profit: Number(profit) / 100
      })
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 500)
            throw new Error('Ups, Hubo un error al crear el producto')
        }

        toast.success('Producto creado correctamente')
      })
      .catch((err) => {
        toast.error(err.message)
      })
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
                Nombre <span className='text-red-500 text-lg'>*</span>
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
          name='stock'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  placeholder='Cantidad (Opcional)'
                  {...field}
                  onChange={(e) => handleChange(e, 'stock')}
                  value={stock || ''}
                />
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
                  icon='money'
                  type='number'
                  placeholder='Valor compra (Opcional)'
                  {...field}
                  onChange={(e) => handleChange(e, 'unit_cost')}
                  value={cost || ''}
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
                <Input
                  icon='money'
                  type='number'
                  placeholder='Valor venta (Opcional)'
                  {...field}
                  onChange={(e) => handleChange(e, 'unit_price')}
                  value={price || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-col gap-2'>
          <Label>Ganancia</Label>
          <Input
            icon='percent'
            readOnly
            disabled
            placeholder='0.00'
            value={profit}
            className='text-muted-foreground disabled:cursor-default disabled:opacity-100'
          />
        </div>
        <FormField
          control={form.control}
          name='category_id'
          render={({ field }) => (
            <FormItem className='flex flex-col w-full'>
              <FormLabel>Categoría</FormLabel>
              <SelectInput
                options={categories}
                placeholder='Buscar categoría...'
                {...field}
                fn={form.setValue}
              />
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
                  maxLength={100}
                  length={length}
                  placeholder='Descripción del producto (Opcional)'
                  {...field}
                  onChange={(e) => handleChange(e, 'description')}
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
