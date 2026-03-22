import { getCategory } from '~/utils/data'
import { Category } from '~/interfaces/category'

export default defineEventHandler((event): Category => {
  const categoryId = getQuery(event).categoryId as string | undefined
  const category = getCategory(categoryId || '') as Category
  return category
})