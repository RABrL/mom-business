import { categoriesService } from '@/services/categoriesService'
import { useCallback, useState } from 'react'

export function useCategories() {
  const [categories, setCategories] = useState<Categories[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getCategories = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const categories = await categoriesService.getCategories()
      setCategories(categories)
    } catch (err) {
      if (err instanceof Error) setError(err.message)
      setError('Hubo un error inesperado')
    } finally {
      // tanto en el try como en el catch se ejecuta el finally
      setLoading(false)
    }
  }, [])

  return { categories, getCategories, loading, error }
}
