import { getProduct } from '~/utils/data'
import { Product } from '~/interfaces/product'

export default defineEventHandler((event): Product | null => {
  const productId = Number(getQuery(event).id) as number | undefined

  const product = getProduct(productId || 0) as Product | null
  return product
})