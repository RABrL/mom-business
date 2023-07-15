import { Ring } from '@uiball/loaders'

export default function Loader ({ className, color = 'white' }: { className?: string, color?: string }) {
  return (
    <div className={`${className ?? ''}`}>
      <Ring size={22} speed={2} color={color} lineWeight={5} />
    </div>
  )
}
