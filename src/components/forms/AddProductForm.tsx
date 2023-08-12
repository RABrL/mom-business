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
import { setInputHeight } from '@/lib/utils'
import { productSchema, type ProductInputs } from '@/lib/validators/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import SelectInput from '../SelectInput'
import { Button } from '../ui/Button'
import { Label } from '../ui/Label'
import { Textarea } from '../ui/Textarea'

interface AddProductFormProps {}

const AddProductForm: FC<AddProductFormProps> = ({}) => {
  const router = useRouter()
  const [profit, setProfit] = useState<string>('')
  const form = useForm<ProductInputs>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      category_id: '',
      unit_cost: 0,
      unit_price: 0,
      description: '',
      quantity: 0
    }
  })

  const [description, cost, price, quantity] = form.watch([
    'description',
    'unit_cost',
    'unit_price',
    'quantity'
  ])

  const length = description?.length

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: keyof ProductInputs
  ) => {
    const element = e.target
    if (element instanceof HTMLInputElement) {
      if (Number(element.value) >= 0) {
        form.setValue(field, +element.value)
        handleProfit()
      }
      return
    }
    setInputHeight(element, '60px')
    form.setValue(field, element.value)
  }

  const handleProfit = () => {
    const [price, cost] = form.watch(['unit_price', 'unit_cost'])
    if (price && cost) {
      const percent = ((price - cost) / cost) * 100
      setProfit(percent.toFixed(2))
      return
    }
    setProfit('')
  }

  const onSubmit = async (values: AddProductFormProps) => {
    console.log({
      ...values,
      profit: Number(profit) / 100
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
          name='quantity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  placeholder='Cantidad (Opcional)'
                  {...field}
                  onChange={(e) => handleChange(e, 'quantity')}
                  value={quantity || ''}
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
