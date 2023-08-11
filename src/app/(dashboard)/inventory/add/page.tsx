import AddProductForm from '@/components/forms/AddProductForm'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <h2>Add new Product</h2>
      <AddProductForm />
    </>
  )
}

export default page
