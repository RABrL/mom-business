import { z } from 'zod'

export const AuthFormValidator = z.object({
  email: z.string().email({ message: 'Email invalido' }),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
})

export type AuthFormSchema = z.infer<typeof AuthFormValidator>

export const ResetPasswordValidator = z.object({
  email: z.string().email({ message: 'Email invalido' })
})

export type ResetPasswordSchema = z.infer<typeof ResetPasswordValidator>
