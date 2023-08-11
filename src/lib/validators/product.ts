import { z } from 'zod'

export const productSchema = z
  .object({
    name: z.string().min(3).max(50),
    bar_code: z.string().max(50),
    image: z.string(),
    quantity: z.number().positive(),
    unit_price: z.number().positive(),
    unit_cost: z.number().positive(),
    category_id: z.string(),
    description: z.string().max(100)
  })
  .partial()
  .required({ name: true })

export type ProductInputs = z.infer<typeof productSchema>
