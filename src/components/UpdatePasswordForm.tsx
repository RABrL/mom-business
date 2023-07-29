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
import { Input } from '@/components/ui/Input'
import { Separator } from '@/components/ui/Separator'
import { type NewPasswordSchema, NewPasswordValidator } from '@/lib/validators/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface UpdatePasswordFormProps {}

const UpdatePasswordForm: FC<UpdatePasswordFormProps> = ({}) => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const onSubmit = async ({ password: new_password }: NewPasswordSchema) => {
    const { data, error } = await supabase.auth.updateUser({
      password: new_password
    })
    if (error) {
      toast.error('Ups! Ha ocurrido un error')
      return
    }
    toast.success('Tu contraseña ha sido actualizada')
    router.push('/')
  }
  const form = useForm<NewPasswordSchema>({
    resolver: zodResolver(NewPasswordValidator),
    defaultValues: {
      password: '',
      confirm: ''
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña nueva</FormLabel>
              <FormControl>
                <Input type='password' placeholder='••••••••' {...field} />
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
                <Input type='password' placeholder='••••••••' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <Button
          disabled={!form.getValues().password || !form.getValues().confirm}
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
