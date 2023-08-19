export const categoriesService = {
  async getCategories(): Promise<Categories[] | []> {
    const res = await fetch('/api/categories')
    const categories = await res.json()
    return categories
  },
  async addCategories(categorie: Categories) {
    fetch('/api/categories', {
      method: 'POST',
      body: JSON.stringify(categorie)
    })
  }
}
