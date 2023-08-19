'use client'

import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { Separator } from '@/components/ui/Separator'
import {
  newPasswordSchema,
  type NewPasswordInputs
} from '@/lib/validators/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import PasswordInput from '@/components/PasswordInput'

interface UpdatePasswordFormProps {
  /**
   * Update password component for forgot password
   */
  isForgotPassword?: boolean
}

const UpdatePasswordForm: FC<UpdatePasswordFormProps> = ({
  isForgotPassword
}) => {
  const supabase = createClientComponentClient<Database>()

  const form = useForm<NewPasswordInputs>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      actual_password: '',
      new_password: '',
      confirm: ''
    }
  })

  const onSubmit = async ({
    actual_password,
    new_password
  }: NewPasswordInputs) => {
    /* if(isFromEmail) {
      await supabase.from('users').select('*').eq('email', supabase.auth.user()?.email)
    } */
    const { data, error } = await supabase.auth.updateUser({
      password: new_password
    })
    if (error) {
      toast.error('Ups! Ha ocurrido un error')
      return
    }
    toast.success('Tu contraseña ha sido actualizada')
    if (isForgotPassword) {
      await supabase.auth.signOut()
      import('next/navigation').then(({ useRouter }) => useRouter().refresh())
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        {!isForgotPassword && (
          <FormField
            control={form.control}
            name='actual_password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña actual</FormLabel>
                <FormControl>
                  <PasswordInput
                    type='password'
                    placeholder='••••••••'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name='new_password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña nueva</FormLabel>
              <FormControl>
                <PasswordInput
                  type='password'
                  placeholder='••••••••'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirm'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirma la contraseña</FormLabel>
              <FormControl>
                <PasswordInput
                  type='password'
                  placeholder='••••••••'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <Button
          disabled={
            !form.getValues().new_password ||
            !form.getValues().confirm ||
            (isForgotPassword ? false : !form.getValues().actual_password)
          }
          isLoading={form.formState.isSubmitting}
          type='submit'
        >
          Actualizar contraseña
        </Button>
      </form>
    </Form>
  )
}

export default UpdatePasswordForm
