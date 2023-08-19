import { setInputHeight } from '@/lib/utils'
import { ProductInputs } from '@/lib/validators/product'
import { ChangeEvent, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

export const useProducts = (form: UseFormReturn<ProductInputs>) => {
  const [profit, setProfit] = useState<string>('')

  const [description, cost, price, stock] = form.watch([
    'description',
    'unit_cost',
    'unit_price',
    'stock'
  ])

  const length = description?.length

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: keyof ProductInputs
  ) => {
    const element = e.target
    if (element instanceof HTMLInputElement) {
      const value = Number(element.value)
      if (value >= 0) {
        form.setValue(field, value)
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

  return {
    handleChange,
    profit,
    length,
    cost,
    price,
    stock
  }
}
