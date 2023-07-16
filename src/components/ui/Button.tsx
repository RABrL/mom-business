import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import { sizes } from '../../lib/commonCva'

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>
const buttonVariants = cva(
   `relative 
   flex iems-center justify-center
   cursor-pointer 
   inline-flex 
   items-center 
   space-x-2 
   text-center 
   font-regular 
   ease-out 
   duration-200 
   rounded-md
   outline-none 
   transition-all 
   outline-0 
   focus-visible:outline-4 
   focus-visible:outline-offset-1
   border`,
   {
     variants: {
       type: {
         primary: `
            bg-brand-fixed-1100 hover:bg-brand-fixed-1000
            text-white
            border-brand-fixed-1000 hover:border-brand-fixed-900 dark:border-brand-fixed-1000 dark:hover:border-brand-fixed-1000
            focus-visible:outline-brand-600
            shadow-sm`,
         secondary: `
            bg-scale-1200
            text-scale-100 hover:textforwardRef(
              (
                {
                  type
                }, ref) => {
                return (
                  <div className={cn(buttonVariants)}>Button</div>
                )
              }-scale-800
            focus-visible:text-scale-600
            border-scale-1100 hover:border-scale-900
            focus-visible:outline-scale-700
            shadow-sm`,
         default: `
            text-scale-1200
            bg-scale-100 hover:bg-scale-300
            border-scale-600 hover:border-scale-700
            dark:border-scale-700 hover:dark:border-scale-800
            dark:bg-scale-500 dark:hover:bg-scale-600
            focus-visible:outline-brand-600
            shadow-sm`,
         alternative: `
            text-brand-1100
            bg-brand-200 hover:bg-brand-400
            border-brand-600 hover:border-brand-800
            dark:border-brand-700 hover:dark:border-brand-800
            focus-visible:border-brand-800
            focus-visible:outline-brand-600
            shadow-sm`,
         outline: `
            text-scale-1200
            bg-transparent
            border-scale-600 hover:border-scale-700
            dark:border-scale-800 hover:dark:border-scale-900
            focus-visible:outline-scale-700`,
         dashed: `
            text-scale-1200
            border
            border-dashed
            border-scale-700 hover:border-scale-900
            bg-transparent
            focus-visible:outline-scale-700
            shadow-sm`,
         link: `
            text-brand-1100
            border
            border-transparent
            hover:bg-brand-400
            border-opacity-0
            bg-opacity-0 dark:bg-opacity-0
            shadow-none
            focus-visible:outline-scale-700`,
         text: `
            text-scale-1200
            hover:bg-scale-500
            shadow-none
            focus-visible:outline-scale-700
            border-transparent`,
         danger: `
            text-red-1100
            bg-red-200
            border-red-700 hover:border-red-900
            hover:bg-red-900
            hover:text-lo-contrast
            focus-visible:outline-red-700
            shadow-sm`,
         warning: `
            text-amber-1100
            bg-amber-200
            border-amber-700 hover:border-amber-900
            hover:bg-amber-900
            hover:text-hi-contrast
            focus-visible:outline-amber-700
            shadow-sm`
       },
       size: {
         ...sizes
       },
       block: {
         true: 'w-full flex items-center justify-center'
       },
       disabled: {
         true: 'opacity-50 cursor-not-allowed pointer-events-none'
       }
     },
     defaultVariants: {
       type: 'default'
     }
   }
)

export type LoadingVariantProps = VariantProps<typeof loadingVariants>
const loadingVariants = cva('', {
  variants: {
    loading: {
      true: 'animate-spin'
    }
  }
})
interface ButtonProps
  // omit `type` as we use it to change type of button
  // replaced with `htmlType`
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
  // omit 'disabled' as it is included in HTMLButtonElement
  Omit<ButtonVariantsProps, 'disabled'>,
  LoadingVariantProps {
  asChild?: boolean
  type?: ButtonVariantsProps['type']
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  icon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      size = 'tiny',
      type = 'primary',
      children,
      loading,
      block,
      icon,
      htmlType = 'button',
      ...props
    },
    ref) => {
    const { className, disabled } = props
    props.disabled = loading ?? props.disabled
    return (
      <button className={cn(buttonVariants({ type, size, disabled, block }), className)}>
        {children}
      </button>
    )
  })

export default Button
