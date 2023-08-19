import type { Database as DB } from './database.types'

declare global {
  type Database = DB
  type Products = DB['public']['Tables']['products']['Row']
  type Categories = DB['public']['Tables']['categories']['Row']
}
