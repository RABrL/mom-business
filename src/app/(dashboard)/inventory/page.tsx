import ProductCard from '@/components/product-card'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { FC } from 'react'

import { cookies } from 'next/headers'

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const supabase = await createServerComponentClient<Database>({ cookies })
  const { data: products, error } = await supabase
    .from('products')
    .select(`*,categories(name)`)

  return (
    <section className='grid gap-3 p-2'>
      {products ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h2>No hay productos en tu inventario</h2>
      )}
    </section>
  )
}

export default page
