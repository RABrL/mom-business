import { z } from 'zod'

export const AuthFormValidator = z.object({
  email: z
    .string()
    .email({ message: 'El correo no es valido' }),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
})

export type AuthFormSchema = z.infer<typeof AuthFormValidator>

export const ResetPasswordValidator = AuthFormValidator.pick({ email: true })

export type ResetPasswordSchema = z.infer<typeof ResetPasswordValidator>

export const NewPasswordValidator = z
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

export type NewPasswordSchema = z.infer<typeof NewPasswordValidator>
