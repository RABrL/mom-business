import { z } from 'zod'

export const authSchema = z.object({
  email: z.string().email({ message: 'La dirección de correo no es valida' }),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
})

export type AuthInputs = z.infer<typeof authSchema>

export const resetPasswordSchema = authSchema.pick({ email: true })

export type ResetPasswordInputs = z.infer<typeof resetPasswordSchema>

export const newPasswordSchema = z
  .object({
    actual_password: z.string().optional(),
    new_password: z
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    confirm: z
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  })
  .refine((data) => data.new_password === data.confirm, {
    message: 'Las contraseñas no coinciden',
    path: ['confirm']
  })

export type NewPasswordInputs = z.infer<typeof newPasswordSchema>
