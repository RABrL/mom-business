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
    currency: 'COP'
  })
  return (
    <Card>
      <CardContent className='grid grid-cols-[1fr_2fr] p-3 pb-0'>
        <picture className=''>
          <img src='' alt={name} />
        </picture>
        <div className=''>
          <h3>Precio: {intl.format(unit_price)}</h3>
          <h3>Costo: {intl.format(unit_cost)}</h3>
          <h3>Stock: {stock}</h3>
          <Button className='mt-2 w-full gap-3 font-bold'>
            Comprar más <Icons.shoppingCart className='h4- w-4' />
          </Button>
          {stock < 5 && (
            <div className='text-red-500 flex items-center justify-center text-sm pt-2 gap-2'>
              <Icons.AlertTriangle className='h-4 w-4' />
              <p className='text-xs font-semibold'>
                Baja cantidad de producto.
              </p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className='flex flex-col w-full items-start p-3 pt-0'>
        <span className='text-muted-foreground text-xs'>
          {categories?.name ? categories.name : 'Sin categoría'}
        </span>
        <span>{name}</span>
      </CardFooter>
    </Card>
  )
}
