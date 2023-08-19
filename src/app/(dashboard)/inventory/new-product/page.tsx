import AddProductForm from '@/components/forms/AddProductForm'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <h2 className=''>Agregar Producto</h2>
      <AddProductForm />
    </>
  )
}

export default page
