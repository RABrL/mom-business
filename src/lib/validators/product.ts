import { z } from 'zod'

export const productSchema = z
  .object({
    name: z
      .string({ required_error: 'El nombre es requerido' })
      .min(3, { message: 'Debe tener almenos 3 caracteres' })
      .max(50, { message: 'Maximo 50 caracteres' }),
    bar_code: z.string().max(50),
    image: z.string(),
    quantity: z.number().positive(),
    unit_price: z
      .number()
      .positive({ message: 'El precio debe ser mayor a 0' }),
    unit_cost: z.number().positive({ message: 'El costo debe ser mayor a 0' }),
    category_id: z.string(),
    description: z.string().max(100)
  })
  .partial()
  .required({ name: true })

export type ProductInputs = z.infer<typeof productSchema>
