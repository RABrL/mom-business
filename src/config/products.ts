import Icons from "@/components/ui/Icons"
import { ProductInputs } from "@/lib/validators/product"
import { HTMLInputTypeAttribute } from "react"

export interface NewProductConfig {
  inputs: {
    label: string
    placeholder: string
    type: HTMLInputTypeAttribute
    name: keyof ProductInputs
    icon: keyof typeof Icons
    required?: boolean
  }[]
}

export const newProductConfig: NewProductConfig = {
  inputs: [
    {
      label: 'Nombre',
      placeholder: 'Producto (Obligatorio)',
      required: true,
      name: 'name',
      type: 'text',
      icon: 'sun',
    },
    {
      label: 'Código',
      placeholder: 'Código de barras',
      name: 'bar_code',
      type: 'text',
      icon: 'sun',
    },
    {
      label: 'Cantidad',
      placeholder: 'Cantidad disponible',
      name: 'quantity',
      type: 'number',
      icon: 'sun',
    },
    {
      label: 'Imagen',
      placeholder: 'Imagen del producto',
      name: 'image',
      type: 'image',
      icon: 'sun',
    },
    {
      label: 'Código',
      placeholder: 'Código de barras',
      name: 'bar_code',
      type: 'text',
      icon: 'sun',
    },
  ]
}