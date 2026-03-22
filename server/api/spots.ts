import { Spot } from '~/interfaces/spot'
import { getSpots } from '~/utils/data'

export default defineEventHandler((event): Spot[] => {
  return getSpots() as Spot[]
})