'use client'

import Separator from '@/components/Separator'
import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import {
  resetPasswordSchema,
  type ResetPasswordInputs
} from '@/lib/validators/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '@/components/ui/Input'

interface ResetPasswordFormProps {}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({}) => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const form = useForm<ResetPasswordInputs>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = async ({ email }: ResetPasswordInputs) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/api/auth/callback?next=/update-password`
    })
    if (error) {
      toast.error(error?.message)
      return
    }
    toast.success(`Enviamos un link a ${email}`, {
      description: 'Revisalo para continuar'
    })
    form.reset()
    router.refresh()
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='example@correo.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <Button
          isLoading={form.formState.isSubmitting}
          disabled={form.getValues().email === ''}
          type='submit'
          className='w-full'
        >
          Enviame el link
        </Button>
      </form>
    </Form>
  )
}

export default ResetPasswordForm
