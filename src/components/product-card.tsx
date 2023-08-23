import { Button } from './ui/Button'
import { Card, CardContent, CardFooter } from './ui/Card'
import Icons from './ui/Icons'

interface ProductCardProps {
  product: Products & {
    categories: {
      name: string
    } | null
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, image, stock, unit_cost, unit_price, categories } = product
  const intl = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  return (
    <Card className='shadow-md'>
      <CardContent className='grid grid-cols-[2fr_3fr] p-3 pb-0 gap-2'>
        <picture className='border-muted border-2 rounded-2xl grid place-content-center'>
          <img
            src={image ? image : './no-image.avif'}
            alt={name}
            className='object-cover w-full h-full'
          />
        </picture>
        <div className='text-sm flex flex-col justify-evenly'>
          <div>
            <h3>Precio: {intl.format(unit_price)}</h3>
            <h3>Costo: {intl.format(unit_cost)}</h3>
            <h3>Stock: {stock}</h3>
          </div>
          <Button className='mt-2 w-full gap-3 font-bold'>
            Comprar más <Icons.shoppingCart className='h4- w-4' />
          </Button>
        </div>
      </CardContent>
      {stock < 5 && (
        <div className='text-red-500 flex items-center justify-center text-sm pt-2 gap-2'>
          <Icons.AlertTriangle className='h-4 w-4' />
          <p className='text-xs font-semibold'>Baja cantidad de producto.</p>
        </div>
      )}
      <CardFooter className='flex flex-col w-full items-start p-3 pt-2'>
        <span className='text-muted-foreground text-xs'>
          {categories?.name ? categories.name : 'Sin categoría'}
        </span>
        <span className='leading-none'>hilo dental</span>
      </CardFooter>
    </Card>
  )
}
