import { Product } from '~/interfaces/product'
import { getProducts, getCategoryProducts } from '~/utils/data'

export default defineEventHandler((event): Product[] => {
  const categoryId = getQuery(event).categoryId as string | undefined
  return categoryId ? getCategoryProducts(categoryId) : getProducts()
})