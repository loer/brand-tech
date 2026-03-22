import { getCategories, getCategoryLevel } from '~/utils/data'
import { Category } from '~/interfaces/category'

export default defineEventHandler((event): Category[] => {
  const level = Number(getQuery(event).level)
  return level ? getCategoryLevel(level) : getCategories()
})