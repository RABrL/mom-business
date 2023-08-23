import ProductCard from '@/components/product-card'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { FC } from 'react'

import Icons from '@/components/ui/Icons'
import { cookies } from 'next/headers'

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const supabase = await createServerComponentClient<Database>({ cookies })
  const { data: products, error } = await supabase
    .from('products')
    .select(`*,categories(name)`)

  return (
    <div className='px-2 pt-4 md:pt-5 md:px-0'>
      <header className='flex items-center pb-5 pl-2 gap-4'>
        <div className='w-9 h-9 bg-muted rounded-full grid place-content-center'>
          <Icons.inventory size='24px' className='fill-primary' />
        </div>
        <h2 className='text-xl font-bold'>Inventario</h2>
      </header>
      <section className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-3'>
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <span>No hay productos en tu inventario</span>
        )}
      </section>
    </div>
  )
}

export default page
