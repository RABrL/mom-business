import { ComponentProps } from 'react'

export default function Input (props: ComponentProps<'input'>, label: string) {
  return (
    <label className={`text-md text-neutral-400 ${props.className ?? ''}`} htmlFor={props.id}>
      {label}
      <input {...props} />
    </label>
  )
}
